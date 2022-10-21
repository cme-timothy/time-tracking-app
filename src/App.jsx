import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Flex direction="column" minH="100vh" >
          <Main />
          <Flex flex={1} />
          <Header />
        </Flex>
      </Router>
    </HelmetProvider>
  );
}

export default App;
