import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { Button, ChakraProvider } from '@chakra-ui/react'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import Ceramic from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import React, { useState } from 'react'
import { IDX } from '@ceramicstudio/idx'
import defs from './definitionIDs.json'
import Listing from './Listing'
import { IDXContext } from './IDXContext'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const ceramic = new Ceramic('http://localhost:7007')
  const aliases = { mïmis: defs.definitions.mïmis }
  const [idx, setIDX] = useState(new IDX({ ceramic, aliases }))
  const threeIdConnect = new ThreeIdConnect()
  const [_, setRedraw] = useState(false)

  const connect = async () => {
    const addresses = await (
      window.ethereum.request({ method: 'eth_requestAccounts' })
    )
    const address = addresses[0]
    const authProvider = new EthereumAuthProvider(window.ethereum, address)
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
    setIDX(null)
  }

  return (
    <IDXContext.Provider value={idx}>
      <ChakraProvider>
        {(() => {
          const [text, func] = (
            idx.ceramic.did
            ? ( ['Disconnect', disconnect] )
            : ( ['Connect', connect] ) 
          )
          return (
            <Button
              position="fixed"
              right={5} top={5}
              onClick={func}
              title={idx.ceramic.did?.id}
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