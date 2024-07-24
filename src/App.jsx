import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
    <BrowserRouter>
      <NavBar />
      <Footer title="The Footers" />
    </BrowserRouter>
    </div>
  );
};

export default App;
