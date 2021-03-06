import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { Button, ChakraProvider } from '@chakra-ui/react'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import Ceramic from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IDX } from '@ceramicstudio/idx'
import defs from './definitionIDs.json'
import Listing from './Listing'
import { IDXContext } from './IDXContext'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ceramicURI, setCeramicURI] = useState(
    process.env.REACT_APP_CERAMIC_URI
    ?? 'https://ceramic-clay.3boxlabs.com'
  )
  const ceramic = useMemo(
    () => new Ceramic(ceramicURI), [ceramicURI]
  )
  const aliases = useMemo(
    () => ({ mïmis: defs.definitions.mïmis }), []
  )
  const idx = useMemo(
    () => new IDX({ ceramic, aliases }),
    [aliases, ceramic]
  )
  const [addr, setAddr] = useState(null)
  const [loggingIn, setLoggingIn] = useState(false)
  const threeIdConnect = new ThreeIdConnect()
  const [myDID, setMyDID] = useState(null)

  const connect = async () => {
    const addresses = await (
      window.ethereum.request({ method: 'eth_requestAccounts' })
    )
    const address = addresses[0]
    setAddr(address)
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
    setMyDID(did.id)
  }
  const disconnect = useCallback(() => {
    ceramic.setDID(undefined)
    setMyDID(null)
  }, [ceramic])

  useEffect(() => {
    window.ethereum.on('accountsChanged', disconnect)
  }, [disconnect])

  useEffect(
    () => { setLoggingIn(false) },
    [idx.ceramic.did],
  )

  return (
    <IDXContext.Provider value={idx}>
      <ChakraProvider>
        {(() => {
          const [text, onClick, colorScheme] = (
            idx.ceramic.did
            ? ( ['Disconnect', disconnect, 'red'] )
            : ( ['Connect', connect, 'green'] )
          )
          return (
            <Button
              position="fixed"
              right={5} top={5}
              {...{ colorScheme }}
              onClick={(evt) => {
                setLoggingIn(true)
                onClick(evt)
              }}
              title={addr}
              isDisabled={loggingIn}
            >
              {text}
            </Button>
          )
        })()}
        <Listing {...{ ceramicURI, setCeramicURI, myDID }}/>
      </ChakraProvider>
    </IDXContext.Provider>
  )
}