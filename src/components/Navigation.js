import React, { useState } from "react";
import Home from "./Home";
import WorkPage from "./Pages/WorkPage";
import Culture from "./Pages/Culture";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import Terms from "./FooterPages/Terms";
import Privacy from "./FooterPages/Privacy";
import Transparency from "./FooterPages/Transparency";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { WorkPageSectionData, WorkPageCardData } from "../assests/AllData";
import NavBar from "./NavBar";

const Navigation = () => { 
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/workPage" element={<WorkPage/>}></Route>
        <Route path="/culture" element={<Culture/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/transparency" element={<Transparency/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
       
      </Routes>
    
    </BrowserRouter>
    </>
  );
};

export default Navigation;
