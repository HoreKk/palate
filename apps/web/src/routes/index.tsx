import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as="span"
      fontFamily="mono"
      fontSize="10.5px"
      letterSpacing=".2em"
      textTransform="uppercase"
      color="accent.default"
    >
      {children}
    </Text>
  );
}

function SectionNumber({ children }: { children: React.ReactNode }) {
  return (
    <Text as="span" fontFamily="mono" color="fg.subtle" fontSize="12px" letterSpacing=".1em">
      {children}
    </Text>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Heading
      as="h2"
      fontFamily="display"
      fontWeight="600"
      fontSize="clamp(24px, 2.8vw, 36px)"
      letterSpacing="-.02em"
      lineHeight="1.1"
    >
      {children}
    </Heading>
  );
}

function SessionMock() {
  return (
    <Box
      bg="bg.tool"
      borderWidth="1px"
      borderColor="border.default"
      borderRadius="5px"
      overflow="hidden"
      fontFamily="mono"
      fontSize="12px"
      boxShadow="0 24px 60px -30px rgba(0,0,0,.7)"
    >
      <HStack
        gap="8px"
        px="15px"
        py="11px"
        borderBottomWidth="1px"
        borderColor="border.default"
        color="fg.subtle"
        fontSize="11px"
      >
        <Box w="9px" h="9px" borderRadius="full" bg="#c5563f" />
        <Box w="9px" h="9px" borderRadius="full" bg="#caa14a" />
        <Box w="9px" h="9px" borderRadius="full" bg="#7a9a55" />
        <Text as="span" ml="4px" letterSpacing=".02em">
          internal/scheduler · fix/parse-duration
        </Text>
      </HStack>

      <VStack gap="11px" p="16px 17px" alignItems="stretch">
        <VStack gap="5px" alignItems="stretch">
          <Text
            as="span"
            fontSize="9.5px"
            letterSpacing=".14em"
            textTransform="uppercase"
            color="fg.subtle"
          >
            Agent
          </Text>
          <Text color="fg.default" lineHeight="1.5">
            Fastest way to green the suite is to update the test's expected value.
          </Text>
        </VStack>

        <Text
          as="pre"
          whiteSpace="pre-wrap"
          lineHeight="1.55"
          color="fg.muted"
          fontSize="11.5px"
          fontFamily="mono"
          m="0"
        >
          <Text as="span" color="fg.subtle">
            $ pnpm test
          </Text>
          {"\n"}
          <Text as="span" color="#e0654a">
            AssertionError: expected 3600000 to be 3660000
          </Text>
        </Text>

        <Box
          position="relative"
          textAlign="center"
          borderTop="1.5px dashed"
          borderColor="accent.default"
          my="5px"
        >
          <Text
            as="span"
            position="relative"
            top="-9px"
            bg="bg.tool"
            px="11px"
            color="accent.default"
            fontSize="8.5px"
            letterSpacing=".2em"
            textTransform="uppercase"
          >
            decision point
          </Text>
        </Box>

        <Text
          as="span"
          fontSize="9px"
          fontWeight="700"
          letterSpacing=".08em"
          textTransform="uppercase"
          color="accent.default"
          bg="accent.dim"
          px="8px"
          py="3px"
          borderRadius="4px"
          alignSelf="flex-start"
        >
          about to edit · duration.test.ts
        </Text>

        <Grid templateColumns="1fr 1fr" gap="8px" mt="2px">
          <VStack
            borderWidth="1px"
            borderColor="border.strong"
            borderRadius="7px"
            p="10px 12px"
            gap="3px"
            alignItems="flex-start"
          >
            <Text fontSize="12px" fontWeight="500" color="fg.default">
              Let it run
            </Text>
            <Text fontSize="9.5px" color="fg.subtle">
              trust the trajectory
            </Text>
          </VStack>
          <VStack
            borderWidth="1px"
            borderColor="accent.default"
            bg="accent.dim"
            borderRadius="7px"
            p="10px 12px"
            gap="3px"
            alignItems="flex-start"
          >
            <Text fontSize="12px" fontWeight="500" color="accent.default">
              Intervene
            </Text>
            <Text fontSize="9.5px" color="fg.subtle">
              it's gaming the test
            </Text>
          </VStack>
        </Grid>
      </VStack>
    </Box>
  );
}

