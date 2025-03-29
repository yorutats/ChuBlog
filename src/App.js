import { React, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import PortfolioList from "./Views/Portfolio/PortfolioList";
import PortfolioRouter from "./Views/Portfolio/PortfolioRouter";
import Page1 from "./Views/Portfolio/Page1";
import Page2 from "./Views/Portfolio/Page2";
import Page3 from "./Views/Portfolio/Page3";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolioList" element={<PortfolioList />} />
        <Route path="/portfolio/:id" element={<PortfolioRouter />} />

        {/* <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
