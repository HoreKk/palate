import { Box, Button, Field, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import z from "zod";

import { authClient } from "@/lib/auth-client";

import GithubSignInButton from "./github-sign-in-button";
import { toaster } from "../ui/toaster";

import Loader from "../shared/loader";

export default function SignUpForm({ onSwitchToSignIn }: { onSwitchToSignIn: () => void }) {
  const navigate = useNavigate({
    from: "/",
  });
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            toaster.success({ title: "Sign up successful" });
          },
          onError: (error) => {
            toaster.error({ title: error.error.message || error.error.statusText });
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Box mx="auto" w="full" mt="10" maxW="md" p="6">
      <Heading mb="6" textAlign="center" size="3xl">
        Create Account
      </Heading>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <Stack gap="4">
          <form.Field name="name">
            {(field) => (
              <Field.Root invalid={field.state.meta.errors.length > 0}>
                <Field.Label htmlFor={field.name}>Name</Field.Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <Field.ErrorText key={error?.message}>{error?.message}</Field.ErrorText>
                ))}
              </Field.Root>
            )}
          </form.Field>

          <form.Field name="email">
            {(field) => (
              <Field.Root invalid={field.state.meta.errors.length > 0}>
                <Field.Label htmlFor={field.name}>Email</Field.Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <Field.ErrorText key={error?.message}>{error?.message}</Field.ErrorText>
                ))}
              </Field.Root>
            )}
          </form.Field>

          <form.Field name="password">
            {(field) => (
              <Field.Root invalid={field.state.meta.errors.length > 0}>
                <Field.Label htmlFor={field.name}>Password</Field.Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <Field.ErrorText key={error?.message}>{error?.message}</Field.ErrorText>
                ))}
              </Field.Root>
            )}
          </form.Field>

          <form.Subscribe
            selector={(state) => ({ canSubmit: state.canSubmit, isSubmitting: state.isSubmitting })}
          >
            {({ canSubmit, isSubmitting }) => (
              <Button type="submit" w="full" disabled={!canSubmit || isSubmitting}>
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </Button>
            )}
          </form.Subscribe>
        </Stack>
      </form>

      <Stack gap="4" mt="4">
        <Text textAlign="center" color="fg.muted" fontSize="sm">
          or
        </Text>
        <GithubSignInButton />
      </Stack>

      <Box mt="4" textAlign="center">
        <Button variant="plain" colorPalette="blue" onClick={onSwitchToSignIn}>
          Already have an account? Sign In
        </Button>
      </Box>
    </Box>
  );
}
