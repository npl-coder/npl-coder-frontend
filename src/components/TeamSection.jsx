import { Box, Heading, SimpleGrid, Image, Text, Button, Link, VStack } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import SectionLayout from "./SectionLayout";

const teamMembers = [
  {
    name: "Manish Acharya",
    title: "Incoming Freshman @ Vanderbilt University || Chancellor's Scholar || Computerphile. AI Enthusiast",
    image: "./images/ManishAcharya.jpg",
    linkedin: "https://www.linkedin.com/in/manishacharya60/",
  },
  {
    name: "Aashish Karki",
    title: "Computer Engineering Student at IOE, Pulchowk Campus",
    image: "./images/AashishKarki.jpg",
    linkedin: "https://www.linkedin.com/in/aashish-karki-718757233/",
  },
  {
    name: "Aditi Gajurel",
    title: "Southern Illinois University Edwardsville",
    image: "./images/RiwazPoudel.png",
    linkedin: "https://www.linkedin.com/in/riwaz-poudel-957467207",
  },
  {
    name: "Aayushma Sapkota",
    title: "Stanford University | CS + MS&E | QuestBridge",
    image: "../assets/images/Aayushma.jpeg",
    linkedin: "https://np.linkedin.com/in/suraj-pathak-aa8035238",
  },
  {
    name: "Amod Paudel",
    title: "Computer Engineering Student at IOE, Pulchowk Campus",
    image: "./images/PratikDahal.jpg",
    linkedin: "https://www.linkedin.com/in/pratik-dahal-430aa21b2/",
  },
  {
    name: "Mahesh",
    title: "Computer Engineering Student at IOE, Pulchowk Campus",
    image: "./images/AnishSapkota.jpeg",
    linkedin: "https://www.linkedin.com/in/anish-sapkota-15170016b/",
  },
  {
    name: "Rahul Jha",
    title: "Computer Engineering Student at IOE, Pulchowk Campus",
    image: "./images/RahjulJha.jpg",
    linkedin: "https://www.linkedin.com/in/jharahul968/",
  },
  {
    name: "Saksham Gurung",
    title: "CS at UW-Madison",
    image: "./images/SakshamGurung.jpg",
    linkedin: "https://www.linkedin.com/in/saksham-gurung-292732191/",
  },
  {
    name: "Shaleen Baral",
    title: "Rising Sophomore at Cornell University",
    image: "./images/60111.jpg",
    linkedin: "https://www.linkedin.com/in/shaleen-baral-379477175/",
  },
  {
    name: "Jivan Kharel",
    title: "Software Engineer at Deloitte @ Meta | Full Stack Engineer | Backend Engineer",
    image: "./images/JivanKharel.jpeg",
    linkedin: "https://www.linkedin.com/in/jivan-kharel-0480b3a4/",
  },
];

const TeamMemberCard = ({ name, title, image, linkedin }) => (
  <Box
    maxW="300px"
    textAlign="center"
    fontFamily="arial"
    p={6}
    transition="all 500ms ease"
    h="500px"
    _hover={{
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      "& .linkedin": { opacity: 1, pointerEvents: "all" },
      "& .image-container": { borderColor: "red" },
    }}
  >
    <Box
      className="image-container"
      border="5px solid"
      borderColor="lightgrey"
      transition="all 500ms ease"
      mb={4}
    >
      <Image src={image} alt={name} w="100%" h="100%" objectFit="cover" />
    </Box>
    <Heading as="h3" size="md" mb={2}>
      {name}
    </Heading>
    <Text color="gray.600" fontSize="14px" h="50px" mb={4}>
      {title}
    </Text>
    <VStack spacing={4}>
      <Link
        href={linkedin}
        className="linkedin"
        opacity={0}
        pointerEvents="none"
        transition="all 500ms ease"
      >
        <FaLinkedin size={24} />
      </Link>
      <Button
        as="a"
        href={linkedin}
        w="100%"
        bg="black"
        color="white"
        _hover={{ opacity: 0.7 }}
      >
        Contact
      </Button>
    </VStack>
  </Box>
);

const TeamSection = () => (
  <SectionLayout title="Meet our team">
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing={6}
      justifyItems="center"
    >
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.name} {...member} />
      ))}
    </SimpleGrid>
  </SectionLayout>
);

export default TeamSection;


