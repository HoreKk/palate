import { defineRecipe } from "@chakra-ui/react";
import { buttonRecipe } from "@chakra-ui/react/theme";

export const signalButtonRecipe = defineRecipe({
  ...buttonRecipe,
  base: {
    ...buttonRecipe.base,
    fontFamily: "mono",
    borderRadius: "md",
    transition: "filter .15s, background .15s, border-color .15s, transform .1s",
    _active: {
      transform: "translateY(1px)",
    },
  },
  defaultVariants: {
    colorPalette: "brand",
    variant: "solid",
    size: "md",
  },
});
