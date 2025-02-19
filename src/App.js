import * as React from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Sessions from "./components/Sessions";
import Team from "./components/Team";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Team />
      <Sessions />
      <Vision />
      <Contact />
    </>
  );
};
export default App;
