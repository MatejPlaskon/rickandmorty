import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {AppLayout} from "./layouts/AppLayout";

function App() {
  return (
    <ChakraProvider>
      <AppLayout />
    </ChakraProvider>
  );
}

export default App;
