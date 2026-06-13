import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

import UserMenu from "./user-menu";

const navLinks = [
  { to: "/", hash: "loop", label: "How it works" },
  { to: "/", hash: "games", label: "The games" },
  { to: "/", hash: "teams", label: "Teams" },
  { to: "/patterns", hash: undefined, label: "Patterns" },
] as const;

export default function Navbar() {
  return (
    <Flex
      as="nav"
      position="sticky"
      top="0"
      zIndex="50"
      alignItems="center"
      gap="28px"
      h="56px"
      px={{ base: "22px", md: "28px" }}
      borderBottomWidth="1px"
      borderColor="border.default"
      bg="rgba(12, 13, 15, 0.82)"
      backdropFilter="blur(10px)"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <Link to="/">
        <Heading size="md" letterSpacing="widest" color="fg.default">
          PALATE
        </Heading>
      </Link>

      <HStack as="nav" gap="6px" display={{ base: "none", md: "flex" }} ml="6px">
        {navLinks.map(({ to, hash, label }) => (
          <Link key={label} to={to} hash={hash}>
            <Box
              px="12px"
              py="6px"
              borderRadius="4px"
              color="fg.muted"
              fontSize="12px"
              whiteSpace="nowrap"
              transition="color .15s, background .15s"
              _hover={{ color: "fg.default", bg: "bg.muted" }}
            >
              {label}
            </Box>
          </Link>
        ))}
      </HStack>

      <HStack ml="auto" alignItems="center" gap="12px">
        <UserMenu />
      </HStack>
    </Flex>
  );
}
