import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import Home from "./pages/Home/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/mensfashion" element={<MensFashion />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
