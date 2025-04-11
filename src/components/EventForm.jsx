import React from "react";
import { gsap } from "gsap";
import { QRCode } from "react-qr-code";

const EventForm = ({
    name,
    setName,
    mobile,
    setMobile,
    rollno,
    setRollno,
    branch,
    setBranch,
    teamSize,
    setTeamSize,
    eventName,
    college,
    setCollege,
    utr,
    setUtr,
    eventId,
    onFormSubmit,
    onTeamSizeChange,
}) => {
    const closeForm = () => {
        gsap.to(".event-form", {
            top: "110vh",
            duration: 0.5,
            ease: "power2.out",
        });
    };

    return (
        <form className="event-form">
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
                    value={eventName==="Ideathon"?3:teamSize}
                    onChange={eventName==="Ideathon"?null: onTeamSizeChange}
                    disabled={eventName==="Ideathon"}
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
                    value={college || "MITS"}
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
                        teamSize * ((college?.trim()||"MITS") === "MITS" ? 50 : 100)
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
                    teamSize * ((college?.trim()||"MITS") === "MITS" ? 50 : 100)
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
                Note: Please pay the registration fee before submitting the
                form.
            </p>
            <button type="submit" onClick={onFormSubmit}>
                Submit
            </button>
            <button type="button" onClick={closeForm}>
                Close
            </button>
        </form>
    );
};

export default EventForm;