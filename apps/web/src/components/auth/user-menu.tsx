import { Button, HStack, Menu, Portal, SkeletonText } from "@chakra-ui/react";
import { Link, useNavigate } from "@tanstack/react-router";

import { authClient } from "@/lib/auth-client";

export default function UserMenu() {
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <SkeletonText height="9" width="24" noOfLines={1} />;
  }

  if (!session) {
    return (
      <HStack gap="12px">
        <Button asChild variant="ghost">
          <Link to="/login">Sign in</Link>
        </Button>
        <Button asChild>
          <Link to="/login">Launch app →</Link>
        </Button>
      </HStack>
    );
  }

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost">{session.user.name}</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>My Account</Menu.ItemGroupLabel>
              <Menu.Separator />
              <Menu.Item value="email" disabled>
                {session.user.email}
              </Menu.Item>
              <Menu.Item
                value="sign-out"
                color="fg.error"
                onClick={() => {
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        navigate({
                          to: "/",
                        });
                      },
                    },
                  });
                }}
              >
                Sign Out
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
