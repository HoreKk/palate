import "@fontsource-variable/space-grotesk/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";

import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import Loader from "./components/shared/loader";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    context: {},
    defaultPendingComponent: () => <Loader />,
    defaultNotFoundComponent: () => <div>Not Found</div>,
  });

  return router;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
