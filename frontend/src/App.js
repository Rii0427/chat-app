import React from "react";
import { ChakraProvider, Box, Button, Text } from "@chakra-ui/react";

function App() {
  return (
      <Box textAlign="center" py={10} px={6}>
        <Text fontSize="2xl" mb={4}>
          Hello from a Minimal App!
        </Text>
        <Button colorScheme="teal" size="md">
          Click Me
        </Button>
      </Box>
  );
}

export default App;
