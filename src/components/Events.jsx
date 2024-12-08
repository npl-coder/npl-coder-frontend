import { Box, Text, SimpleGrid, Button, Link } from "@chakra-ui/react";
import SectionLayout from "./SectionLayout";

const events = [
  {
    id: 2,
    title: "Algorithm को श्रीपेच 001",
    date: "January 4, 2025",
    description:
      "This is NPL Coder's most prestigious and intense competitive programming contest, crafted to challenge and inspire the brightest high school and university students across the nation. ",
    link: "https://www.hackerrank.com/npl-coder",
  },
  {
    id: 1,
    title: "Nepal Data Challenge",
    date: "January 10, 2025",
    description:
      "Are you a university student passionate about AI and Machine Learning or Data in general? Join a community built on mentorship, collaboration, and professional growth. Work together to unlock your potential and win exciting cash prize!!!",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfA_IjFITxmn4x9udiR1XtZhbNjmxQQ6Dj2tASzptcMvgtPsQ/viewform?pli=1",
  },
  {
    id: 3,
    title: "NOI BootCamp",
    date: "TBD",
    description:
      "A 12-week bootcamp for the top 30 students from the Nepal Olympiad in Informatics.",
    link: "k12.nplcoder.org",
  },
];

const Events = () => {
  return (
    <SectionLayout title="Upcoming Events">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {events.map((event) => (
          <Box key={event.id} bg="white" p={6} borderRadius="md" boxShadow="md">
            <Text fontWeight="bold" fontSize="xl" mb={2}>
              {event.title}
            </Text>
            <Text color="gray.600" mb={2}>
              {event.date}
            </Text>
            <Text mb={4}>{event.description}</Text>
            {event.date === "TBD" ? (
              ""
            ) : (
              <Link href={event.link}>
                <Button colorScheme="blue" size="sm">
                  Learn More
                </Button>
              </Link>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </SectionLayout>
  );
};

export default Events;
