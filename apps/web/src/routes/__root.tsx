import { Grid } from "@chakra-ui/react";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";

import "@fontsource-variable/space-grotesk/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";

import Navbar from "../components/layout/navbar";
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
        title: "Palate — get-palate.dev",
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
          <Grid minHeight="100svh" templateRows="auto 1fr">
            <Navbar />
            <Outlet />
          </Grid>
          <Toaster />
        </Provider>
        <Scripts />
      </body>
    </html>
  );
}
