import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";

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

const Hero = ({ onExploreClick }) => {
  return (
    <Box bg="#2A2F48" py="10" px="6">
      <VStack spacing="6" maxW="1200px" mx="auto" textAlign="center">
        {/* Slogan */}
        <Heading fontSize="3xl" fontWeight="bold" color="#2D2D42" color="white">
          EMPOWER THE NEXT GENERATION OF NEPALI PROGRAMMERS
        </Heading>

        {/* Supporting Text */}
        <Text fontSize="lg" color="gray.400" maxW="600px" align="left">
          NPLCoder has two initiatives aimed at fostering technological skills
          among students in Nepal.
        </Text>

        {/* Action Cards */}
        <Flex
          wrap="wrap"
          justify="space-evenly"
          maxW="100%"
          gap="8"
          mt="8"
          px={{ base: 4, md: 0 }}
        >
          {actionCards.map((card, index) => (
            <VStack
              key={index}
              align="start"
              bg="white"
              boxShadow="lg"
              borderRadius="md"
              p="6"
              w={{ base: "100%", md: "22%" }}
              spacing="4"
            >
              <Text fontWeight="bold" color="#2D2D42" fontSize="lg">
                {card.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {card.description}
              </Text>
              <Text fontWeight="bold" fontSize="sm" color="#2D2D42">
                {card.commitment}
              </Text>
              <Link
                href="#"
                color="green.400"
                fontWeight="medium"
                fontSize="sm"
                display="flex"
                alignItems="center"
              >
                Learn More <ArrowForwardIcon ml="2" />
              </Link>
            </VStack>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

// Action card data
const actionCards = [
  {
    title: "Nepal Olympiad in Informatics",
    description:
      "The National Olympiad in Informatics (NOI) is an inaugural programming competition open to secondary school and junior college students across Nepal. The competition consists of an online qualification round followed by a final contest for top performers. Participants will solve algorithmic problems that test their programming and problem-solving abilities. The NOI aims to promote interest in informatics and computational thinking. High-achieving students may receive medals and awards, and outstanding performers could be selected for further training with the possibility of representing Nepal at the International Olympiad in Informatics (IOI). Visit this page to learn more and sign up.",
    commitment: "8-12 hours per week",
  },
  {
    title: "Nepal Data Challenge",
    description:
      "The Nepal Data Challenge is a program for university students interested in AI and ML. It focuses on collaboration, mentorship, and professional development. Participants can work individually or in teams of up to four members to tackle data-driven projects. The challenge encourages building professional networks and emphasizes inclusivity and support among participants. Prizes are awarded to top teams based on technical excellence, innovation, and collaborative efforts, with a total prize pool of $1,000. Visit this page to learn more and sign up.",
    commitment: "8-12 hours per week",
  },
];

export default Hero;
