import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ImageData from "./Pages/ImageData";

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ImageData />} />

        <Route path="*" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
