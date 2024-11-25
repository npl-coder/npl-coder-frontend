import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events'
import { Box, Flex } from '@chakra-ui/react'

const UpcommingEventsPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
        <Navbar/>
        <Events/>
        <Footer/>
    </Flex>
  )
}

export default UpcommingEventsPage