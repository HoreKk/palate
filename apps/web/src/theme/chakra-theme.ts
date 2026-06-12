import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { signalButtonRecipe } from "./recipes/button";

const config = defineConfig({
  theme: {
    recipes: {
      button: signalButtonRecipe,
    },
    tokens: {
      colors: {
        brand: {
          50: { value: "#e8f1ff" },
          100: { value: "#c7deff" },
          200: { value: "#a5cbff" },
          300: { value: "#84b8ff" },
          400: { value: "#6ba6ff" },
          500: { value: "#5b9dff" },
          600: { value: "#4a8de6" },
          700: { value: "#3a7ccc" },
          800: { value: "#2a6bb3" },
          900: { value: "#1a5a99" },
          950: { value: "#0d1a33" },
        },
      },
      fonts: {
        heading: {
          value: "Space Grotesk Variable",
        },
        body: {
          value: "JetBrains Mono Variable",
        },
        mono: {
          value: "JetBrains Mono Variable",
        },
      },
      fontSizes: {
        "2xs": { value: "9px" },
        xs: { value: "10.5px" },
        sm: { value: "11.5px" },
        base: { value: "13.5px" },
      },
      radii: {
        sm: { value: "4px" },
        md: { value: "5px" },
        lg: { value: "6px" },
      },
      sizes: {
        "container.landing": { value: "1180px" },
      },
    },
    semanticTokens: {
      colors: {
        "bg.default": { value: "#0c0d0f" },
        "bg.subtle": { value: "#131519" },
        "bg.muted": { value: "#181b21" },
        "bg.tool": { value: "#0f1115" },

        "fg.default": { value: "#eef0f3" },
        "fg.muted": { value: "#9aa1ad" },
        "fg.subtle": { value: "#5f6671" },

        "border.default": { value: "#23262c" },
        "border.muted": { value: "#1b1e23" },
        "border.strong": { value: "#333842" },

        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },

        "accent.default": { value: "{colors.brand.500}" },
        "accent.dim": { value: "#5b9dff1c" },
        "accent.ink": { value: "#0a0d12" },

        "success.default": { value: "#56c08a" },
        "success.dim": { value: "#56c08a1f" },

        "danger.default": { value: "#f0654a" },
        "danger.dim": { value: "#f0654a1f" },

        "user.default": { value: "#c4d2ec" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
