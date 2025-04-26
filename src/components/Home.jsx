import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import AboutGMOCS from "./AboutGMOCS";
import Sponsors from "./Sponsors";

export default function Home() {
	if (window.innerWidth < 480) {
		window.location.href = "/mobile";
	}
	return (
		<>
			<div className="home">
				<div className="hero-section">
					<Spline
						scene="https://prod.spline.design/bwaZOv-eoBjL9PSP/scene.splinecode"
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
				<Sponsors />
			</div>
		</>
	);
}
