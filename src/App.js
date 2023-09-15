import React from "react";
import "./App.css";
import Navbar from "./components/home_page/navabar/navbar";
import HeroSection from"./components/home_page/Hero-section/hero-section";
import Companies from "./components/home_page/hiring slider/hiringpartners"
import Courses from "./components/home_page/pupular-courses/courses";
import Intro_vid from "./components/home_page/Intro-video/Intro_vid";
import Footer from "./components/home_page/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
      <Intro_vid />
      <Footer />
    </div>
  );

}

export default App;
