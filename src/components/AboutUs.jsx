import {
    Box,
    Heading,
    Text,
    VStack,
    Flex,
    SimpleGrid,
  } from "@chakra-ui/react";
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
  
  const AboutUs = () => {
    const data = [
      {
        title: "About Us",
        description:
          "NPLCoder is a non-profit organization driven by a simple yet powerful belief: the immense talent in Nepal deserves the opportunity to shine in the field of technology. We are dedicated to empowering students in Nepal by providing them with the tools, resources, and support they need to excel in coding and competitive programming.",
      },
      {
        title: "Mentorship Program",
        description:
          "Our mentorship program is the cornerstone of our initiative. Industry professionals and mentors from the U.S. volunteer their time to guide and inspire, fostering a nurturing learning environment for aspiring programmers.",
      },
    ];
  
    return (
      <Flex
        py="16"
        align="center"
        direction="column"
        justify="center"
        width="100%"
      >
          {data.map((item, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              width="50%"
              p="8"
              m="10"
              animation={`${fadeIn} 1.5s ease-in-out`}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "50px",
                height: "50px",
                backgroundColor: "#4A90E2",
                borderRadius: "full",
                zIndex: -1,
                opacity: 0.3,
              }}
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "70px",
                height: "70px",
                backgroundColor: "#FF6F61",
                borderRadius: "full",
                zIndex: -1,
                opacity: 0.3,
              }}
            >
              <Heading fontSize="2xl" fontWeight="bold" mb="4" color="#2A2F48">
                {item.title}
              </Heading>
              <Text fontSize="md" color="gray.700">
                {item.description}
              </Text>
            </Box>
          ))}
      </Flex>
    );
  };
  
  export default AboutUs;
  