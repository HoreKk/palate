import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/patterns")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box
      as="main"
      bg="bg.default"
      color="fg.default"
      fontSize="13.5px"
      lineHeight="1.6"
      minH="100vh"
      py="20"
    >
      <Container maxW="container.landing" px={{ base: "22px", md: "40px" }}>
        <Heading as="h1" textStyle="section-heading" mb="4">
          Pattern library
        </Heading>
        <Text textStyle="body-muted" maxW="54ch">
          The Pattern Library is coming soon. A taxonomy of agent-failure and steering patterns to
          map your weakest spots.
        </Text>
      </Container>
    </Box>
  );
}
