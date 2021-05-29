import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { Button, ChakraProvider } from '@chakra-ui/react'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import Ceramic from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import React, { useMemo, useState } from 'react'
import { IDX } from '@ceramicstudio/idx'
import defs from './definitionIDs.json'
import Listing from './Listing'
import { IDXContext } from './IDXContext'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ceramicURL, setCeramicURL] = useState(
    // process.env.REACT_APP_CERAMIC_URL ?? 'http://localhost:7007'
    process.env.REACT_APP_CERAMIC_URL ?? 'https://ceramic-clay.3boxlabs.com'
  )
  const ceramic = useMemo(() => new Ceramic(ceramicURL), [ceramicURL])
  const aliases = useMemo(() => ({ mïmis: defs.definitions.mïmis }), [])
  const idx = useMemo(
    () => new IDX({ ceramic, aliases }),
    [aliases, ceramic]
  )
  const threeIdConnect = new ThreeIdConnect()
  const setRedraw = useState(false)[1]

  const connect = async () => {
    const addresses = await (
      window.ethereum.request({ method: 'eth_requestAccounts' })
    )
    const address = addresses[0]
    const authProvider = (
      new EthereumAuthProvider(window.ethereum, address)
    )
    await threeIdConnect.connect(authProvider)
    const did = new DID({
      provider: threeIdConnect.getDidProvider(),
      resolver: ThreeIdResolver.getResolver(ceramic)
    })
    await did.authenticate()
    ceramic.setDID(did)
    setRedraw(d => !d) // force redraw
  }
  const disconnect = () => {
    ceramic.setDID(undefined) // this doesn't work
    setRedraw(d => !d) // force redraw
  }

  return (
    <IDXContext.Provider value={idx}>
      <ChakraProvider>
        {(() => {
          const [text, onClick, colorScheme] = (
            idx.ceramic.did
            ? ( ['Disconnect', disconnect, "red"] )
            : ( ['Connect', connect, "green"] )
          )
          return (
            <Button
              position="fixed"
              right={5} top={5}
              {...{ onClick, colorScheme }}
            >
              {text}
            </Button>
          )
        })()}
        <Listing/>
      </ChakraProvider>
    </IDXContext.Provider>
  )
}