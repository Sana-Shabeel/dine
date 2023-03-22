import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    width: "15.3125rem",
    border: "none",
    borderRadius: "none",
    fontWeight: "600",
    fontSize: "17px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
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
      border: "1px solid white",
      transition: "0.45s ease-in-out",

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
