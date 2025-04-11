import Events from "./components/Events";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PassVerification from "./components/PassVerification";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/verify_pass" element={<PassVerification />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
