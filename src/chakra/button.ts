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
    padding: "1.5em",
  },

  variants: {
    solid: {
      color: "white",
      bg: "#111111",
      transition: "box-shadow 0.350s ease-in-out",
      border: "1px solid #000",

      _hover: {
        bg: "transparent",
        color: "#000",
        boxShadow: "inset 0 0 0 2em #f1f1f1",
      },
      _active: {
        bg: "transparent",
        color: "#000",
        boxShadow: "inset 0 0 0 2em #f1f1f1",
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
