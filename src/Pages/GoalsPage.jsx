import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useRef } from "react";
import { withPageTransition } from "../context/TransitionContext";
import { Flex } from "@chakra-ui/react";

const GoalsPage = () => {
  const targetRef = useRef(null);

  const handleExploreClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Flex direction="column" minHeight="100vh">
        <Navbar />
        {/* <Hero onExploreClick={handleExploreClick} /> */}
        {/* <Bio ref={targetRef} /> */}
        <Footer />
    </Flex>
  );
};

export default withPageTransition(GoalsPage);
