import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  title: string;
  message: string;
  Open: boolean;
  handleClose: () => void;
}

const PostDataModal = ({ title, message, Open, handleClose }: Props) => {
  return (
    <>
      <Modal isOpen={Open} onClose={handleClose}>
        <ModalOverlay alignItems="flex-end" />
        <ModalContent>
          <ModalHeader color="green" fontSize="1.8rem" textAlign="center">
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="1.2rem" textAlign="center">
            {message}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              m="1rem auto 0"
              bg="blue.500"
              border="none"
              borderRadius="0.3rem"
              onClick={handleClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostDataModal;
