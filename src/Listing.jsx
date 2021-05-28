import {
  Input, Tag, TagCloseButton, TagLabel, Wrap,
} from '@chakra-ui/react'
import { useState } from 'react'

let tagKey = 0

const colors = [
  "gray", "red", "orange", "yellow", "green",
  "teal", "blue", "cyan", "purple", "pink",
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [tags, setTags] = useState([])
  const [elem, setElem] = useState('')
  const process = (evt) => {
    const tag = elem.trim()
    if(evt.key === 'Enter' && tag !== '') {
      setTags(ts => [...ts, tag])
      setElem('')
    }
  }
  const remove = (idx) => {
    setTags((ts) => {
      const copy = [...ts]
      copy.splice(idx, 1)
      return copy
    })
  }

  return (
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
        onChange={(evt) => setElem(evt.target.value)}
      />
    </Wrap>
  )
}