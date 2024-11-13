import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  Link,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";
import InfoCard from "./InfoCard";

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
    <Flex
      bg="#2A2F48"
      py="10"
      px="6"
      align="center"
      justify="center"
      width="100%"
      flex="1"
    >
      <VStack spacing="6" mx="auto" textAlign="center">
        {/* Slogan */}
        <Heading
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          animation={`${fadeIn} 1.5s ease-in-out`}
        >
          EMPOWER THE NEXT GENERATION OF NEPALI PROGRAMMERS
        </Heading>

        {/* Supporting Text */}
        <Text fontSize="lg" color="gray.400" maxW="600px" align="left" animation={`${fadeIn} 1.5s ease-in-out`}>
          NPLCoder has two initiatives aimed at fostering technological skills
          among students in Nepal.
        </Text>

        {/* Action Cards */}
        <Flex
          wrap="wrap"
          justify="center"
          gap="6"
          align="stretch" // Ensures all cards have the same height
          animation={`${fadeIn} 2.5s ease-in-out`}
        >
          {actionCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              des={card.description}
              link={card.link}
              time={card.commitment}
            />
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
};

// Action card data
const actionCards = [
  {
    title: "Nepal Olympiad in Informatics",
    description:
      "The National Olympiad in Informatics (NOI) is an inaugural programming competition open to secondary school and junior college students across Nepal. The competition consists of an online qualification round followed by a final contest for top performers. Participants will solve algorithmic problems that test their programming and problem-solving abilities. The NOI aims to promote interest in informatics and computational thinking. High-achieving students may receive medals and awards, and outstanding performers could be selected for further training with the possibility of representing Nepal at the International Olympiad in Informatics (IOI). Visit this page to learn more and sign up.",
    commitment: "8-12 hours per week",
    link: "#",
  },
  {
    title: "Nepal Data Challenge",
    description:
      "The Nepal Data Challenge is a program for university students interested in AI and ML. It focuses on collaboration, mentorship, and professional development. Participants can work individually or in teams of up to four members to tackle data-driven projects. The challenge encourages building professional networks and emphasizes inclusivity and support among participants. Prizes are awarded to top teams based on technical excellence, innovation, and collaborative efforts, with a total prize pool of $1,000. Visit this page to learn more and sign up.",
    commitment: "8-12 hours per week",
    link: "#",
  },
];

export default Hero;
