import React, { useState } from "react";
import Head from "./HEADER2/head";
import Colour from "./HEADER2/colour";
import Top from "./HEADER2/top";

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubsOpen, setMobileSubsOpen] = useState(false);

  return (
    <div className="fixed md:static top-0 left-0 right-0 z-50">
      <Colour />
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Head
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        mobileSubsOpen={mobileSubsOpen}
        setMobileSubsOpen={setMobileSubsOpen}
      />
    </div>
  );
};

export default Header2;
