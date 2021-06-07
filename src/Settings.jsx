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
  const close = () => { // reset the inputs if the user hits "Cancel"
    setIPFS(ipfsURI)
    setCeramic(ceramicURI)
    onClose()
  }
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
      onClose={close}
    >
      <ModalOverlay/>
      <ModalContent
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
          >
            Save
          </Button>
          <Button onClick={close}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}