import React from "react";
import Companies from "./components/home_page/hiring slider/hiringpartners";
import "./App.css";
import Navbar from "./components/home_page/navabar/navbar";
import Courses from "./components/home_page/pupular-courses/courses";
import Footer from "./components/home_page/footer/footer";
import Intro_vid from "./components/home_page/Intro-video/Intro_vid";
import Counter from './components/home_page/Counter/Counter';

function App() {
  return (
  <div className="App">
    <Navbar />
    <Courses/>
    <Companies/>
    <Intro_vid/>
    <Counter/>
    <Footer/>
  </div>);
}

export default App;
