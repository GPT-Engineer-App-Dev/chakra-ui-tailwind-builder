import { Container, Text, VStack, Box, Image, Heading, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#e0f7fa">
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl" color="#00796b" fontFamily="Arial, sans-serif">
          Welcome to Finotic
        </Heading>
        <Text fontSize="lg" color="#004d40" fontFamily="Arial, sans-serif">
          Your financial companion for a better future.
        </Text>
        <Box boxSize="sm">
          <Image src="https://placehold.co/300x200" alt="Placeholder image representing financial growth" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" fontFamily="Arial, sans-serif">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;