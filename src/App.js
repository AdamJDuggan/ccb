import * as React from "react";
import Landing from "./components/Landing";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Sessions from "./components/Sessions";
import Team from "./components/Team";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

const App = () => {
  const [modal, setModal] = React.useState({
    show: false,
    message: "Thank you for your message. We will respond shortly",
  });
  const onClose = () => setModal((modal) => ({ ...modal, show: false }));

  const submitForm = (message) => {
    setModal(() => ({
      show: true,
      message: message ? message : modal.message,
    }));
  };

  return (
    <>
      <Modal message={modal.message} show={modal.show} onClose={onClose} />
      <Navbar />
      <Landing />
      <About />
      <Team />
      <Sessions />
      <Vision />
      <Contact submitForm={submitForm} />
    </>
  );
};
export default App;
