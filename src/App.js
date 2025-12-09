import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// MAIN PAGES

// import Home from './pages/Home';
// import About from './pages/About';
// import Academy from './pages/Academy';
// import Careers from './pages/Careers';
// import News from './pages/News';
// import Contact from './pages/Contact';

// SERVICE PAGES
// import Gasdistribution from './pages/services/Gasdistribution';
// import Gasprocessing from './pages/services/Gasprocessing';
// import Oilngas from './pages/services/oilngas';
// import Pipeline from './pages/services/pipeline';
// import Procurement from './pages/services/Procurement';
// import Storage from './pages/services/storage';
// import Technical from './pages/services/technical';
// import Utility from './pages/services/utility';

// PROJECT PAGES
import Ded from './pages/projects/Ded';
import Feed from './pages/projects/Feed';
import Integrity from './pages/projects/integrity';
import Lpg from './pages/projects/Lpg';

export default function App() {
	return (
		<Router>
			<Header />

			<Routes>
				{/* Main Routes */}

				{/* <Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/academy"
					element={<Academy />}
				/>
				<Route
					path="/careers"
					element={<Careers />}
				/>
				<Route
					path="/news"
					element={<News />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/> */}

				{/* Services Sub Routes */}

				{/* <Route
					path="/services/gasdistribution"
					element={<Gasdistribution />}
				/>
				<Route
					path="/services/gasprocessing"
					element={<Gasprocessing />}
				/>
				<Route
					path="/services/oilngas"
					element={<Oilngas />}
				/>
				<Route
					path="/services/pipeline"
					element={<Pipeline />}
				/>
				<Route
					path="/services/procurement"
					element={<Procurement />}
				/>
				<Route
					path="/services/storage"
					element={<Storage />}
				/>
				<Route
					path="/services/technical"
					element={<Technical />}
				/>
				<Route
					path="/services/utility"
					element={<Utility />}
				/> */}

				{/* Project Sub Routes */}

				<Route
					path="/projects/ded"
					element={<Ded />}
				/>
				<Route
					path="/projects/feed"
					element={<Feed />}
				/>
				<Route
					path="/projects/integrity"
					element={<Integrity />}
				/>
				<Route
					path="/projects/lpg"
					element={<Lpg />}
				/>
			</Routes>

			<Footer />
		</Router>
	);
}
