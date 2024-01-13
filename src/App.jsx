import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Views/Navbar";
import LandingPage from "./Views/LandingPage";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <LandingPage/>
    </ChakraProvider>
  );
};

export default App;
