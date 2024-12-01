import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Button,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import SectionLayout from "./SectionLayout";
import Ayushma from "../assets/images/Aayushma.jpeg";
import Manish from "../assets/images/ManishAcharya.jpeg";
import Aashish from "../assets/images/Aashish.jpeg";
import Aditi from "../assets/images/aditi.jpeg";
import Amrit from "../assets/images/Amrit.jpeg";
import Raul from "../assets/images/Raul.jpeg";

const teamMembers = [
  {
    name: "Aditi Gajurel",
    title: "University of Southern California",
    image: Aditi,
    linkedin: "https://www.linkedin.com/in/aditi-gajurel-334492146/",
  },
  {
    name: "Aayushma Sapkota",
    title: "Stanford University | CS + MS&E | QuestBridge",
    image: Ayushma,
    linkedin: "https://np.linkedin.com/in/suraj-pathak-aa8035238",
  },
  {
    name: "Manish Acharya",
    title:
      "Undergraduate Student, Vanderbilt University",
    image: Manish,
    linkedin: "https://www.linkedin.com/in/manishacharya60/",
  },
  {
    name: "Aashish Karki",
    title: "IOE, Pulchowk Campus || AI Fellow '24 @Fusemachines || APIE",
    image: Aashish,
    linkedin: "https://www.linkedin.com/in/aashish-karki-718757233/",
  },
  // {
  //   name: "Amod Paudel",
  //   title: "Computer Engineering Student at IOE, Pulchowk Campus",
  //   image: "./images/PratikDahal.jpg",
  //   linkedin: "https://www.linkedin.com/in/pratik-dahal-430aa21b2/",
  // },
  // {
  //   name: "Mahesh",
  //   title: "",
  //   image: "./images/AnishSapkota.jpeg",
  //   linkedin: "https://www.linkedin.com/in/anish-sapkota-15170016b/",
  // },
  {
    name: "Sujit Maharjan",
    title: "PhD Student in Computer Science, University of Texas at Arlington",
    image: "https://maharjansujit.com.np/images/avatar.jpg",
    linkedin: "https://maharjansujit.com.np",
  },
  {
    name: "Amrit Kandel",
    title: "Advisor",
    image: Amrit,
    linkedin: "https://www.linkedin.com/in/amritkandel/",
  },
  {
    name: "Raul Aguilera",
    title: "Advisor",
    image: Raul,
    linkedin: "https://www.linkedin.com/in/aguilera-avenue/",
  },
];

const TeamMemberCard = ({ name, title, image, linkedin }) => (
  <Box
    maxW="300px"
    bg="white"
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
    <Heading color="black" as="h3" size="md" mb={2}>
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
        <FaLinkedin color="black" size={24} />
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
  <SectionLayout title="Meet our team" bgColor="#2A2F48" txtColor="white">
    <Text fontSize="xl" textAlign="center" mb={8}>
      Our dedicated team consists of college students from the USA and
      professionals who share a passion for technology and education. Together,
      we work to bridge the gap between opportunity and talent in Nepal. Add
      their picture and what they do.
    </Text>
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing={6}
      justifyContent="space-evenly"
    >
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.name}
          {...member}
          // Need to improve the layout so that the remaining card gets center aligned
        />
      ))}
    </SimpleGrid>
  </SectionLayout>
);

export default TeamSection;
