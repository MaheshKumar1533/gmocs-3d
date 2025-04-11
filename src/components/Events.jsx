import Event from "./Event";
import EventForm from "./EventForm";
import { useState } from "react";
import "../index.css";
import { gsap } from "gsap";

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
			teamSize: 3,
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
				<EventForm
					name={name}
					setName={setName}
					mobile={mobile}
					setMobile={setMobile}
					rollno={rollno}
					setRollno={setRollno}
					branch={branch}
					setBranch={setBranch}
					teamSize={teamSize}
					setTeamSize={setTeamSize}
					eventName={eventName}
					college={college}
					setCollege={setCollege}
					utr={utr}
					setUtr={setUtr}
					eventId={eventId}
					onFormSubmit={onFormSubmit}
					onTeamSizeChange={onTeamSizeChange}
				/>
            </div>
        </>
    );
};

export default Events;