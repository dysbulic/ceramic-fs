import {
  Input, Stack, Table, Tag, TagCloseButton, TagLabel,
  Tbody, Td, Text, Th, Thead, Tr, Wrap,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useSuggestions } from './useSuggestions'
import { CeramicContext } from './CeramicContext'

let tagKey = 0

const colors = [
  "gray", "red", "orange", "yellow", "green",
  "teal", "blue", "cyan", "purple", "pink",
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const ceramic = useContext(CeramicContext)
  const [tags, setTags] = useState([])
  const [elem, setElem] = useState('')
  const [suggestions, setPath] = useSuggestions()
  const process = (evt) => {
    const raw = evt.target.value
    const tag = raw.trim()
    let list = tags
    if(evt.key === 'Enter' && tag !== '') {
      setTags(ts => (list = [...ts, tag]))
      setElem('')
    } else {
      setElem(raw)
    }
    setPath([...list, raw])
  }
  const remove = (idx) => {
    setTags((ts) => {
      const copy = [...ts]
      copy.splice(idx, 1)
      setPath([...copy, elem])
      return copy
    })
  }

  return (
    <Stack>
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
        if(!ceramic) {
          return (
            <Text textAlign="center">
              Connect to Ceramic to browse files.
            </Text>
          )
        }
        if(
          suggestions.length === 0
          || (suggestions.length === 1 && suggestions[0] === '')
        ) {
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
                <Tr key={i}><Td>{sug}</Td></Tr>
              ))}
            </Tbody>
          </Table>
        )
      })()}
    </Stack>
  )
}