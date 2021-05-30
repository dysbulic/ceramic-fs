import {
  Box, Button, Image, Input, InputGroup,
  InputLeftAddon, Link, Spinner, Table,
  Tag, TagCloseButton, TagLabel, Tbody, Td,
  Text, Th, Thead, Tr, useDisclosure,
  useToast, Wrap,
} from '@chakra-ui/react'
import {
  useContext, useEffect, useRef, useState
} from 'react'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useSuggestions } from './useSuggestions'
import { IDXContext } from './IDXContext'
import defs from './definitionIDs.json'
import octocat from './octocat.svg'
import Settings from './Settings'

let tagKey = 0

const colors = [
  "gray", "red", "orange", "yellow", "green",
  "teal", "blue", "cyan", "purple", "pink",
]

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ ceramicURI, setCeramicURI }) => {
  const idx = useContext(IDXContext)
  const [tags, setTags] = useState([])
  const [elem, setElem] = useState('')
  const [did, setDID] = useState(
    'did:3:kjzl6cwe1jw147zr02h32lkdp666opzg0kp0sibzvumtn0z4k1wdxb6yb7ix4ie'
  )
  const [loading, setLoading] = useState(true)
  const [suggestions, setSearch] = useSuggestions({ did })
  const file = useRef(null)
  const entry = useRef(null)
  const [ipfsURI, setIPFSURI] = useState(
    process.env.REACT_APP_IPFS_URI ?? '/ip4/127.0.0.1/tcp/5001'
  )
  const ipfs = ipfsHttpClient(ipfsURI)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = async (evt) => {
    const raw = evt.target.value
    const tag = raw.trim()

    setLoading(true)

    if(evt.ctrlKey && evt.shiftKey && evt.key === 'Enter') {
      if(window.confirm('Clear All Data‽')) {
        if(!idx.ceramic.did) {
          alert('¡Connect to Ceramic!')
        } else {
          await idx.set('mïmis', {})
          toast({
            title: 'Reset File Paths.',
            description: 'The filesystem has been cleared.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
      }
      setLoading(false)
    } else if(evt.ctrlKey && evt.key === 'Enter') {
      try {
        await writePath({ path: tags })
        toast({
          title: 'Created Path.',
          description: `${tags[tags.length - 1]} has been added.`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      } catch(e) {
      } finally {
        setLoading(false)
      }
    } else if(/^(Arrow)?(Right|Up)$/.test(evt.key)) {
      if(!loading && suggestions.length === 1) {
        if(elem === suggestions[0]) {
          add(tag)
        } else {
          setElem(suggestions[0])
          setLoading(false)
        }
      }
    } else if(evt.key === 'Enter' && tag !== '') {
      add(tag)
    } else if(!evt.key) { // onChange, could easily be a separate function
      setElem(raw)
      setSearch(s => ({ path: s.path, string: raw }))
    }
  }
  const add = (term) => {
    setLoading(true)
    setTags(ts => {
      const path = [...ts, term]
      setSearch({ path, string: '' })
      return path
    })
    setElem('')
  }
  const remove = (idx) => {
    setLoading(true)
    setTags((ts) => {
      const copy = [...ts].slice(0, idx)
      setSearch({ path: copy, string: elem })
      return copy
    })
  }
  const writePath = async ({
    path, cid = null, filename = null,
  }) => {
    if(path.length === 0) return

    if(!idx.ceramic.did) {
      toast({
        title: 'Connect to Ceramic.',
        description: 'Creating paths requires connecting to the Ceramic network.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      throw new Error('Not Connected')
    } else {
      const urls = []
      const entry = await idx.get('mïmis', did)
      let root = entry
      const forward = []
      const url = root?.[path[0]]
      urls.push(url)
      if(Boolean(url)) {
        root = await TileDocument.load(idx.ceramic, url)
      }
      for(const elem of path.slice(1)) {
        const url = root?.content?.[elem]
        urls.push(url)
        if(Boolean(url)) {
          forward.push(root)
          root = await TileDocument.load(idx.ceramic, url)
        } else {
          break
        }
      }

      const isIDX = !entry?.[path[0]]
      const found = isIDX ? 0 : forward.length + 1

      console.info('FWD', { path, urls, found }, forward.map(d => [d.id.toUrl(), d.content]))

      // For the part of the path that doesn't exist, work back
      // from the leaf defining nodes.
      const nonexistent = (
        path.slice(Math.max(1, found), path.length).reverse()
      )
      console.info('NON', nonexistent)
      const backward = []
      for(const elem of nonexistent) {
        console.info("BKWRD", { found, backward, elem })
        const doc = await TileDocument.create(
          idx.ceramic,
          { [elem]: backward[0]?.id.toUrl() ?? null },
          {
            controllers: [idx.ceramic.did.id],
            family: 'Mïmis Context Node',
            schema: defs.schemas.Mïmis,
          }
        )
        backward.unshift(doc)
      }

      console.table({
        name: "DCKS",
        f: forward.map(d => d.content),
        b: backward.map(d => d.content),
        found, path, pl: path.length,
        fl: forward.length,
      })

      if(isIDX) { // this is a root entry
        if(forward.length > 0) {
          throw new Error("¿No Root, but Forward Walked?")
        }
        console.info('ROOT', {
          [path[0]]: backward[0]?.id.toUrl() ?? null
        })
        await idx.merge('mïmis', {
          [path[0]]: backward[0]?.id.toUrl() ?? null
        })
      } else if(found < path.length) {
        console.info('HERE')
        const [parent] = forward.slice(-1)
        const child = backward[0]
        console.info('PF', path[found - 1])
        const content = await TileDocument.load(
          idx.ceramic, parent.content[path[found - 1]]
        )
        console.table({
          pf: path[found],
          pf1: path[found + 1],
          name: 'CHAIN',
          pid: parent.id.toUrl(),
          pcon: parent.content,
          cid: child.id.toUrl(),
          ccon: child.content,
          content: content.content,
          exe: {
            ...content.content,
            ...child.content,
          },
        })
        await content.update({
          ...content.content,
          ...child.content,
        })
        console.info('NEW', content.content)
      } else {
        console.info('No Changes')
      }

      if(cid) {
        if(!filename) throw new Error('Filename not set.')
        const leaf = await TileDocument.create(
          idx.ceramic,
          { [filename]: `ipfs://${cid.toString()}` },
          {
            controllers: [idx.ceramic.did.id],
            family: 'Mïmis Content Node',
            schema: defs.schemas.Mïmis,
          }
        )
        let [parent] = backward.slice(-1)
        parent = parent ?? forward.slice(-1)[0]
        console.table({
          name: "DOC",
          parent,
          exe: {
            ...parent.content,
            [path.slice(-1)[0]]: leaf.id.toUrl(),
          }
        })
        await parent.update({
          ...parent.content,
          [path.slice(-1)[0]]: leaf.id.toUrl(),
        })
        console.table({
          p: parent.id.toUrl(),
          c: parent.commitId.toUrl(),
        })
      }
    }
  }
  const upload = async (evt) => {
    const files = evt.target.files
    const name = evt.target.value

    if(files.length === 0) {
      throw new Error('No file is selected')
    }

    for(const file of files) {
      const added = await ipfs.add(
        file,
        {
          progress: (prog) => console.info(`received: ${prog}`)
        }
      )
      const ext = name.split('.').slice(-1)
      const filename = `${ext}`
      // added.size
      writePath({
        path: tags, cid: added.cid, filename
      })
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [suggestions])

  useEffect(() => {
    if(idx?.ceramic?.did?.id) {
      setDID(idx.ceramic.did.id)
    }
  }, [idx?.ceramic?.did?.id])

  return (
    <>
      {idx.ceramic.did && (
        <>
          <Button
            position="fixed" top="25vh" right="3vw"
            colorScheme="orange"
            onClick={() => file.current.click()}
          >
            ➕
          </Button>
          <Input
            type="file" ref={file}
            style={{ display: 'none' }}
            onChange={upload}
          />
        </>
      )}
      <Button
        position="fixed" top="50vh" right="3vw"
        colorScheme="teal" fontSize={42} pt={1}
        onClick={onOpen}
      >
        ⚙
      </Button>
      <Settings
        {...{
          isOpen, onClose,
          ipfsURI, setIPFSURI,
          ceramicURI, setCeramicURI,
        }}
        finalFocusRef={entry}
      />
      <Link href="//github.com/dysbulic/ceramic-fs/">
        <Image
          src={octocat} position="fixed"
          boxSize="5vw" bottom={0} right={6}
        />
      </Link>
      <Box mr="10em">
        <InputGroup maxW="42rem" m="auto" mt={5}>
          <InputLeftAddon children="DID" title="Decentralized Identifier" />
          <Input
            borderWidth={3} textAlign="center"
            value={did} onChange={evt => setDID(evt.target.value)}
          />
        </InputGroup>
        <Wrap justify="center" mt={5}>
          {tags.map((tag, idx) => (
            <Tag
              grow={3}
              key={++tagKey}
              variant="solid"
              colorScheme={colors[idx % colors.length]}
              title={tag}
              mr={1}
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => remove(idx)}/>
            </Tag>
          ))}
          <Input
            maxW="20rem" borderWidth={3}
            autoFocus grow={1}
            onKeyDown={dispatch}
            value={elem} ref={entry}
            onChange={dispatch}
          />
        </Wrap>
        {(() => {
          if(loading) {
            return (
              <Box align="center">
                <Spinner size="xl" colorScheme="blue" m="auto" mt={40}/>
              </Box>
            )
          }
          if(suggestions.length === 0) {
            return (
              <Box mt="30vh">
                <Text
                  textAlign="center"
                  fontFamily="'Odibee Sans'"
                  fontSize={65}
                >
                  No path completions found…
                </Text>
              </Box>
            )
          }
          return (
            <Table>
              <Thead><Tr>
                <Th>Name</Th>
              </Tr></Thead>
              <Tbody>
                {suggestions.sort().map((sug, i) => (
                  <Tr key={i} _hover={{ bg: '#FFF70022' }}>
                    <Td onClick={() => add(sug)} cursor="pointer">
                      {sug}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )
        })()}
      </Box>
    </>
  )
}