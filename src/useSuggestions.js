import { useContext, useEffect, useState } from 'react'
import Ceramic from '@ceramicnetwork/http-client'
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

  const dereference = async () => {
    if(idx) {
      const root = await idx.get('mïmis')
      console.info(root, path)
      setResult(path)
    }
  }
  useEffect(() => dereference(), [path, idx])

  return [result, setPath]
}