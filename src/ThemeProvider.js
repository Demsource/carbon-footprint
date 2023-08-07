import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import "@fontsource/outfit";
import "@fontsource/inter";

const colors = {
  brand: {
    900: "#1A3847",
    500: "#008080",
    200: "#B2D8D8",
  },
  housing: {
    500: "#802B00",
  },
  nutrition: {
    500: "#00802B",
  },
  purchases: {
    500: "#80007F",
  },
  travel: {
    500: "#002A80",
  },
};

const fonts = {
  sidebar: "'Open Sans', sans-serif",
  main: "Roboto, sans-serif",
  heading: "Outfit, sans-serif",
  inter: "Inter, sans-serif",
};

const styles = {
  global: {
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
    },
    p: {
      fontFamily: "main",
    },
  },
};

export const theme = extendTheme({ colors, fonts, styles });

const ThemeProvider = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default ThemeProvider;
