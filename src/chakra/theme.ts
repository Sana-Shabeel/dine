import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      beaver: "#9e7f66",
      codgray: "#111111",
      mirage: "#17192b",
      ebonyclay: "#242b37",
      shuttlegray: "#5c6779",
    },
  },
  components: {
    Button,
  },
});
