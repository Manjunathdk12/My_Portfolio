import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import Awards from "./components/Awards";

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div className="app">
      <ParticlesBackground />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
