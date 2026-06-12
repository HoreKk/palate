import { Box, Flex, HStack } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

import UserMenu from "./user-menu";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
  ] as const;

  return (
    <Box borderBottomWidth="1px">
      <Flex flexDirection="row" alignItems="center" justifyContent="space-between" px="2" py="1">
        <HStack as="nav" gap="4" fontSize="lg">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} to={to}>
                {label}
              </Link>
            );
          })}
        </HStack>
        <HStack alignItems="center" gap="2">
          <UserMenu />
        </HStack>
      </Flex>
    </Box>
  );
}
