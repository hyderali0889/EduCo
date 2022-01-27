import React from "react";
import Slider from "../components/slider";
import Courses from "../components/courses";
import Branches from "../components/branches";
import Services from "../components/services";
import Events from "../components/events";
import MainSlider from "../components/MainSlider";

export default function Home() {
  return (
    <div>
      <div>
      <Slider />
      <Courses />
      <Branches />
      <Services />
      <Events />
      <MainSlider />
      </div>
    </div>
  );
}
