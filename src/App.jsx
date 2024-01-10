import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
// import { Blogs } from "./components/Blogs";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-dark">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <Blogs /> */}
        <Partners />
        <Contact />
        <div className="h-20"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
