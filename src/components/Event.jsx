import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
gsap.registerPlugin(useGSAP);

const Event = ({ name, desc, price, number, length }) => {
	const [isOpen, setIsOpen] = useState(false);
	const mid = length / 2;

	// Add realistic book fold and shadow styles
	const cardStyles = {
		position: "relative",
		width: "100%",
		height: "100%",
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

	return (
		<div
			className={`event ${isOpen ? "open" : ""}`}
			id={`event-${number}`}
			style={{ zIndex: number }}
			onMouseOver={onMouseHover}
			onMouseOut={onMouseLeave}
			onClick={onClick}
		>
			<div className="content-container">
				<div className="card" style={cardStyles}>
					<div className="front" style={frontStyles}>
						<h1 className="name">{name}</h1>
					</div>
					<div className="back" style={backStyles}>
						<h1 className="name opened">{name}</h1>
						<img src="/not-found.jpg" alt="" />
						<p className="desc">{desc}</p>
						<p className="price">Registration Fees: {price}</p>
						<div className="btn">
							<a href="https://www.google.com/">Register Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Event;
