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
import CompetitionImage from "../assets/images/Competition.jpeg";

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
          <Image src={CompetitionImage} alt="Welcome" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;