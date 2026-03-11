// Google Form URLs for each event
export const googleFormUrls = {
    // Technical
    1: "https://forms.gle/oQ5nwePPBUZn4aCB9", // Ideathon
    2: "https://forms.gle/7Buv6dRdcvV4ormg7", // Tech Quiz
    3: "https://forms.gle/o431j9tJsjviVNRZ7",  // Workshop
    4: "https://forms.gle/bE8s4huNQt2dsQGJ9", // Vibe Coding
    5: "https://forms.gle/drAMLgCotS6aYsCp6", // Paper Presentation
    6: "https://forms.gle/3E9o4EawZTmTHaYe8", // Project Expo
    // Non-Technical
    7: "https://forms.gle/6DTa2JofT69fdknX8",  // E-Sports
    8: "https://forms.gle/4tYcjUnWuAsLanhKA",  // Bottle Storm
    9: "https://forms.gle/6Ujnpp7EmFvfx6g17",  // Sudoku
    10: "https://forms.gle/EdV1XydVCsXUoNYH6", // Movie Mania
    11: "https://forms.gle/C4CniG4BDUB4Vuuw6", // Scribble
    12: "https://forms.gle/eXTKdYKMjt3YkWyUA", // Synergy Challenge
    13: "https://forms.gle/9WiFShFF9iVjiRUg7"
};

// Function to get Google Form URL for an event
export const getGoogleFormUrl = (eventId) => {
    return googleFormUrls[eventId] || null;
};

// Function to redirect to Google Form
export const redirectToGoogleForm = (eventId) => {
    const formUrl = getGoogleFormUrl(eventId);
    if (formUrl && formUrl !== "https://forms.gle/") {
        window.open(formUrl, "_blank");
    } else {
        alert(
            "Google Form URL not configured for this event. Please contact the organizers."
        );
    }
};
