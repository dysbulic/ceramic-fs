import { useCallback, useContext, useEffect, useState } from 'react'
import { IDX } from '@ceramicstudio/idx'
import defs from './definitionIDs.json'
import { CeramicContext } from './CeramicContext'

export const useSuggestions = () => {
  const [path, setPath] = useState([])
  const [idx, setIDX] = useState(null)
  const ceramic = useContext(CeramicContext)
  const [result, setResult] = useState([])

  const setup = () => {
    if(ceramic) {
      const aliases = { mïmis: defs.definitions.mïmis }
      setIDX(new IDX({ ceramic, aliases }))
    } else {
      setIDX(null)
    }  
  }
  useEffect(setup, [ceramic])

  const dereference = useCallback(async () => {
    if(idx) {
      const root = await idx.get('mïmis')
      console.info(root, path)
      setResult(path)
    }
  }, [path, idx])
  useEffect(() => dereference(), [dereference])

  return [result, setPath]
}