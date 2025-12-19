import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";

// MAIN PAGES

//import Home from "./pages/HOME/Home";
//import About from "./pages/About";

//import Careers from "./pages/Gallery";
//import Shop from "./pages/Shop";
//import Contact from "./pages/Contact";

//import Ded from "./pages/subsidiries/DED/Ded";
//import Feed from "./pages/subsidiries/Feed/Feed";
//import Integrity from "./subsidiries/projects/Integrity/integrity";
//import Lpg from "./pages/subsidiries/LPG/Lpg";

export default function App() {
  function AppContent() {
    const location = useLocation();
    return (
      <>
        {location.pathname === "/" ? <Header /> : <Header2 />}

        <Routes>
          {/* Main Routes */}
          {/*}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/contact" element={<Contact />} />

          {/* su Sub Routes */}

          {/*  <Route path="/subsidiries/ded" element={<Ded />} />
          <Route path="/subsidiries/feed" element={<Feed />} />
          <Route path="/subsidiries/integrity" element={<Integrity />} />
          <Route path="/subsidiries/lpg" element={<Lpg />} />

		  */}
        </Routes>

        <Footer />
      </>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
