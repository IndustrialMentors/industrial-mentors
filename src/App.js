import React from "react";
import Companies from "./components/home_page/hiring slider/hiringpartners";
import "./App.css";
import Navbar from "./components/home_page/navabar/navbar";
import Courses from "./components/home_page/pupular-courses/courses";

function App() {
  return (
  <div className="App">
    <Navbar />
    <Courses/>
    <Companies/>
  </div>);
}

export default App;
