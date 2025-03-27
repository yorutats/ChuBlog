import { React, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Blog from "./Views/Card_blog";

import Page1 from "./Views/Page1";
import Page2 from "./Views/Page2";
import Page3 from "./Views/Page3";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
