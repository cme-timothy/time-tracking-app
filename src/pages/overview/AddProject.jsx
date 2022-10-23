import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

function AddProject() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        m="1em"
        colorScheme="green"
        w="70%"
        align="center"
        borderRadius={0}
        justifySelf="flex-end"
        alignSelf="center"
      >
        Add a Project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={0} m="25% 1em 75% 1em">
          <ModalHeader>Add</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              placeholder="Project name"
              borderRadius={0}
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              w="100%"
              borderRadius={0}
              onClick={onClose}
            >
              Add Project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddProject;
