import Event from "./Event";
import "../index.css";

const Events = () => {
	const eventlist = [
		{
			title: "Web Development",
			description: "Learn and build web applications",
			price: "100Rs",
		},
		{
			title: "UI/UX",
			description: "Design user-friendly interfaces",
			price: "100Rs",
		},
		{
			title: "Problem Solving",
			description: "Sharpen your problem-solving skills",
			price: "100Rs",
		},
		{
			title: "Debugging",
			description: "Master the art of debugging code",
			price: "100Rs",
		},
		{
			title: "Technical Quiz",
			description: "Test your technical knowledge",
			price: "100Rs",
		},
		{
			title: "Ideathon",
			description: "Pitch innovative ideas",
			price: "100Rs",
		},
		{
			title: "Project Expo",
			description: "Showcase your projects",
			price: "100Rs",
		},
		{
			title: "Inkspiration",
			description: "Express creativity through writing",
			price: "100Rs",
		},
		{
			title: "PhotoMania",
			description: "Capture moments with photography",
			price: "100Rs",
		},
		{
			title: "ShoDUOwn",
			description: "Showcase your unique talents",
			price: "100Rs",
		},
		{
			title: "Synergy Challenge",
			description: "Collaborate and solve challenges",
			price: "100Rs",
		},
		{
			title: "Scribble",
			description: "Unleash your artistic skills",
			price: "100Rs",
		},
		{
			title: "E-Sports",
			description: "Compete in gaming tournaments",
			price: "100Rs",
		},
	];
	return (
		<div className="events">
			{eventlist.map((event, index) => (
				<Event
					key={index}
					name={event.title}
					desc={event.description}
					price={event.price}
					number={index + 1}
                    length={eventlist.length}
				/>
			))}
			<div className="event-form">
				<input type="text" name="name" id="name" />
				<input type="email" name="email" id="email" />
				<input type="text" name="rollno" id="rollno" />
				select
			</div>
		</div>
	);
};

export default Events;
