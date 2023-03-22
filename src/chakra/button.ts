import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    width: "15.3125rem",
    border: "none",
    borderRadius: "none",
    fontWeight: "400",
    fontSize: "17px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
  },

  sizes: {
    lg: {
      height: "64px",
    },
  },

  variants: {
    solid: {
      color: "white",
      bg: "#111111",
      _hover: {
        bg: "blue.400",
      },
    },
    outline: {
      color: "#111111",
      bg: "transparent",
      border: "2px solid white",
      transition: "box-shadow 0.25s ease-in-out",

      _hover: {
        color: "#111111",
        boxShadow: "inset 0 0 0 2em #f1f1f1",
      },
      _active: {
        color: "#111111",
        boxShadow: "inset 0 0 0 2em #f1f1f1",
      },
    },
  },
};
