import React from "react";
import Abouthero from "./ABOUT/abouthero";
import Knowus from "./ABOUT/knowus";
import Vision from "./ABOUT/vision";
import Videobg from "./ABOUT/video";
import Project from "./ABOUT/project";
import Overview1 from "./ABOUT/overview1";
import Overview2 from "./ABOUT/overview2";

export default function About() {
  return (
    <div>
      <div className="font-Montserrat mt-32 lg:mt-0">
        <Abouthero />
        <Knowus />
        <Vision />
        <Videobg />
        <Project />
        <Overview1/>
        <Overview2/>


      </div>
    </div>
  );
}
