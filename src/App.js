import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
