import { React, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import PortfolioList from "./Views/Portfolio/PortfolioList";
import PortfolioRouter from "./Views/Portfolio/PortfolioRouter";
import Footer from "./Componets/Footer";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolioList" element={<PortfolioList />} />
        <Route path="/portfolio/:id" element={<PortfolioRouter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
