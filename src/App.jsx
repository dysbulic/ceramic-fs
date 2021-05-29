import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { Button, ChakraProvider } from '@chakra-ui/react'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import Ceramic from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import React, { useState } from 'react'
import Listing from './Listing'
import { CeramicContext } from './CeramicContext'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ceramic, setCeramic] = useState(null)
  const threeIdConnect = new ThreeIdConnect()
  const connect = async () => {
    const addresses = await window.ethereum.enable()
    const address = addresses[0]
    const authProvider = new EthereumAuthProvider(window.ethereum, address)
    await threeIdConnect.connect(authProvider)
    const ceramic = new Ceramic('http://localhost:7007')
    const did = new DID({
      provider: threeIdConnect.getDidProvider(),
      resolver: ThreeIdResolver.getResolver(ceramic)
    })
    await did.authenticate()
    ceramic.setDID(did)
    setCeramic(ceramic)
  }
  const disconnect = () => {
    setCeramic(null)
  }

  return (
    <CeramicContext.Provider value={ceramic}>
      <ChakraProvider>
        {(() => {
          const [text, func] = (
            ceramic
            ? ( ['Disconnect', disconnect] )
            : ( ['Connect', connect] ) 
          )
          return (
            <Button
              position="fixed"
              right={5} top={5}
              onClick={func}
              title={ceramic?.did.id}
            >
              {text}
            </Button>
          )
        })()}
        <Listing/>
      </ChakraProvider>
    </CeramicContext.Provider>
  )
}