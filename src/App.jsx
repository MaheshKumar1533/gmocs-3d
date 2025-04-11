import Events from "./components/Events";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
