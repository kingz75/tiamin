import React from "react";
import Hero from "./LIST1/list1hero";
import Rice from "./LIST1/rice";
import Logo from "./LIST1/logo";
import Video from "./LIST1/video";
import Image from "./LIST1/image";
import Discover from "./LIST1/discover";

const List1 = () => {
  return (
    <div className="mt-32 lg:mt-0 font-Montserrat">
      <Hero />
      <Rice />
      <Logo/>
      <Video/>
      <Image/>
      <Discover/>
    </div>
  );
};

export default List1;
