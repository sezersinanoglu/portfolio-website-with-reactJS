import React from "react";
import Hero from './Hero'
import Stats from './Stats'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from "./Contact";

function Main() {
  return (
    <main>
      <article className="container">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Project />
        <Contact />
      </article>
    </main>
  );
}

export default Main;
