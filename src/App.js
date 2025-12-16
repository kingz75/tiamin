import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Header2 from './components/Header2';
import Footer from './components/Footer';

// MAIN PAGES

import Home from './pages/HOME/Home';
import About from './pages/About';
// import Academy from './pages/Academy';
// import Careers from './pages/Careers';
// import News from './pages/News';
// import Contact from './pages/Contact';
import Careers from './pages/Careers';
import News from './pages/News';
import Contact from './pages/Contact';

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
import Ded from './pages/projects/DED/Ded';
import Feed from './pages/projects/Feed/Feed';
import Integrity from './pages/projects/Integrity/integrity';
import Lpg from './pages/projects/LPG/Lpg';
import Gasprocessing from './pages/services/GasProcessing/Gasprocessing';
import Gasdistribution from './pages/services/GasDistribution/Gasdistribution';
import Oilngas from './pages/services/OilGas/Oilngas';
import Pipeline from './pages/services/PipeLine/Pipeline';
import Procurement from './pages/services/Procurement/Procurement';
import Storage from './pages/services/Storage/Storage';
import Technical from './pages/services/Technical/Technical';
import Utility from './pages/services/Utility/Utility';

export default function App() {
	function AppContent() {
		const location = useLocation();
		return (
			<>
				{location.pathname === '/' ? <Header /> : <Header2 />}

				<Routes>
					{/* Main Routes */}

					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					{/* <Route
						path="/academy"
						element={<Academy />}
					/> */}

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
					/>

					{/* Services Sub Routes */}

					<Route
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
					/>

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
