import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import LandingPage from "./Views/LandingPage";

const App = () => {
  return (
    <ChakraProvider>
   
      <LandingPage/>
    </ChakraProvider>
  );
};

export default App;
