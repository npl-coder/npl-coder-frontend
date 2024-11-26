import { Box, Text, SimpleGrid, Button } from "@chakra-ui/react"
import SectionLayout from "./SectionLayout"

const events = [
  {
    id: 1,
    title: "Nepal Data Challenge",
    date: "TBD",
    description: "Nepal's largest data science competition, with cash prizes and internships for the winners.",
    link: "uni.nplcoder.org"
  },
  {
    id: 2,
    title: "NOI Orientation Sessions",
    date: "TBD",
    description: "Orientation sessions for the Nepal Olympiad in Informatics, the national programming competition.",
    link: "k12.nplcoder.org"
  },
  {
    id: 3,
    title: "NOI BootCamp",
    date: "TBD",
    description: "A 12-week bootcamp for the top 30 students from the Nepal Olympiad in Informatics.",
    link: "k12.nplcoder.org"
  }
]

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
            <Button colorScheme="blue" size="sm">
              Learn More
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </SectionLayout>
  )
}

export default Events

