import Events from "./components/Events";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PassVerification from "./components/PassVerification";
import EventDetails from "./components/EventDetails"; // Import the new component

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/events/:id" element={<EventDetails />} /> {/* Dynamic route for individual events */}
				<Route path="/verify_pass" element={<PassVerification />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