function Hero() {
  return (
    <Box as="section" py={{ base: "54px", md: "76px" }} pb="56px">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr .82fr" }}
        gap={{ base: "40px", lg: "54px" }}
        alignItems="center"
      >
        <VStack alignItems="flex-start" gap="0">
          <Box mb="22px">
            <MonoLabel>Agentic coding · skill training</MonoLabel>
          </Box>
          <Heading
            as="h1"
            fontFamily="display"
            fontWeight="600"
            fontSize="clamp(34px, 4.8vw, 62px)"
            lineHeight="1.04"
            letterSpacing="-.025em"
            textWrap="balance"
            mb="26px"
          >
            You don't write the code anymore. You decide whether to{" "}
            <Text as="span" fontStyle="italic" color="accent.default">
              trust it
            </Text>
            .
          </Heading>
          <Text color="fg.muted" fontSize="15px" lineHeight="1.7" maxW="48ch" textWrap="pretty">
            Palate drills the one skill the agents didn't replace: reading a session you didn't run,
            judging an output you didn't write, and knowing exactly when to let it run — and when to
            cut in.
          </Text>

          <HStack gap="12px" mt="32px" flexWrap="wrap">
            <Button asChild size="lg">
              <Link to="/intervention">Play a session →</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/" hash="loop">
                How it works
              </Link>
            </Button>
          </HStack>

          <HStack
            gap="10px"
            mt="26px"
            alignItems="center"
            color="fg.subtle"
            fontFamily="mono"
            fontSize="11.5px"
            letterSpacing=".02em"
          >
            <Box
              w="6px"
              h="6px"
              borderRadius="full"
              bg="accent.default"
              boxShadow="0 0 9px accent.default"
            />
            <Text>
              The midday clash, for teams who code with agents — the format that replaces the kata
              grind.
            </Text>
          </HStack>
        </VStack>

        <SessionMock />
      </Grid>
    </Box>
  );
}

function LoopSection() {
  const steps = [
    { n: "01", label: "frame the task", hot: false },
    { n: "02", label: "choose model / effort", hot: false },
    { n: "03", label: "launch", hot: false },
    { n: "04", label: "evaluate", hot: true },
    { n: "05", label: "intervene", hot: true },
    { n: "06", label: "iterate", hot: false },
  ];

  return (
    <Box as="section" id="loop" py="66px" borderTopWidth="1px" borderColor="border.muted">
      <Flex
        alignItems="baseline"
        gap="16px"
        mb="34px"
        borderBottomWidth="1px"
        borderColor="border.default"
        pb="18px"
      >
        <SectionNumber>01</SectionNumber>
        <SectionHeading>The loop you actually run</SectionHeading>
        <Text
          color="fg.subtle"
          fontFamily="mono"
          fontSize="12px"
          ml={{ base: "0", md: "auto" }}
          maxW="38ch"
          textAlign={{ base: "left", md: "right" }}
          lineHeight="1.6"
          display={{ base: "none", md: "block" }}
        >
          Coding got automated. Judgment didn't. Palate trains the two links that decide the
          outcome.
        </Text>
      </Flex>

      <Flex alignItems="stretch" gap="0" flexWrap="wrap">
        {steps.map((step, idx) => (
          <Box
            key={step.n}
            flex="1"
            minW="138px"
            p="18px 16px"
            borderWidth="1px"
            borderColor={step.hot ? "accent.default" : "border.default"}
            borderRightWidth={idx === steps.length - 1 ? "1px" : "0px"}
            bg={step.hot ? "accent.dim" : "transparent"}
          >
            <Text
              fontFamily="mono"
              fontSize="10px"
              color={step.hot ? "accent.default" : "fg.subtle"}
              letterSpacing=".12em"
            >
              {step.n}
            </Text>
            <Text
              fontFamily="display"
              fontSize="14px"
              mt="8px"
              color={step.hot ? "accent.default" : "fg.muted"}
              fontWeight="600"
            >
              {step.label}
            </Text>
          </Box>
        ))}
      </Flex>

      <Text mt="18px" fontFamily="mono" fontSize="12px" color="fg.subtle" lineHeight="1.6">
        Palate lives in{" "}
        <Text as="span" color="accent.default" fontWeight="400">
          evaluate
        </Text>{" "}
        and{" "}
        <Text as="span" color="accent.default" fontWeight="400">
          intervene
        </Text>{" "}
        — the most gamifiable links, and the ones that don't go stale when the next model ships.
      </Text>
    </Box>
  );
}

