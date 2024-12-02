// RegisterModal.jsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import Competition from "../assets/images/Competition.jpeg";
import { Link } from "react-router-dom";

const RegisterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing={4}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              w="50%"
              textAlign="center"
            >
              <Text mb={2}>Algorithm को श्रीपेच 001</Text>
              <Image py={2} src={Competition} />
              <Link to="https://www.hackerrank.com/npl-coder">
                <Button colorScheme="red">Register Now</Button>
              </Link>
            </Box>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              w="50%"
              textAlign="center"
              align="stretch"
            >
              <Text mb={2} py={120}>Nepal Data Challenge</Text>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfA_IjFITxmn4x9udiR1XtZhbNjmxQQ6Dj2tASzptcMvgtPsQ/viewform?pli=1&pli=1">
              <Button bg="blue.700" color="white" _hover={{ bg: "blue.700" }}>
                Register Now
              </Button>
              </Link>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
