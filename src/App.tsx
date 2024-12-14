import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes } from "./Routes";
import "./App.css";

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
