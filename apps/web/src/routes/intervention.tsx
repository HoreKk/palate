import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/intervention")({
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
          Intervention
        </Heading>
        <Text textStyle="body-muted" maxW="54ch">
          The Intervention game is coming soon. Rejoin real Claude Code sessions frozen at decision
          points, make the call, and see what really happened.
        </Text>
      </Container>
    </Box>
  );
}
