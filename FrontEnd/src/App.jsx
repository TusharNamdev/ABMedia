import React from "react";
import { useSelector } from "react-redux";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import TourPackages from "./Components/TourPackages";
import AdvantagesSection from "./Components/AdvantagesSection";
import Destinations from "./Components/Destinations";

const App = () => {

  return (
    <>
      <HeroSection/>
      <Destinations/>
      <AdvantagesSection/>
      <TourPackages/>
      <Testimonials/>
    </>
  );
};

export default App;