function GamesSection() {
  return (
    <Box as="section" id="games" py="66px" borderTopWidth="1px" borderColor="border.muted">
      <Flex
        alignItems="baseline"
        gap="16px"
        mb="34px"
        borderBottomWidth="1px"
        borderColor="border.default"
        pb="18px"
      >
        <SectionNumber>02</SectionNumber>
        <SectionHeading>Two ways to train your taste</SectionHeading>
        <Text
          color="fg.subtle"
          fontFamily="mono"
          fontSize="12px"
          ml={{ base: "0", md: "auto" }}
          maxW="38ch"
          textAlign={{ base: "left", md: "right" }}
          lineHeight="1.6"
          display={{ base: "none", md: "block" }}
        >
          One builds your timing. One builds your judgment. Both score against ground truth, not an
          LLM grader.
        </Text>
      </Flex>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="18px">
        <VStack
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.default"
          borderRadius="4px"
          p="26px"
          gap="13px"
          alignItems="stretch"
        >
          <Flex alignItems="center" justifyContent="space-between" gap="12px">
            <Heading
              as="h3"
              fontFamily="display"
              fontSize="21px"
              fontWeight="600"
              letterSpacing="-.025em"
            >
              Intervention
            </Heading>
            <Text
              fontFamily="mono"
              fontSize="9px"
              letterSpacing=".13em"
              textTransform="uppercase"
              color="accent.default"
              borderWidth="1px"
              borderColor="accent.default"
              px="8px"
              py="3px"
              borderRadius="4px"
            >
              hero
            </Text>
          </Flex>
          <Text color="fg.muted" fontSize="12.5px" lineHeight="1.65" textWrap="pretty">
            Rejoin a real, anonymised Claude Code session frozen at a decision point — the agent's
            about to act. Let it run, or cut in and pick your lever. Then watch what really
            happened. Truth is free and binary: the run passed or it didn't.
          </Text>
          <Link to="/intervention">
            <Box
              mt="auto"
              color="accent.default"
              fontFamily="mono"
              fontSize="12px"
              display="inline-flex"
              alignItems="center"
              gap="6px"
              transition="gap .15s"
              _hover={{ gap: "10px" }}
            >
              Play a session →
            </Box>
          </Link>
        </VStack>

        <VStack
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.default"
          borderRadius="4px"
          p="26px"
          gap="13px"
          alignItems="stretch"
        >
          <Flex alignItems="center" justifyContent="space-between" gap="12px">
            <Heading
              as="h3"
              fontFamily="display"
              fontSize="21px"
              fontWeight="600"
              letterSpacing="-.025em"
            >
              Jury
            </Heading>
            <Text
              fontFamily="mono"
              fontSize="9px"
              letterSpacing=".13em"
              textTransform="uppercase"
              color="fg.subtle"
              borderWidth="1px"
              borderColor="border.strong"
              px="8px"
              py="3px"
              borderRadius="4px"
            >
              calibration
            </Text>
          </Flex>
          <Text color="fg.muted" fontSize="12.5px" lineHeight="1.65" textWrap="pretty">
            Two outputs, one problem — which solves it better? Vote in pairs and build a judge
            rating from your calibration against the room and the test suite. At the reveal, guess
            which process made each output: one-shot, agentic loop, low effort, rich context.
          </Text>
          <Link to="/dashboard">
            <Box
              mt="auto"
              color="accent.default"
              fontFamily="mono"
              fontSize="12px"
              display="inline-flex"
              alignItems="center"
              gap="6px"
              transition="gap .15s"
              _hover={{ gap: "10px" }}
            >
              On the roadmap →
            </Box>
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
}

function StepsSection() {
  const steps = [
    {
      n: "1",
      title: "Watch the session",
      body: "Read the context and the trajectory up to the cut — the same partial information you have in real life.",
    },
    {
      n: "2",
      title: "Make the call",
      body: "Let it run or intervene, name the lever, and stake a confidence. Privately — so the room can't anchor you.",
    },
    {
      n: "3",
      title: "See what really happened",
      body: "The run plays out. You get a grade, the failure pattern, and the ideal intervention — then debate it.",
    },
  ];

  return (
    <Box as="section" py="66px" borderTopWidth="1px" borderColor="border.muted">
      <Flex
        alignItems="baseline"
        gap="16px"
        mb="34px"
        borderBottomWidth="1px"
        borderColor="border.default"
        pb="18px"
      >
        <SectionNumber>03</SectionNumber>
        <SectionHeading>Three steps, one rep</SectionHeading>
      </Flex>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="18px">
        {steps.map((step, idx) => (
          <Box
            key={step.n}
            bg="bg.subtle"
            borderWidth="1px"
            borderColor="border.default"
            borderLeftWidth={idx === 0 ? "1px" : { base: "1px", md: "1px" }}
            borderRadius="4px"
            p="26px"
            pl={idx === 0 ? "26px" : { base: "26px", md: "22px" }}
          >
            <Text
              fontFamily="display"
              fontWeight="700"
              fontSize="38px"
              color="accent.default"
              lineHeight="1"
            >
              {step.n}
            </Text>
            <Heading
              as="h3"
              fontFamily="display"
              fontSize="16px"
              fontWeight="600"
              mt="14px"
              mb="8px"
            >
              {step.title}
            </Heading>
            <Text color="fg.muted" fontSize="12px" lineHeight="1.6">
              {step.body}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

function TeamsSection() {
  return (
    <Box as="section" id="teams" py="66px" borderTopWidth="1px" borderColor="border.muted">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr auto" }}
        gap={{ base: "26px", md: "46px" }}
        alignItems="center"
        bg="bg.subtle"
        borderWidth="1px"
        borderColor="border.default"
        borderRadius="4px"
        p="38px"
      >
        <VStack alignItems="flex-start" gap="0">
          <MonoLabel>Teams</MonoLabel>
          <Heading
            as="h2"
            fontFamily="display"
            fontWeight="600"
            fontSize="clamp(24px, 2.8vw, 36px)"
            lineHeight="1.1"
            letterSpacing="-.02em"
            mt="12px"
            mb="16px"
          >
            The clash of midi, for agentic coding
          </Heading>
          <Text color="fg.muted" fontSize="13px" lineHeight="1.7" maxW="54ch">
            A host launches a round; everyone plays the same sequence on a timer; calls reveal at
            once. You see how your team voted, debate for two minutes, and find out who actually
            called it. No global ladder — just your team, every week.
          </Text>
          <HStack gap="12px" mt="24px">
            <Button asChild>
              <Link to="/dashboard">Start a team session →</Link>
            </Button>
          </HStack>
        </VStack>

        <VStack
          alignItems="stretch"
          gap="12px"
          fontFamily="mono"
          fontSize="12px"
          color="fg.subtle"
          minW="210px"
        >
          <HStack gap="11px" alignItems="baseline">
            <Text as="b" color="fg.default" fontWeight="500" fontVariantNumeric="tabular-nums">
              5–8
            </Text>
            <Text>items per round</Text>
          </HStack>
          <HStack gap="11px" alignItems="baseline">
            <Text as="b" color="fg.default" fontWeight="500" fontVariantNumeric="tabular-nums">
              ~10
            </Text>
            <Text>minutes, synchronous</Text>
          </HStack>
          <HStack gap="11px" alignItems="baseline">
            <Text as="b" color="fg.default" fontWeight="500" fontVariantNumeric="tabular-nums">
              intra-team
            </Text>
            <Text>comparison only</Text>
          </HStack>
          <HStack gap="11px" alignItems="baseline">
            <Text as="b" color="fg.default" fontWeight="500" fontVariantNumeric="tabular-nums">
              real
            </Text>
            <Text>sessions, anonymised</Text>
          </HStack>
        </VStack>
      </Grid>
    </Box>
  );
}

function Footer() {
  return (
    <Box as="footer" borderTopWidth="1px" borderColor="border.default" mt="90px" py="36px">
      <Container maxW="container.landing" px={{ base: "22px", md: "40px" }}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          flexWrap="wrap"
          color="fg.subtle"
          fontFamily="mono"
          fontSize="12px"
        >
          <Text fontFamily="display" fontWeight="700" letterSpacing=".2em" color="fg.muted">
            PALATE
          </Text>
          <HStack gap="18px">
            <Link to="/intervention">
              <Box _hover={{ color: "fg.default" }}>Intervention</Box>
            </Link>
            <Link to="/patterns">
              <Box _hover={{ color: "fg.default" }}>Patterns</Box>
            </Link>
            <Link to="/dashboard">
              <Box _hover={{ color: "fg.default" }}>Dashboard</Box>
            </Link>
          </HStack>
          <Text>get-palate.dev</Text>
        </Flex>
      </Container>
    </Box>
  );
}

function HomeComponent() {
  return (
    <Box
      as="main"
      bg="bg.default"
      color="fg.default"
      fontFamily="mono"
      fontSize="13.5px"
      lineHeight="1.6"
      minH="100vh"
      style={{
        backgroundImage:
          "radial-gradient(130% 70% at 50% -8%, #15171c 0%, var(--chakra-colors-signal-bg) 55%)",
      }}
    >
      <Container maxW="container.landing" px={{ base: "22px", md: "40px" }}>
        <Hero />
        <LoopSection />
        <GamesSection />
        <StepsSection />
        <TeamsSection />
      </Container>
      <Footer />
    </Box>
  );
}
