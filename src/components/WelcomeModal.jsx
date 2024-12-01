import { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  useDisclosure,
} from '@chakra-ui/react';

const WelcomeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={0}>
          <Image src="/src/assets/images/Competition.jpeg" alt="Welcome" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;