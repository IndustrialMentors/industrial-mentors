import React from "react";
import Companies from "./components/home_page/hiring slider/hiringpartners";
import "./App.css";
import Navbar from "./components/home_page/navabar/navbar";
import Courses from "./components/home_page/pupular-courses/courses";
import Footer from "./components/home_page/footer/footer";
import HeroSection from "./components/home_page/Hero-section/hero-section";
import Mentors from "./components/home_page/mentors/mentors";
function App() {
  return (
  <div className="App">
    <Navbar />
    <HeroSection />
    <Courses/>
    <Companies/>
    <Mentors />
    <Footer/>
  </div>);
}

export default App;
