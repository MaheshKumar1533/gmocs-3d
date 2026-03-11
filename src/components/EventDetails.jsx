import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { redirectToGoogleForm } from "../config/googleForms";
import "../index.css";

const EventDetails = () => {
	const { id } = useParams(); // Get the event ID from URL
	const eventId = parseInt(id);

	// States for form data
	const [eventName, setEventName] = useState("");
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);

	// Event data - same as in Events component
	const eventlist = [
		// Technical
		{ id: 1, title: "Ideathon", category: "technical" },
		{ id: 2, title: "Tech Quiz", category: "technical" },
		{ id: 3, title: "Workshop", category: "technical" },
		{ id: 4, title: "Vibe Coding", category: "technical" },
		{ id: 5, title: "Paper Presentation", category: "technical" },
		{ id: 6, title: "Project Expo", category: "technical" },
		// Non-Technical
		{ id: 7, title: "E-Sports", category: "non-technical" },
		{ id: 8, title: "Bottle Storm", category: "non-technical" },
		{ id: 9, title: "Sudoku", category: "non-technical" },
		{ id: 10, title: "Movie Mania", category: "non-technical" },
		{ id: 11, title: "Scribble", category: "non-technical" },
		{ id: 12, title: "Synergy Challenge", category: "non-technical" },
	];

	// Find the event based on ID
	useEffect(() => {
		const foundEvent = eventlist.find((e) => e.id === eventId);
		if (foundEvent) {
			setEvent(foundEvent);
			setEventName(foundEvent.title);
		}
		setLoading(false);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const onRegisterClick = () => {
		redirectToGoogleForm(eventId);
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
					<h1>GMOCS 2k26 EVENT REGISTRATION</h1>
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			) : (
				<div className="header">
					<img src="/static/img/MITSLogo.png" alt="" />
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			)}
			<div className="events event-details-page">
				<div
					style={{
						position: "relative",
						top: "7vh",
						maxWidth: "600px",
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					<h1>{eventName}</h1>
					<button onClick={onRegisterClick}>
						Register Now
					</button>
					<Link to="/events">
						<button>Back to Events</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default EventDetails;
