import { Center, Spinner } from "@chakra-ui/react";

export default function Loader() {
  return (
    <Center height="full" pt="8">
      <Spinner />
    </Center>
  );
}
