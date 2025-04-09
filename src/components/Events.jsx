import Event from "./Event";
import { useState } from "react";
import "../index.css";
import { gsap } from "gsap";
import { QRCode } from "react-qr-code";

const Events = () => {
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [rollno, setRollno] = useState("");
	const [branch, setBranch] = useState("CSE");
	const [teamSize, setTeamSize] = useState(1);
	const [eventName, setEventName] = useState("");
	const [eventId, setEventId] = useState(null);
	const [college, setCollege] = useState("MITS");
	const [utr, setUtr] = useState("");
	const eventlist = [
		{
			id: 6,
			title: "Web Development",
			description: "Learn and build web applications",
			price: "100Rs",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 7,
			title: "UI/UX",
			description: "Design user-friendly interfaces",
			price: "100Rs",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 11,
			title: "Code Rush",
			description: "Master the art of debugging code",
			price: "100Rs",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 8,
			title: "Tech Quest",
			description: "Test your technical knowledge",
			price: "100Rs",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 10,
			title: "Ideathon",
			description: "Pitch innovative ideas",
			price: "100Rs",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 13,
			title: "Project Expo",
			description: "Showcase your projects",
			price: "100Rs",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 9,
			title: "Paper Presentation",
			description: "Showcase your projects",
			price: "100Rs",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 4,
			title: "Sudoku",
			description: "Express creativity through writing",
			price: "100Rs",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 3,
			title: "Movie Mania",
			description: "Capture moments with photography",
			price: "100Rs",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 2,
			title: "ShoDUOwn",
			description: "Showcase your unique talents",
			price: "100Rs",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 5,
			title: "Synergy Challenge",
			description: "Collaborate and solve challenges",
			price: "100Rs",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 12,
			title: "Scribble",
			description: "Unleash your artistic skills",
			price: "100Rs",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 1,
			title: "E-Sports",
			description: "Compete in gaming tournaments",
			price: "100Rs",
			teamSize: 1,
			category: "non-technical",
		},
	];
	const resetStates = (e) => {
		if (e.target === e.currentTarget) {
			gsap.to(".event-form", {
				top: "110vh",
				duration: 0.5,
				ease: "power2.out",
			});
		}
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (utr.trim() === "") {
			alert("Please enter UTR number");
			return;
		}
		const members = [];
		document.querySelectorAll(".member").forEach((member) => {
			members.push(member.value);
		});

		const formData = {
			name,
			mobile,
			rollno,
			branch,
			members: members,
			college,
			eventId,
			teamSize,
			utr,
		};
		console.log(formData);
		fetch(`/register/`, {
			// Use event ID in the URL path
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				alert("Form submitted successfully");
				console.log(data);
				setName("");
				setMobile("");
				setRollno("");
				setBranch("");
				setTeamSize(1);
				setEventName("");
				setCollege("");
				setUtr("");
				document.querySelectorAll(".member").forEach((member) => {
					member.value = "";
				});
			})
			.catch((error) => {
				console.error("Error:", error);
				alert("There was an error submitting the form");
			});
	};
	const onTeamSizeChange = (e) => {
		const value = parseInt(e.target.value);
		if (value > 10) {
			alert("Team size cannot exceed 10");
			setTeamSize(10);
		} else if (value < 1) {
			alert("Team size cannot be less than 1");
			setTeamSize(1);
		} else {
			setTeamSize(value);
		}
	};

	return (
		<>
			{window.innerWidth > 480 ? (
				<div className="header">
					<img src="/static/img/MITSLogo.png" alt="" />
					<h1>GMOCS 2k25 EVENTS</h1>
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			) : (
				<div className="header">
					<img src="/static/img/MITSLogo.png" alt="" />
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			)}
			<div className="events" onClick={resetStates}>
				{eventlist.map((event, index) => (
					<Event
						key={index}
						name={event.title}
						desc={event.description}
						price={event.price}
						number={index + 1}
						length={eventlist.length}
						teamSize={event.teamSize}
						setTeamSize={setTeamSize}
						setEventName={setEventName}
						setEventId={setEventId}
						eventId={event.id}
						category={event.category}
					/>
				))}
				<h1 className="technical-heading">Technical</h1>
				<h1 className="non-technical-heading">Non-Technical</h1>
				<form className="event-form">
					<h1>Registration Form</h1>
					<div className="input-field">
						<span>Name:</span>
						<input
							type="text"
							name="name"
							id="name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="input-field">
						<span>Mobile:</span>
						<input
							type="text"
							name="mobile"
							id="mobile"
							required
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
						/>
					</div>
					<div className="input-field">
						<span>Roll No:</span>
						<input
							type="text"
							name="rollno"
							id="rollno"
							required
							value={rollno}
							onChange={(e) => setRollno(e.target.value)}
						/>
					</div>
					<div className="input-field">
						<span>Branch:</span>
						<input
							type="text"
							name="branch"
							id="branch"
							value={branch}
							onChange={(e) => setBranch(e.target.value)}
							required
						/>
					</div>
					<div className="input-field">
						<span>Event: </span>
						<input
							type="text"
							name="event"
							id="event"
							value={eventName}
							disabled
						/>
					</div>
					<div className="input-field">
						<span>Team Size:</span>
						<input
							type="number"
							name="teamSize"
							id="teamSize"
							min={1}
							max={10}
							value={teamSize}
							onChange={onTeamSizeChange}
						/>
					</div>
					{teamSize > 1 &&
						teamSize < 11 &&
						Array.from({ length: teamSize - 1 }, (_, index) => (
							<div className="input-field" key={index}>
								<span>Member {index + 2}:</span>
								<input
									type="text"
									className="member"
									name={`member${index}`}
									id={`member${index}`}
									placeholder="Enter name (if applicable)"
								/>
							</div>
						))}
					<div className="input-field">
						<span>College:</span>
						<input
							type="text"
							name="college"
							id="college"
							defaultValue={college}
							onChange={(e) => setCollege(e.target.value)}
							required
						/>
					</div>
					<p>Scan the QR code to pay</p>
					<div
						className="qr-wrapper"
						style={{
							margin: "0 auto",
							width: "128px",
							height: "128px",
						}}
					>
						<QRCode
							value={`upi://pay?pa=maheshkumarvmk@ybl&pn=Vaileti%20Mahesh%20Kumar&mc=0000&mode=02&purpose=00&am=${
								teamSize *
								(college.trim() === "MITS" ? 50 : 100)
							}`}
							size={128}
							style={{ margin: "0 auto" }}
							bgColor="transparent"
							fgColor="#5a80d1"
						/>
					</div>
					<p>or</p>
					<a
						href={`upi://pay?pa=maheshkumarvmk@ybl&pn=Vaileti%20Mahesh%20Kumar&mc=0000&mode=02&purpose=00&am=${
							teamSize * (college.trim() === "MITS" ? 50 : 100)
						}`}
					>
						₹ Click to pay
					</a>
					<p>After payment</p>
					<div className="input-field">
						<span>UTR: </span>
						<input
							type="text"
							name="utr"
							id="utr"
							required
							value={utr}
							onChange={(e) => {
								setUtr(e.target.value);
							}}
						/>
					</div>
					<p className="note">
						Note: Please pay the registration fee before submitting
						the form.
					</p>
					<button type="submit" onClick={onFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Events;
