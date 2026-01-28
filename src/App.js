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

import Home from "./pages/Home";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";

//import Careers from "./pages/Gallery";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

import List1 from "./pages/subsidiaries/list1";
import List2 from "./pages/subsidiaries/list2";
import List3 from "./pages/subsidiaries/list3";
import List4 from "./pages/subsidiaries/list4";

export default function App() {
  function AppContent() {
    const location = useLocation();
    return (
      <>
        {location.pathname === "/" ? <Header /> : <Header2 />}

        <Routes>
          {/* Main Routes */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/gallery" element={<GalleryPage />} />

          {/* <Route path="/careers" element={<Careers />} /> */}

          <Route path="/shop" element={<Shop />} />

          <Route path="/contact" element={<Contact />} />

          {/* su Sub Routes */}

          <Route path="/subsidiaries/list1" element={<List1 />} />
          <Route path="/subsidiaries/list2" element={<List2 />} />
          <Route path="/subsidiaries/list3" element={<List3 />} />
          <Route path="/subsidiaries/list4" element={<List4 />} />

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
