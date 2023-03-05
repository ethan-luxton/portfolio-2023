import './App.css';
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <About/>
      <div></div>
    </>
    
  );
}

export default App;
