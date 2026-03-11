import Event from "./Event";
import "../index.css";

const Events = () => {
	const eventlist = [
		// Technical
		{
			id: 1,
			title: "Ideathon",
			description: "Pitch innovative ideas",
			category: "technical",
		},
		{
			id: 2,
			title: "Tech Quiz",
			description: "Test your technical knowledge",
			category: "technical",
		},
		{
			id: 3,
			title: "Workshop",
			description: "Hands-on learning experience",
			category: "technical",
		},
		{
			id: 4,
			title: "Vibe Coding",
			description: "Code to the vibe",
			category: "technical",
		},
		{
			id: 5,
			title: "Paper Presentation",
			description: "Present your research",
			category: "technical",
		},
		{
			id: 6,
			title: "Project Expo",
			description: "Showcase your projects",
			category: "technical",
		},
		// Non-Technical
		{
			id: 7,
			title: "E-Sports",
			description: "Compete in gaming tournaments",
			category: "non-technical",
		},
		{
			id: 8,
			title: "Bottle Storm",
			description: "Creative bottle challenge",
			category: "non-technical",
		},
		{
			id: 9,
			title: "Sudoku",
			description: "Master the number puzzle",
			category: "non-technical",
		},
		{
			id: 10,
			title: "Movie Mania",
			description: "Celebrate the world of cinema",
			category: "non-technical",
		},
		{
			id: 11,
			title: "Scribble",
			description: "Unleash your artistic skills",
			category: "non-technical",
		},
		{
			id: 12,
			title: "Synergy Challenge",
			description: "Collaborate and solve challenges",
			category: "non-technical",
		},
	];
	return (
		<>
			{window.innerWidth > 480 ? (
				<div className="header">
					<img src="/static/img/MITSLogo.png" alt="" />
					<h1>GMOCS 2k26 EVENTS</h1>
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			) : (
				<div className="header">
					<img src="/static/img/MITSLogo.png" alt="" />
					<img src="/static/img/GMOCSLogo.png" alt="" />
				</div>
			)}
			<div className="events">
				{eventlist.map((event, index) => (
					<Event
						key={event.id}
						name={event.title}
						desc={event.description}
						price={event.price}
						number={index + 1}
						length={eventlist.length}
						eventId={event.id}
						category={event.category}
						eventStatus={
							event.registration_status
								? event.registration_status
								: "open"
						}
					/>
				))}
				<h1 className="technical-heading">Technical</h1>
				<h1 className="non-technical-heading">Non-Technical</h1>
			</div>
		</>
	);
};

export default Events;
