import React from 'react'
import Header from "../components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "../components/Home/Home";
import Footer from "../components/common/Footer/Footer";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Blog from "../components/Blog/Blog";
import Pricing from "../components/Pricing/Pricing";
import Contact from "../components/Contact/Contact";

const Pages = () => {
  return (
    <>
    <Router>
      <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </Router>
    </>
  );
}


export default Pages