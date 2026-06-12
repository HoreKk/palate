import { Grid } from "@chakra-ui/react";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";

import Header from "../components/header";
import { Provider } from "../components/ui/provider";
import { Toaster } from "../components/ui/toaster";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "My App",
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Provider defaultTheme="dark">
          <Grid height="100svh" templateRows="auto 1fr">
            <Header />
            <Outlet />
          </Grid>
          <Toaster />
        </Provider>
        <Scripts />
      </body>
    </html>
  );
}
