import React, { useEffect } from "react";
import Education from "./Education";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Profilelinks from "./Profilelinks";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Profilelinks />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;