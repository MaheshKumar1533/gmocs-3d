import Spline from "@splinetool/react-spline";
import AboutGMOCS from "./AboutGMOCS";

export default function Home() {
	if (window.innerWidth < 480) {
		window.location.href = "/mobile";
	}
	return (
		<>
			<div className="home">
				<div className="hero-section">
					<Spline
						scene="https://prod.spline.design/lcX0Rs3X3ahwS4Sm/scene.splinecode"
						style={{
							width: "100vw",
							height: "100vh",
							background: "#1B1A1C",
						}}
					/>
					<button className="scroll-button">
						Scroll Down <i className="bi bi-caret-down-fill"></i>
					</button>
				</div>
				<AboutGMOCS />
			</div>
		</>
	);
}
