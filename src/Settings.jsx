import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React, { useState } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  isOpen, onClose, finalFocusRef,
  ipfsURI, setIPFSURI, ceramicURI, setCeramicURI,
}) => {
  const ipfsRef = React.useRef()
  const [ipfs, setIPFS] = useState(ipfsURI)
  const [ceramic, setCeramic] = useState(ceramicURI)
  const save = () => {
    setIPFSURI(ipfs)
    setCeramicURI(ceramic)
    onClose()
  }

  return (
    <Modal
      initialFocusRef={ipfsRef}
      {...{ finalFocusRef }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay/>
      <ModalContent>
        <FormControl
          as="form"
          onSubmit={(evt) => {
            evt.preventDefault()
            save()
          }}
        >
          <ModalHeader textAlign="center">
            Configure Your Endpoints
          </ModalHeader>
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
              type="submit"
              colorScheme="blue" mr={3}
              onClick={save}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </FormControl>
      </ModalContent>
    </Modal>
  )
}