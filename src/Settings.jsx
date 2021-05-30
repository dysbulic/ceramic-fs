import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  isOpen, onClose, finalFocusRef,
  ipfsURI, setIPFSURI, ceramicURI, setCeramicURI,
}) => {
  const ipfsRef = React.useRef()
  const [ipfs, setIPFS] = useState(ipfsURI)
  const [ceramic, setCeramic] = useState(ceramicURI)

  return (
    <>
      <Modal
        initialFocusRef={ipfsRef}
        {...{ finalFocusRef }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Configure Your Endpoints</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>IPFS URI</FormLabel>
              <Input
                ref={ipfsRef} placeholder="IPFS URI"
                value={ipfs}
                onChange={(evt) => setIPFS(evt.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Ceramic URI</FormLabel>
              <Input
                placeholder="Ceramic URI" value={ceramic}
                onChange={(evt) => setCeramic(evt.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue" mr={3}
              onClick={() => {
                setIPFSURI(ipfs)
                setCeramicURI(ceramic)
                onClose()
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}