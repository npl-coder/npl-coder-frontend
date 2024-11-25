import { Box, Text, IconButton, HStack, Icon, Flex } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter, FaDiscord } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bg="#1A1A1A" color="white" py="4" textAlign="center" mt="auto">

<Flex
        maxW="1200px"
        mx="auto"
        px="6"
        justify="space-between"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 4, md: 0 }}
      >
        {/* Left Section */}
        <Flex gap="8" align="center">
        <Text>&copy; {new Date().getFullYear()} The NPLCoder Project. All rights reserved.</Text>
        {/* <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: 'white' }}>
            Terms and Conditions
          </Link>
          <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: 'white' }}>
            Privacy and Policy
          </Link> */}
        </Flex>

        {/* Right Section */}
        {/* <Flex gap="4" align="center">
        <IconButton
          as="a"
          href="#"
          target="_blank"
          aria-label="Discord"
          icon={<FaDiscord />}
          colorScheme="white"
          variant="ghost"
          fontSize="2xl"
        />
        <IconButton
          as="a"
          href="#"
          target="_blank"
          aria-label="Facebook"
          icon={<FaFacebook />}
          colorScheme="white"
          variant="ghost"
          fontSize="2xl"
        />
        <IconButton
          as="a"
          href="#"
          target="_blank"
          aria-label="Instagram"
          icon={<FaInstagram />}
          colorScheme="white"
          variant="ghost"
          fontSize="2xl"
        />
        <IconButton
          as="a"
          href="#"
          target="_blank"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          colorScheme="white"
          variant="ghost"
          fontSize="2xl"
        />
        <IconButton
          as="a"
          href="#"
          target="_blank"
          aria-label="XTwitter"
          icon={<FaXTwitter />}
          colorScheme="white"
          variant="ghost"
          fontSize="2xl"
        />
        <IconButton
          as="a"
          href="#"
          target="_blank"
          aria-label="YouTube"
          icon={<FaYoutube />}
          colorScheme="white"
          variant="ghost"
          fontSize="2xl"
        />
        </Flex> */}

      </Flex>

      
      <HStack spacing={4} justify="center" mt={2}>
        
      </HStack>
    </Box>
  );
};

export default Footer;