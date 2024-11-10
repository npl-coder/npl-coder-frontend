import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { forwardRef } from "react";

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Bio = forwardRef((props, ref) => {
  return (
    <Box
      mx="auto"
      p={8}
      mt={8}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      ref={ref}
    >
      <Heading as="h2" fontSize="3xl" textAlign="center" mb={6}>
        About Me
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        animation={`${fadeIn} 2s ease-in-out`}
      >
        {/* Left Section - Image */}
        <Box flex="1" mb={{ base: 6, md: 0 }}>
          <Image
            src={heroImage}
            alt=""
            borderRadius="lg"
            boxShadow="md"
          />
        </Box>

        {/* Right Section - Text Content */}
        <VStack flex="2" align="start" spacing={4} pl={{ md: 8 }}>
          <Heading as="h3" fontSize="2xl">
            Lorem Ipsum
            <Text as="span" color="blue.600">
              Dolor Sit Amet
            </Text>
          </Heading>
          <Text fontSize="md" color="gray.600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum, nunc eget ultrices posuere, nunc libero fringilla justo,
            nec varius risus mauris at velit. Proin nec augue ac felis
          </Text>
          <Link href="/contact">
            <Button colorScheme="blue" size="lg" mt={4}>
              Contact Me
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
});

Bio.displayName = "Bio";

export default Bio;
