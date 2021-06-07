import {
  Box, Button, Image, Input, InputGroup,
  InputLeftAddon, InputRightAddon, Link, ListItem, Spinner, Table,
  Tag, TagCloseButton, TagLabel, Tbody, Td,
  Text, Th, Thead, Tooltip, Tr, UnorderedList, useDisclosure,
  useToast, Wrap,
} from '@chakra-ui/react'
import {
  useCallback,
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
  const params = new URLSearchParams(window.location.search)
  const [did, setDID] = useState(
    params.get('did')
    ?? 'did:3:bafyreifdypkct7falt5aqkeahfl552ktoxlyh7lmrf6pttlwnfseufh4fe'
  )
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [myDID, setMyDID] = useState(null)
  const [suggestions, setSearch] = (
    useSuggestions({ did, setLoading })
  )
  const file = useRef(null)
  const entry = useRef(null)
  const [ipfsURI, setIPFSURI] = useState(
    process.env.REACT_APP_IPFS_URI ?? '/ip4/127.0.0.1/tcp/5001'
  )
  const ipfs = ipfsHttpClient(ipfsURI)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const add = useCallback((term) => {
    setLoading(true)
    setTags(ts => {
      const path = [...ts, term]
      setSearch({ path, string: '' })
      return path
    })
    setElem('')
  }, [setSearch])
  const remove = useCallback((idx) => {
    setLoading(true)
    setTags((ts) => {
      const copy = [...ts].slice(0, idx)
      setSearch({ path: copy, string: elem })
      return copy
    })
  }, [elem, setSearch])
  const text = useCallback((string) => {
    setLoading(true)
    setElem(string)
    setSearch(s => ({ path: s.path, string }))
  }, [setSearch])
  const writePath = useCallback(async ({
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

      // For the part of the path that doesn't exist, work back
      // from the leaf defining nodes.
      const nonexistent = (
        path.slice(Math.max(1, found), path.length).reverse()
      )
      const backward = []

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
        backward.push(leaf)
      }

      for(const elem of nonexistent) {
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

      if(isIDX) { // this is a root entry
        if(forward.length > 0) {
          throw new Error("¿No Root, but Forward Walked?")
        }
        await idx.merge('mïmis', {
          [path[0]]: backward[0]?.id.toUrl() ?? null
        })
      } else if(found < path.length) {
        const [parent] = forward.slice(-1)
        const child = backward[0]
        const content = await TileDocument.load(
          idx.ceramic, parent.content[path[found - 1]]
        )

        await content.update({
          ...content.content,
          ...child.content,
        })
      } else {
        console.info('No Changes')
      }
    }
  }, [did, idx, toast])
  const dispatch = useCallback(async (evt) => {
    const raw = evt.target.value
    const tag = raw.trim()

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
    } else if(evt.ctrlKey && evt.key === 'Enter') {
      console.info('Writing', tags)
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
      }
    } else if(/^(Arrow)?Up$/.test(evt.key)) {
      setSelected((s) => {
        if(s === null || s > suggestions?.length || s < 0) {
          return suggestions?.length - 1
        }
        return s - 1
      })
    } else if(/^(Arrow)?Down$/.test(evt.key)) {
      setSelected((s) => {
        if(s === null || s > suggestions?.length || s < 0) {
          return 0
        }
        return s + 1
      })
    } else if(/^(Arrow)?Right$/.test(evt.key)) {
      if(!loading && suggestions?.length === 1) {
        if(elem === suggestions?.[0]) {
          add(tag)
        } else {
          text(suggestions?.[0])
        }
      } else {
        if(
          selected !== null
          && selected >= 0
          && selected < suggestions?.length
        ) {
          text(suggestions?.[selected])
        }
      }
    } else if(evt.key === 'Enter' && tag !== '') {
      add(tag)
    } else if(
      (
        evt.key === 'Backspace'
        || /^(Arrow)?Left$/.test(evt.key)
      )
      && raw === ''
    ) {
      remove(tags.length - 1)
    }
  }, [add, elem, idx, loading, remove, selected, suggestions, tags, text, toast, writePath])
  const update = (evt) => {
    text(evt.target.value)
  }
  const upload = async (evt) => {
    const files = evt.target.files
    let name = evt.target.value

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
      const [ext] = name.split(/[./\\]/).slice(-1)
      const filename = ext
      // added.size
      writePath({
        path: tags, cid: added.cid, filename
      })
    }
  }

  // used to catch the effect of the useSuggestions hook
  useEffect(() => {
    setLoading(false)
  }, [suggestions])

  useEffect(() => {
    console.info('MyDID', idx?.ceramic?.did?.id)
    if(idx?.ceramic?.did?.id) {
      setMyDID(idx.ceramic.did.id)
    }
  }, [idx?.ceramic?.did?.id])

  useEffect(() => {
    window.addEventListener('keypress', dispatch, false)
    return () => {
      window.removeEventListener('keypress', dispatch, false)
    }
  }, [dispatch])

  return (
    <>
      {idx.ceramic.did && (
        <>
          <Tooltip hasArrow label="Add A File">
            <Button
              position="fixed" top="25vh" right={10}
              colorScheme="orange"
              onClick={() => file.current.click()}
            >
              ➕
            </Button>
          </Tooltip>
          <Input
            type="file" ref={file}
            style={{ display: 'none' }}
            onChange={upload}
          />
        </>
      )}
      <Tooltip hasArrow label="Settings">
        <Button
          position="fixed" top="50vh" right={10}
          colorScheme="teal" fontSize={42} pt={1}
          onClick={onOpen}
        >
          ⚙
        </Button>
      </Tooltip>
      <Settings
        {...{
          isOpen, onClose,
          ipfsURI, setIPFSURI,
          ceramicURI, setCeramicURI,
        }}
        finalFocusRef={entry}
      />
      <Link href="//github.com/dysbulic/ceramic-fs/">
        <Tooltip hasArrow label="GitHub">
          <Image
            src={octocat} position="fixed"
            boxSize="5vw" bottom={0} right={6}
          />
        </Tooltip>
      </Link>
      <Box mr="10em">
        <InputGroup maxW="42rem" m="auto" mt={5}>
          <InputLeftAddon
            children="DID"
            title="Decentralized Identifier"
          />
          <Input
            borderWidth={3} textAlign="center"
            value={did} onChange={evt => setDID(evt.target.value)}
          />
          {myDID && (
            <InputRightAddon
              children="←" title="Use Your DID"
              onClick={() => setDID(myDID)}
            />
          )}
        </InputGroup>
        <Wrap justify="center" mt={5}>
          {tags.map((tag, idx) => (
            <Tag
              grow={3} mr={1}
              key={++tagKey}
              variant="solid"
              colorScheme={colors[idx % colors.length]}
              title={tag}
              onClick={() => remove(idx + 1)}
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => remove(idx)}/>
            </Tag>
          ))}
          <Tooltip hasArrow label={
            <UnorderedList>
              <ListItem>Add text to search existing paths.</ListItem>
              <ListItem>⏎ to add an element to the current path.</ListItem>
              <ListItem>^⏎ to write a new path to the filesystem.</ListItem>
              <ListItem>↑ &amp; ↓ to navigate the potential paths.</ListItem>
              <ListItem>→ to select a path and → again to navigate.</ListItem>
            </UnorderedList>
          }>
            <Input
              maxW="21rem" borderWidth={3}
              autoFocus grow={1}
              onKeyDown={dispatch}
              value={elem} ref={entry}
              onChange={update}
              placeholder="Add Path Elements"
            />
          </Tooltip>
        </Wrap>
        {(() => {
          if(loading) {
            return (
              <Box align="center">
                <Spinner size="xl" colorScheme="blue" m="auto" mt={40}/>
              </Box>
            )
          }
          // this is a hack & should be replaced
          if(typeof suggestions === 'string') {
            let url = suggestions
            const match = (
              url.match(/^(ip[fn]s):\/\/(.+)$/)
            )
            if(match) {
              url = `http://ipfs.io/${match[1]}/${match[2]}`
            }
            return <Image src={url} m="auto" mt={5} maxH="80vh"/>
          }
          if(suggestions === null || suggestions?.length === 0) {
            return (
              <Box mt="30vh">
                <Text
                  textAlign="center"
                  fontFamily="'Odibee Sans'"
                  fontSize={65}
                >
                  {(suggestions === null) ? (
                    <>
                      <q>{did}</q> is not a valid
                      <acronym title="Decentralized Identifier">
                        DID
                      </acronym>.
                    </>
                  ) : (
                    <>No path completions found…</>
                  )}
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
                {suggestions
                .sort((a, b) => {
                  if(/^\d+$/.test(a) && /^\d+$/.test(b)) {
                    return parseInt(a) - parseInt(b)
                  }
                  return a.localeCompare(b)
                }).map((sug, i) => (
                  <Tr
                    key={i} _hover={{ bg: '#FFF70022' }}
                    bg={i === selected ? '#0000FF22' : 'transparent'}
                  >
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