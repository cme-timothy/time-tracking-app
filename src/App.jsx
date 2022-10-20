import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Main />
        <Header />
      </Router>
    </HelmetProvider>
  );
}

export default App;
