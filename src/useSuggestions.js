import { useCallback, useContext, useEffect, useState } from 'react'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { IDXContext } from './IDXContext'

export const useSuggestions = ({ did, setLoading }) => {
  const [search, setSearch] = useState({
    path: [], string: ''
  })
  const idx = useContext(IDXContext)
  const [result, setResult] = useState([])
  const resolve = useCallback(
    (result) => {
      setLoading(false)
      setResult(result)
    },
    [setLoading],
  )

  const dereference = useCallback(async () => {
    if(idx) {
      let root = await idx.get('mïmis', did)
      const nodes = root ? [root] : []
      for(const elem of search.path) {
        const url = root?.[elem]

        if(url?.startsWith('ceramic://')) {
          root = (await
            TileDocument.load(idx.ceramic, url)
          ).content
          root && nodes.push(root)
        } else if(url?.startsWith('ipfs://')) {
          resolve(url) // a leaf with content
          return
        } else {
          break
        }
      }

      let suggestions = []
      if(nodes.length - 1 === search.path.length) {
        suggestions = Object.keys(nodes[nodes.length - 1])
        if(search.string !== '') {
          suggestions = suggestions.filter(
            s => s.includes(search.string)
          )
        }
      }
      resolve(suggestions)
    }
  }, [idx, did, search.path, search.string, resolve])
  useEffect(() => dereference(), [dereference])

  return [result, setSearch]
}