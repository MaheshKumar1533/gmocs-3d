import Spline from "@splinetool/react-spline";

export default function Home() {
	if (window.innerWidth < 480) {
		window.location.href = "/mobile";
	}
	return (
		<Spline
			scene="https://prod.spline.design/bwaZOv-eoBjL9PSP/scene.splinecode"
			style={{ width: "100vw", height: "100vh", background: "#1B1A1C" }}
		/>
	);
}
