import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Footer from "./components/Footer";

function App() {
  return (
    <Background>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Background>
  );
}

export default App;
