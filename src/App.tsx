import React from "react";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes } from "./Routes";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
