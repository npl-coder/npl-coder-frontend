import { useRef } from "react";
import {
  Flex,
  Link,
  IconButton,
  Spacer,
  HStack,
  Image,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  DrawerCloseButton,
  Box,
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/nplcoderLogo.svg";

const Navbar = () => {
  const location = useLocation();
  const logoSize = useBreakpointValue({
    base: "150px",
    md: "200px",
    lg: "280px",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "NOI", path: "#" },
    { name: "NDC", path: "#" },
    { name: "Upcoming Events", path: "#" },
    { name: "Our Team", path: "#" },
    { name: "About Us", path: "#" },
    { name: "Goals", path: "#" },
  ];

  return (
    <Flex as="nav" p="4" align="center" boxShadow="sm" bg="#2c3043">
      <Link href="/" mr="8">
        <Image
          src={logo}
          alt="Description of image"
          width={logoSize}
          height="auto"
          mr="8"
        />
      </Link>

      {/* Navbar Links */}
      <Spacer />
      <Flex
        align="center"
        bg="green.300"
        px="4"
        py="2"
        borderRadius="full"
        gap="6"
        display={{ base: "none", md: "flex" }}
      >
        <HStack spacing={{ base: "4", md: "8" }}>
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                as={RouterLink}
                to={item.path}
                fontSize={{ base: "xs", md: "sm" }}
                textTransform="uppercase"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "blue.600",
                  textColor: "white",
                }}
                bg={
                  location.pathname === item.path ? "teal.500" : "transparent"
                }
                color={location.pathname === item.path ? "white" : "black"}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </HStack>
      </Flex>

      {/* Register Button */}
      <Button
        ml="4"
        bg="green.300"
        color="black"
        _hover={{ bg: "green.400" }}
        borderRadius="md"
        px="5"
        mx="5"
      >
        Register
      </Button>

      <Spacer />

      <IconButton
        ref={btnRef}
        display={{ base: "flex", md: "none" }}
        icon={<FiMenu />}
        onClick={onOpen}
        aria-label="Open Menu"
        bg="green.300"
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay /> {/* For making the background dim */}
        <DrawerContent bg="#2c3043">
          <VStack>
            <DrawerCloseButton color="white" />
            <DrawerBody>
              <VStack spacing={8}>
                {navItems.map((item) => (
                  <Link
                    as={RouterLink}
                    to={item.path}
                    key={item.name}
                    fontSize="lg"
                    textTransform="uppercase"
                    onClick={onClose}
                    _hover={{ textDecoration: "none", bg: "gray.200" }}
                    bg={
                      location.pathname === item.path
                        ? "green.300"
                        : "transparent"
                    }
                    color={location.pathname === item.path ? "black" : "white"}
                    w="100%"
                    textAlign="center"
                    py={2}
                    rounded="md"
                  >
                    {item.name}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
