import {
    Box,
    Heading,
    Text,
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
  
  const Goals = () => {
    const data = [
      {
        title: "Mission",
        description:
          "Our mission is to unlock the potential of Nepali students by offering access to coding resources, a community of coders, and competitive programming challenges. Through initiatives like the Nepal Olympiad in Informatics (NOI), we aim to foster a community that encourages creativity, collaboration, and innovation among young tech enthusiasts.",
      },
      {
        title: "Vision",
        description:
          "We envision a future where every student in Nepal, regardless of their background, has access to high-quality resources, and a supportive community to help them reach their full potential. By igniting a passion for coding and problem-solving, we aspire to equip students with the skills needed to contribute meaningfully to the global tech landscape and drive meaningful technological advancement in Nepal.",
      },
    ];
  
    return (
      <Flex
        py="16"
        px="8"
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
              p="8"
              m = "10"
              width="100%"
              animation={`${fadeIn} 1.5s ease-in-out`}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "50px",
                height: "50px",
                backgroundColor: index % 2 === 0 ? "#4A90E2" : "#FF6F61",
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
                backgroundColor: index % 2 === 0 ? "#FF6F61" : "#4A90E2",
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
  
  export default Goals;
  