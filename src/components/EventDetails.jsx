import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { QRCode } from "react-qr-code";
import "../index.css";

const EventDetails = () => {
	const { id } = useParams(); // Get the event ID from URL
	const eventId = parseInt(id);

	// States for form data
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [rollno, setRollno] = useState("");
	const [branch, setBranch] = useState("");
	const [teamSize, setTeamSize] = useState(1);
	const [eventName, setEventName] = useState("");
	const [college, setCollege] = useState("MITS");
	const [utr, setUtr] = useState("");
	const [modeOfParticipation, setModeOfParticipation] = useState("FreeFire");
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);

	// Event data - same as in Events component
	const eventlist = [
		{
			id: 6,
			title: "Web Development",
			description: "Learn & Build web applications",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 7,
			title: "UI/UX",
			description: "Design user-friendly interfaces",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 11,
			title: "Code Rush",
			description: "Master the art of debugging code",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 8,
			title: "Tech Quest",
			description: "Test your technical knowledge",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 10,
			title: "Ideathon",
			description: "Pitch innovative ideas",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 13,
			title: "Project Expo",
			description: "Showcase your projects",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 9,
			title: "Paper Presentation",
			description: "Showcase your projects",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "technical",
		},
		{
			id: 4,
			title: "Sudoku",
			description: "Express creativity through writing",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 3,
			title: "Movie Mania",
			description: "Capture moments with photography",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 2,
			title: "ShoDUOwn",
			description: "Showcase your unique talents",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 5,
			title: "Synergy Challenge",
			description: "Collaborate and solve challenges",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 12,
			title: "Scribble",
			description: "Unleash your artistic skills",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "non-technical",
		},
		{
			id: 1,
			title: "E-Sports",
			description: "Compete in gaming tournaments",
			price: "50Rs per person (MITS) / 100Rs per person (others)",
			teamSize: 1,
			category: "non-technical",
		},
	];

	// Find the event based on ID
	useEffect(() => {
		const foundEvent = eventlist.find((e) => e.id === eventId);
		if (foundEvent) {
			setEvent(foundEvent);
			setEventName(foundEvent.title);
			setTeamSize(foundEvent.teamSize);
		}
		setLoading(false);
	}, [eventId]);

	// Form submission handler - same as in Events component
	const onFormSubmit = (e) => {
		e.preventDefault();

		// Validate UTR number
		if (utr.trim() === "") {
			alert("Please enter UTR number");
			return;
		}

		// Validate mode of attendance or game selection if applicable
		let modeOfAttendance = null;
		if (
			(eventName === "Ideathon" || eventName === "Paper Presentation") &&
			college.trim() !== "MITS"
		) {
			const selectedMode = document.querySelector(
				'input[name="modeOfAttendance"]:checked'
			);
			if (!selectedMode) {
				alert("Please select a mode of attendance");
				return;
			}
			modeOfAttendance = selectedMode.value;
		} else if (eventName === "E-Sports") {
			const selectedGame = document.querySelector(
				'input[name="gameSelection"]:checked'
			);
			if (!selectedGame) {
				alert("Please select a game");
				return;
			}
			modeOfAttendance = selectedGame.value; // Assign selected game to modeOfAttendance
		}

		// Collect team member names
		const members = [];
		document.querySelectorAll(".member").forEach((member) => {
			members.push(member.value);
		});

		// Prepare form data
		const formData = {
			name,
			mobile,
			rollno,
			branch,
			members,
			college,
			eventId,
			teamSize,
			utr,
			modeOfAttendance, // Include mode of attendance or game selection
		};

		console.log("Form Data:", formData);

		// Store data in local storage
		const storedData =
			JSON.parse(localStorage.getItem("eventRegistrations")) || [];
		storedData.push(formData);
		localStorage.setItem("eventRegistrations", JSON.stringify(storedData));

		// Submit form data to backend
		fetch(`/register/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.text(); // Use text() instead of json() to handle empty responses
			})
			.then((data) => {
				try {
					const jsonData = JSON.parse(data); // Parse JSON if the response is not empty
					alert(jsonData.message);
				} catch (error) {
					console.warn("Response is not valid JSON:", data);
					alert(
						"Form submitted successfully, but no additional data was returned."
					);
				}

				// Reset form fields
				setName("");
				setMobile("");
				setRollno("");
				setBranch("");
				setTeamSize(1);
				setEventName("");
				setCollege("MITS");
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
		const maxTeamSize = eventName === "Ideathon" ? 3 : 10;
		if (value > maxTeamSize) {
			alert(`Team size cannot exceed ${maxTeamSize}`);
			setTeamSize(maxTeamSize);
		} else if (value < 1) {
			alert("Team size cannot be less than 1");
			setTeamSize(1);
		} else {
			setTeamSize(value);
		}
	};

	const handleesportchange = (event) => {
		setModeOfParticipation(event.target.value);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!event) {
		return (
			<div className="event-not-found">
				<h1>Event not found</h1>
				<Link to="/events">Back to all events</Link>
			</div>
		);
	}

	return (
		<>
			{window.innerWidth > 480 ? (
				<div className="header">
					<img src="/static/img/MITSLogo.png" alt="" />
					<h1>GMOCS 2k25 EVENT REGISTRATION</h1>
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			) : (
				<div className="header">
					<img src="/static/img/MITSLogo.png" alt="" />
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			)}
			<div className="events event-details-page">
				{/* <div className="event-details">
					<h2>{event.title}</h2>
					<p>{event.description}</p>
					<p className="price">{event.price}</p>
				</div> */}

				<div
					className="event-form"
					style={{
						top: "7vh",
						position: "relative",
						maxWidth: "600px",
						margin: "0 auto",
						maxHeight: "75vh",
					}}
				>
					<h1>Register - {eventName}</h1>
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
							list="branch-options"
							required
						/>
						<datalist id="branch-options">
							<option value="CSE"></option>
							<option value="CSE-AI"></option>
							<option value="CSE-DS"></option>
							<option value="CSE-CS"></option>
							<option value="CSE-IT"></option>
							<option value="CSE-AI&ML"></option>
							<option value="ECE"></option>
							<option value="EEE"></option>
							<option value="MECH"></option>
							<option value="CIVIL"></option>
							<option value="MCA"></option>
							<option value="MBA"></option>
							<option value="Others"></option>
						</datalist>
						{branch === "Others" && (
							<div className="input-field">
								<input
									type="text"
									name="customBranch"
									id="customBranch"
									placeholder="Enter your branch"
									onChange={(e) => setBranch(e.target.value)} // Update branch with custom input
									required
								/>
							</div>
						)}
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
							{...(eventName === "Ideathon"
								? { max: 3 }
								: { max: 10 })}
							value={teamSize}
							onChange={onTeamSizeChange}
						/>
					</div>
					{/* Add radio buttons for mode of attendance */}
					{(eventName === "Ideathon" ||
						eventName === "Paper Presentation") &&
						college.trim() !== "MITS" && (
							<div className="input-field">
								<span>Mode of Attendance:</span>
								<label>
									<input
										type="radio"
										name="modeOfAttendance"
										value="Online"
										required
									/>
									Online
								</label>
								<label>
									<input
										type="radio"
										name="modeOfAttendance"
										value="Offline"
										required
									/>
									Offline
								</label>
							</div>
						)}

					{/* Add radio buttons for E-Sports */}
					{eventName === "E-Sports" && (
						<div className="input-field">
							<span>Select Game:</span>
							<label>
								<input
									type="radio"
									name="gameSelection"
									value="BGMI"
									required
									checked={modeOfParticipation === "BGMI"}
									onChange={handleesportchange}
								/>
								BGMI
							</label>
							<label>
								<input
									type="radio"
									name="gameSelection"
									value="FreeFire"
									required
									checked={modeOfParticipation === "FreeFire"}
									onChange={handleesportchange}
								/>
								FreeFire
							</label>
							<label>
								<input
									type="radio"
									name="gameSelection"
									value="Ludo"
									required
									checked={modeOfParticipation === "Ludo"}
									onChange={handleesportchange}
								/>
								Ludo
							</label>
						</div>
					)}
					{teamSize > 1 &&
						teamSize < (eventName === "Ideathon" ? 4 : 11) &&
						Array.from({ length: teamSize - 1 }, (_, index) => (
							<div className="input-field" key={index}>
								<span>Member {index + 2}:</span>
								<input
									type="text"
									className="member"
									name={`member${index}`}
									id={`member${index}`}
									placeholder={`Enter name`}
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
							value={`upi://pay?pa=hvijapuram-3@okaxis&mc=0000&mode=02&purpose=00&am=${
								eventName !== "E-Sports"
									? teamSize *
									  (college.trim() === "MITS" ? 50 : 100)
									: modeOfParticipation === "Ludo"
									? college.trim() === "MITS"
										? 50
										: 100
									: college.trim() === "MITS"
									? 100
									: 200
							}`}
							size={128}
							style={{ margin: "0 auto" }}
							bgColor="transparent"
							fgColor="#5a80d1"
						/>
					</div>
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
					<Link to="/events">
						<button type="reset">Back to Events</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default EventDetails;
