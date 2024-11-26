import { Box, Container, Heading, VStack } from "@chakra-ui/react"

const SectionLayout = ({ title, children, bgColor = "gray.50", txtColor="black" }) => {
  return (
    <Box bg={bgColor} color={txtColor} py={16}>
      <Container maxW="container.xl" >
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="2xl" textAlign="center" mb={4}>
            {title}
          </Heading>
          {children}
        </VStack>
      </Container>
    </Box>
  )
}

export default SectionLayout

