import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
gsap.registerPlugin(useGSAP);

const Event = ({
	name,
	desc,
	price,
	number,
	length,
	teamSize,
	setTeamSize,
	setEventName,
	setEventId,
	eventId,
	category,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const mid = length / 2;

	// Add realistic book fold and shadow styles
	const cardStyles = {
		position: "relative",
		width: "100%",
		height: "100%",
	};

	const styles = {
		backgroundColor: category === "technical" ? "#051a57" : "#c9d9ff",
		color: category === "technical" ? "#051a57" : "#c9d9ff",
		border:
			category === "technical"
				? "1px solid #c9d9ff"
				: "1px solid #051a57",
	};

	const frontStyles = {
		position: "absolute",
		width: "100%",
		height: "100%",
		transformStyle: "preserve-3d",
		transformOrigin: "left center",
		backfaceVisibility: "hidden",
		zIndex: 2,
	};

	const backStyles = {
		position: "absolute",
		width: "100%",
		height: "100%",
		zIndex: 1,
	};

	useGSAP(() => {
		gsap.to(`#event-${number}`, {
			x: 50 * (number - mid),
			y: Math.abs(3 * (number - mid)),
			transformOrigin: "50% 100%",
			duration: 1,
			transitionTimingFunction: "linear",
		});
		gsap.to(`#event-${number}`, {
			rotate: `${5 * (number - mid)}deg`,
		});
	});

	const onMouseHover = () => {
		if (!isOpen) {
			gsap.to(`#event-${number}`, {
				x: 50 * (number - mid),
				y: Math.abs(3 * (number - mid)),
				scale: 1.1,
				transformOrigin: "50% 100%",
				duration: 0.1,
				transitionTimingFunction: "linear",
			});
		}
	};

	const onMouseLeave = () => {
		if (!isOpen) {
			gsap.to(`#event-${number}`, {
				x: 50 * (number - mid),
				y: Math.abs(3 * (number - mid)),
				scale: 1,
				transformOrigin: "50% 100%",
				duration: 0.11,
				transitionTimingFunction: "linear",
			});
		}
	};

	const onClick = () => {
		setIsOpen(!isOpen);
		if (!isOpen) {
			gsap.to(".event-form", {
				top: "110vh",
				duration: 0.5,
				ease: "power2.out",
			});
			gsap.to(`#event-${number}`, {
				x: 0,
				y: 0,
				scale: 1.5,
				zIndex: 100,
				rotate: "0deg",
				rotateX: "0deg",
				rotateY: "180deg",
				duration: 0.6,
				ease: "power2.out",
			});
			gsap.to(`#event-${number} .front`, {
				opacity: 0,
				duration: 0.3,
				zIndex: 1,
				ease: "power2.inOut",
				onComplete: () => {
					gsap.to(`#event-${number} .back`, {
						opacity: 1,
						duration: 0.3,
						zIndex: 2,
						ease: "power2.inOut",
					});
				},
			});
		} else {
			gsap.to(`#event-${number}`, {
				x: 50 * (number - mid),
				y: Math.abs(3 * (number - mid)),
				scale: 1,
				rotateY: "360deg",
				rotateX: "0deg",
				zIndex: number,
				rotate: `${5 * (number - mid)}deg`,
				duration: 0.6,
				ease: "power2.inOut",
			});
			gsap.to(`#event-${number} .back`, {
				opacity: 0,
				duration: 0.3,
				zIndex: 1,
				ease: "power2.inOut",
				onComplete: () => {
					gsap.to(`#event-${number} .front`, {
						opacity: 1,
						duration: 0.3,
						zIndex: 2,
						ease: "power2.inOut",
					});
				},
			});
		}
	};

	const onRegisterClick = () => {
		setTeamSize(teamSize);
		setEventName(name);
		setEventId(eventId); // Set the event ID when registering
		gsap.to(".event-form", {
			top: "0vh",
			duration: 0.5,
			ease: "power2.out",
		});
	};

	return (
		<div
			className={`event ${isOpen ? "open" : ""}`}
			id={`event-${number}`}
			style={{ zIndex: number, ...styles, overflow: "auto" }}
			onMouseOver={onMouseHover}
			onMouseOut={onMouseLeave}
			onClick={onClick}
		>
			<div className="content-container">
				<div className="card" style={cardStyles}>
					<div className="front" style={frontStyles}>
						<h1
							className="name"
							style={{
								color:
									category === "technical"
										? "#c9d9ff"
										: "#051a57",
							}}
						>
							{name}
						</h1>
					</div>
					<div className="back" style={backStyles}>
						<h1
							className="name opened"
							style={{
								color:
									category === "technical"
										? "#c9d9ff"
										: "#051a57",
							}}
						>
							{name}
						</h1>
						<img src="static/img/not-found.jpg" alt="" />
						<p
							className="desc"
							style={{
								color:
									category === "technical"
										? "#c9d9ff"
										: "#051a57",
							}}
						>
							{desc}
						</p>
						<p
							className="price"
							style={{
								color:
									category === "technical"
										? "#c9d9ff"
										: "#051a57",
								fontSize: ".5rem",
							}}
						>
							Registration Fees: {price}
						</p>
						<button className="btn" onClick={onRegisterClick}>
							Register Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Event;
