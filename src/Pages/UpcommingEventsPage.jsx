import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events'
import { Box } from '@chakra-ui/react'

const UpcommingEventsPage = () => {
  return (
    <Box>
        <Navbar/>
        <Events/>
        <Footer/>
    </Box>
  )
}

export default UpcommingEventsPage