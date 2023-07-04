import React from "react";
import "./App.css";
import NavBar from "./photoGraphy/NavBar";
import Intro from "./photoGraphy/Intro";
import Portfolio from "./photoGraphy/Portfolio";
import About from "./photoGraphy/About";
import Books from "./photoGraphy/Books";
import Contact from "./photoGraphy/Contact";
import BlogBox from "./photoGraphy/BlogBox";
import Gallery from "./photoGraphy/Gallery";
import Food from "./photoGraphy/Food";
import Baked from "./photoGraphy/Baked";
import Footer from "./photoGraphy/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Application pt-24">
        <Intro />
        <Portfolio />
        <About />
        <Books />
        <BlogBox />
        <Contact />
        <Gallery />
        <Food />
        <Baked />
        <Footer />

      </div>
    </div>
  );
}

export default App;
