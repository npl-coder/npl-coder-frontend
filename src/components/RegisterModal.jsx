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
import NDCCompetition from "../assets/images/NDCCompetition.jpeg";

const RegisterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing={4} align="stretch">
            {/* First Card */}
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              flex="1"
              textAlign="center"
              display="flex"
              flexDirection="column"
            >
              <Text mb={2}>Algorithm को श्रीपेच 001</Text>
              <Image py={2} src={Competition} />
              <Button
                as="a"
                href="https://www.hackerrank.com/npl-coder"
                colorScheme="red"
                mt="auto"
              >
                Register Now
              </Button>
            </Box>
            {/* Second Card */}
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              flex="1"
              textAlign="center"
              display="flex"
              flexDirection="column"
            >
              <Text mb={2}>Nepal Data Challenge</Text>
              <Image py={2} src={NDCCompetition} />
              <Button
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfA_IjFITxmn4x9udiR1XtZhbNjmxQQ6Dj2tASzptcMvgtPsQ/viewform"
                bg="blue.700"
                color="white"
                _hover={{ bg: "blue.600" }}
                mt="auto"
              >
                Register Now
              </Button>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;