import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Button,
} from "@chakra-ui/react";

export function OverlayModal({ isOpen, onClose, onAction }) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <OverlayOne />
        <ModalContent>
          <ModalHeader>Warning!!</ModalHeader>
          <ModalBody>
            <Text>
              A critical failure might have occured, you need to take action
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onAction} colorScheme="teal">
              Take Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
