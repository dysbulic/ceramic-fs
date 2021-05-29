import { useCallback, useContext, useEffect, useState } from 'react'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { IDXContext } from './IDXContext'

export const useSuggestions = ({ did }) => {
  const [search, setSearch] = useState({
    path: [], string: ''
  })
  const idx = useContext(IDXContext)
  const [result, setResult] = useState([])

  const dereference = useCallback(async () => {
    if(idx) {
      let root = await idx.get('mïmis', did)
      const nodes = root ? [root] : []
      for(const elem of search.path) {
        const url = root?.[elem]
        if(Boolean(url)) {
          root = (await TileDocument.load(idx.ceramic, url)).content
          root && nodes.push(root)
        } else {
          break
        }
      }

      let suggestions = []
      if(nodes.length - 1 === search.path.length) {
        suggestions = Object.keys(nodes[nodes.length - 1])
        if(search.string !== '') {
          suggestions = suggestions.filter(
            s => s.startsWith(search.string)
          )
        }
      }
      setResult(suggestions)
    }
  }, [search, idx, did])
  useEffect(() => dereference(), [dereference])

  return [result, setSearch]
}