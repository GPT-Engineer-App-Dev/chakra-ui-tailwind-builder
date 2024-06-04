import { Container, Text, VStack, Box, Image, Heading, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#f0f4f8">
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl" color="#333333" fontFamily="Arial, sans-serif">
          Welcome to Our Website
        </Heading>
        <Text fontSize="lg" color="#666666" fontFamily="Arial, sans-serif">
          We are glad to have you here. Explore our features and enjoy your stay!
        </Text>
        <Box boxSize="sm">
          <Image src="https://placehold.co/300x200" alt="Placeholder image of a feature" borderRadius="md" />
        </Box>
        <Button colorScheme="blue" size="lg" fontFamily="Arial, sans-serif">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;