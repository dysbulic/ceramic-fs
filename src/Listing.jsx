import {
  Box,
  Button,
  Input, InputGroup, InputLeftAddon, Spinner, Stack, Table, Tag, TagCloseButton, TagLabel,
  Tbody, Td, Text, Th, Thead, Tr, useToast, Wrap,
} from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { useSuggestions } from './useSuggestions'
import { IDXContext } from './IDXContext'
import defs from './definitionIDs.json'

let tagKey = 0

const colors = [
  "gray", "red", "orange", "yellow", "green",
  "teal", "blue", "cyan", "purple", "pink",
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const idx = useContext(IDXContext)
  const [tags, setTags] = useState([])
  const [elem, setElem] = useState('')
  const [did, setDID] = useState(
    'did:3:kjzl6cwe1jw147zr02h32lkdp666opzg0kp0sibzvumtn0z4k1wdxb6yb7ix4ie'
  )
  const [loading, setLoading] = useState(true)
  const [suggestions, setSearch] = useSuggestions({ did })
  const file = useRef(null)
  const toast = useToast()

  const process = async (evt) => {
    const raw = evt.target.value
    const tag = raw.trim()

    setLoading(true)

    if(evt.ctrlKey && evt.shiftKey && evt.key === 'Enter') {
      await idx.set('mïmis', {})
      toast({
        title: 'Reset File Paths.',
        description: 'The filesystem has been cleared.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    } else if(evt.ctrlKey && evt.key === 'Enter') {
      await writePath(tags)
      toast({
        title: 'Created Path.',
        description: `${tags[tags.length - 1]} has been added.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    } else if(evt.key === 'Enter' && tag !== '') {
      add(tag)
    } else {
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
      const copy = [...ts]
      copy.splice(idx, 1)
      setSearch({ path: copy, string: elem })
      return copy
    })
  }
  const writePath = async (path) => {
    if(path.length === 0) return

    if(!idx.ceramic.did) {
      toast({
        title: 'Connect to Ceramic.',
        description: 'Creating paths requires connecting to the Ceramic network.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } else {
      let root = await idx.get('mïmis', did)
      const docs = []
      for(const elem of path) {
        const url = root?.[elem] ?? root?.content?.[elem]
        if(Boolean(url)) {
          root = await TileDocument.load(idx.ceramic, url)
          docs.push(root)
        } else {
          break
        }
      }

      // For the part of the path that doesn't exist, work back
      // from the leaf defining nodes.
      const nonexistent = (
        path.slice(docs.length, path.length).reverse()
      )
      const backPath = []
      for(const elem of nonexistent) {
        const doc = await TileDocument.create(
          idx.ceramic,
          { [elem]: backPath[0] ?? null },
          {
            controllers: [idx.ceramic.did.id],
            family: 'Mïmis Node',
            schema: defs.schemas.Mïmis,
          }
        )
        backPath.unshift(doc.id.toUrl())
      }
      if(docs.length === 0) {
        if(backPath.length > 0) {
          idx.merge('mïmis', { [path[0]]: backPath[1] })
        }
      } else {
        const doc = docs[docs.length - 1]
        const node = {
          ...doc.content,
          [path[docs.length]]: backPath[1] ?? null,
        }
        await doc.update(node)
      }
    }
  }
  const upload = (evt) => {
    const files = evt.target.files
    const name = evt.target.value

    if(files.length === 0) {
      throw new Error('No file is selected')
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
      <Button
        position="fixed" top={20} right={10}
        colorScheme="orange"
        onClick={() => file.current.click()}
      >
        ➕
      </Button>
      <Input type="file" ref={file} style={{ display: 'none' }}/>
      <Stack mr="10em">
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
            onKeyPress={process}
            value={elem}
            onChange={process}
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
              <Text textAlign="center">
                No path completions found…
              </Text>
            )
          }
          return (
            <Table>
              <Thead><Tr>
                <Th>Name</Th>
              </Tr></Thead>
              <Tbody>
                {suggestions.map((sug, i) => (
                  <Tr key={i}>
                    <Td onClick={() => add(sug)} cursor="pointer">
                      {sug}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )
        })()}
      </Stack>
    </>
  )
}