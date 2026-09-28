/* ================= ANNOUNCEMENTS ================= */

const announcements = [
    "Registrations are now open for HackSphere 2026!",
    "HackSphere Hackathon will be conducted on 15 October 2026.",
    "Project Expo registrations are open for all departments.",
    "Get ready for technology, culture and sports!",
    "Students can register for their favourite events."
];

let announcementIndex = 0;

function nextAnnouncement() {

    announcementIndex++;

    if (announcementIndex >= announcements.length) {
        announcementIndex = 0;
    }

    document.getElementById("announcementText").textContent =
        announcements[announcementIndex];
}


/* ================= EVENT FILTER ================= */

function filterEvents(category, button) {

    const events = document.querySelectorAll(".event-item");

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    events.forEach(eventItem => {

        if (category === "all") {

            eventItem.style.display = "block";

        } else if (eventItem.classList.contains(category)) {

            eventItem.style.display = "block";

        } else {

            eventItem.style.display = "none";

        }

    });
}


/* ================= EVENT REGISTRATION BUTTON ================= */

function selectEvent(eventName) {

    const eventSelect =
        document.getElementById("selectedEvent");

    eventSelect.value = eventName;

    document.getElementById("registration")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ================= REGISTRATION FORM ================= */

document.getElementById("registrationForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("fullName")
                .value.trim();

        const email =
            document.getElementById("email")
                .value.trim();

        const mobile =
            document.getElementById("mobile")
                .value.trim();

        const department =
            document.getElementById("department")
                .value;

        const year =
            document.getElementById("year")
                .value;

        const selectedEvent =
            document.getElementById("selectedEvent")
                .value;

        const message =
            document.getElementById("registrationMessage");


        /* CHECK EMPTY FIELDS */

        if (
            name === "" ||
            email === "" ||
            mobile === "" ||
            department === "" ||
            year === "" ||
            selectedEvent === ""
        ) {

            message.innerHTML = `
                <div class="alert alert-danger mt-4">
                    <i class="bi bi-exclamation-circle"></i>
                    Please fill in all the required fields.
                </div>
            `;

            return;
        }


        /* CHECK MOBILE */

        if (!/^[0-9]{10}$/.test(mobile)) {

            message.innerHTML = `
                <div class="alert alert-danger mt-4">
                    Please enter a valid 10-digit mobile number.
                </div>
            `;

            return;
        }


        /* SUCCESS */

        message.innerHTML = `
            <div class="alert alert-success mt-4">
                <i class="bi bi-check-circle-fill"></i>

                Registration successful for
                <strong>${selectedEvent}</strong>!

            </div>
        `;

        this.reset();

    });
