/* =====================================================
   COLLEGE EVENT PORTAL - JAVASCRIPT
===================================================== */


/* =====================================================
   ANNOUNCEMENTS
===================================================== */

const announcements = [

    "Registration is now open for all festival events!",

    "Participants must carry their valid college ID card.",

    "Event schedules may be updated by the festival committee.",

    "Last date for event registration will be announced soon.",

    "Participants are requested to report to the venue before the event."
];


let announcementIndex = 0;


const announcementText =
    document.getElementById("announcementText");


const announcementBtn =
    document.getElementById("announcementBtn");


announcementBtn.addEventListener("click", function () {

    announcementIndex++;

    if (announcementIndex >= announcements.length) {

        announcementIndex = 0;

    }

    announcementText.textContent =
        announcements[announcementIndex];

});



/* =====================================================
   EVENT CATEGORY FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");


const eventItems =
    document.querySelectorAll(".event-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory =
            button.getAttribute("data-category");


        /* Change active button */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

            btn.classList.remove("btn-primary");

            btn.classList.add("btn-outline-primary");

        });


        button.classList.add("active");

        button.classList.remove("btn-outline-primary");

        button.classList.add("btn-primary");


        /* Filter events */

        eventItems.forEach(function (event) {

            const eventCategory =
                event.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === eventCategory
            ) {

                event.style.display = "";

            } else {

                event.style.display = "none";

            }

        });

    });

});



/* =====================================================
   REGISTER BUTTONS FROM EVENT CARDS
===================================================== */

const registerButtons =
    document.querySelectorAll(".register-event");


const selectedEvent =
    document.getElementById("selectedEvent");


registerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const eventName =
            button.getAttribute("data-event");


        /* Select event automatically */

        selectedEvent.value = eventName;


        /* Scroll to registration */

        document
            .getElementById("registration")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});



/* =====================================================
   REGISTRATION FORM
===================================================== */

const registrationForm =
    document.getElementById("registrationForm");


const registrationSuccess =
    document.getElementById("registrationSuccess");


const registrationError =
    document.getElementById("registrationError");


registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Hide old messages */

    registrationSuccess.classList.add("d-none");

    registrationError.classList.add("d-none");


    /* Get form values */

    const name =
        document.getElementById("participantName")
            .value.trim();


    const email =
        document.getElementById("participantEmail")
            .value.trim();


    const mobile =
        document.getElementById("participantMobile")
            .value.trim();


    const department =
        document.getElementById("department")
            .value;


    const year =
        document.getElementById("studentYear")
            .value;


    const eventName =
        selectedEvent.value;


    /* =================================================
       VALIDATION
    ================================================= */

    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        department === "" ||
        year === "" ||
        eventName === ""
    ) {

        registrationError.textContent =
            "Please fill in all required fields.";

        registrationError.classList.remove("d-none");

        return;

    }


    /* Mobile validation */

    const mobilePattern =
        /^[0-9]{10}$/;


    if (!mobilePattern.test(mobile)) {

        registrationError.textContent =
            "Please enter a valid 10-digit mobile number.";

        registrationError.classList.remove("d-none");

        return;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        registrationError.textContent =
            "Please enter a valid email address.";

        registrationError.classList.remove("d-none");

        return;

    }


    /* =================================================
       DYNAMIC SUCCESS MESSAGE
    ================================================= */

    registrationSuccess.innerHTML =

        "<strong>Registration Successful!</strong><br>" +

        "Thank you, " + name + ". " +

        "You have successfully registered for " +

        "<strong>" + eventName + "</strong>.";


    registrationSuccess.classList.remove("d-none");


    /* Scroll to success message */

    registrationSuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    /* Clear form */

    registrationForm.reset();

});



/* =====================================================
   REGISTRATION RESET
===================================================== */

registrationForm.addEventListener("reset", function () {

    registrationSuccess.classList.add("d-none");

    registrationError.classList.add("d-none");

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


const contactSuccess =
    document.getElementById("contactSuccess");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("contactName")
            .value.trim();


    const email =
        document.getElementById("contactEmail")
            .value.trim();


    const subject =
        document.getElementById("contactSubject")
            .value.trim();


    const message =
        document.getElementById("contactMessage")
            .value.trim();


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        contactSuccess.className =
            "alert alert-danger";

        contactSuccess.textContent =
            "Please fill in all contact form fields.";

        contactSuccess.classList.remove("d-none");

        return;

    }


    /* Display dynamic success message */

    contactSuccess.className =
        "alert alert-success";


    contactSuccess.textContent =
        "Thank you, " + name +
        "! Your enquiry has been submitted successfully.";


    contactSuccess.classList.remove("d-none");


    /* Reset form */

    contactForm.reset();

});
