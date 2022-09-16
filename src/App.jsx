import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Boost from "./components/Boost";
import Advanced from "./components/Advanced";
import Showcase from "./components/Showcase";
import Shortener from "./components/Shortener";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Shortener />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
