import { Box, Heading, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { session } = Route.useRouteContext();

  return (
    <Box p="4">
      <Heading size="xl">Dashboard</Heading>
      <Text>Welcome {session?.user.name}</Text>
    </Box>
  );
}
