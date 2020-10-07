import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* Two componenetcs home,about, etc and Navbar */}
      {/* Creating swtich for changing pages via urls */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
        <Home />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
