import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion'
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import { useRef } from "react";
import { withPageTransition } from "../context/TransitionContext";

const HomePage = () => {
  const targetRef = useRef(null);

  const handleExploreClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Hero onExploreClick={handleExploreClick} />
        {/* <Bio ref={targetRef} /> */}
        <Footer />
    </Flex>
  );
};

export default withPageTransition(HomePage);
