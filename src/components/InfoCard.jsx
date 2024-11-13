import { Box, Heading, Text, Link, VStack, Icon, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FiTrendingUp } from "react-icons/fi"; // Example icon for the chart/scale icon

function InfoCard({ title, des, link, time }) {
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="xl" // Shadow to create a nice drop shadow effect
      p="6"
      display="flex"
      maxW="sm"
      textAlign="start"
      transition="transform 0.2s ease"
      _hover={{ transform: "scale(1.02)" }} // Slight scale effect on hover for interactivity
      color="#2D2D42" // Use the dark color for text
    >
      {/* Icon and Title Section */}
      <VStack align="start" spacing="4">
        <Box color="teal.400">
          <Icon as={FiTrendingUp} boxSize="8" />
        </Box>

        {/* Title */}
        <Heading fontSize="lg" fontWeight="bold" color="#2D2D42">
          {title}
        </Heading>

        {/* Description */}
        <Box flex="1">
          <Text fontSize="sm" color="gray.600">
            {des}
          </Text>
        </Box>

        <Text fontWeight="bold" fontSize="sm" color="#2D2D42">
          {time}
        </Text>

        {/* Link */}
        <Link
          href={link}
          color="green.400"
          fontWeight="medium"
          fontSize="sm"
          display="flex"
          alignItems="center"
        >
          Learn More <ArrowForwardIcon ml="2" />
        </Link>
      </VStack>
    </Box>
  );
}

export default InfoCard;
