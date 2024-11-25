import { Box, Flex } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { withPageTransition } from '../context/TransitionContext'
import TeamSection from '../components/TeamSection'

const TeamPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
        <Navbar/>
        <TeamSection/>
        <Footer/>
    </Flex>
  )
}

export default withPageTransition(TeamPage); 