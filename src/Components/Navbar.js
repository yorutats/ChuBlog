import React from "react";
import styled from "styled-components";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar navMenu" style={{ color: "black !important" }}>
      <a href="./">Home</a>
      <a href="#/about">About</a>
      <a href="#/portfolioList">portfolio</a>
      {/* <a href="/work">Work</a> */}
    </nav>
  );
}

export default Navbar;
