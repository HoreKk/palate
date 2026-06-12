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
      fontFamily="mono"
      fontSize="13.5px"
      lineHeight="1.6"
      minH="100vh"
      py="20"
    >
      <Container maxW="container.landing" px={{ base: "22px", md: "40px" }}>
        <Heading
          as="h1"
          fontFamily="display"
          fontWeight="600"
          fontSize="clamp(24px, 2.8vw, 36px)"
          letterSpacing="-.02em"
          mb="4"
        >
          Pattern library
        </Heading>
        <Text color="fg.muted" maxW="54ch" lineHeight="1.7">
          The Pattern Library is coming soon. A taxonomy of agent-failure and steering patterns to
          map your weakest spots.
        </Text>
      </Container>
    </Box>
  );
}
