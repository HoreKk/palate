import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import { authClient } from "@/lib/auth-client";

import { toaster } from "../ui/toaster";

export default function GithubSignInButton() {
  const handleSignIn = async () => {
    await authClient.signIn.social(
      {
        provider: "github",
        callbackURL: "/dashboard",
      },
      {
        onError: (error) => {
          toaster.error({ title: error.error.message || error.error.statusText });
        },
      },
    );
  };

  return (
    <Button type="button" w="full" variant="outline" onClick={handleSignIn}>
      <FaGithub />
      Continue with GitHub
    </Button>
  );
}
