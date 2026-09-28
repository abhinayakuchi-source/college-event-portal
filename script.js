/* ================= ANNOUNCEMENTS ================= */

const announcements = [
    "Registrations are now open for HackSphere 2026!",
    "HackSphere Hackathon registrations are available now.",
    "Project Expo participants can register through the portal.",
    "Get ready for an exciting day of technology, culture and sports!"
];

let announcementIndex = 0;

const announcementText =
    document.getElementById("announcementText");

const rotateAnnouncement =
    document.getElementById("rotateAnnouncement");

if (rotateAnnouncement) {

    rotateAnnouncement.addEventListener("click", function () {

        announcementIndex++;

        if (announcementIndex >= announcements.length) {
            announcementIndex = 0;
        }

        announcementText.textContent =
            announcements[announcementIndex];

    });

}


/* ================= EVENT FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const eventItems =
    document.querySelectorAll(".event-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const selectedCategory =
            this.getAttribute("data-filter");

        eventItems.forEach(function(eventItem) {

            const eventCategory =
                eventItem.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === eventCategory
            ) {

                eventItem.style.display = "block";

            } else {

                eventItem.style.display = "none";

            }

        });

    });

});


/* ================= SELECT EVENT ================= */

function selectEvent(eventName) {

    const eventSelect =
        document.getElementById("event");

    if (eventSelect) {

        eventSelect.value = eventName;

    }

    const registrationSection =
        document.getElementById("registration");

    if (registrationSection) {

        registrationSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= REGISTRATION VALIDATION ================= */

const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            let isValid = true;


            /* GET VALUES */

            const fullName =
                document.getElementById("fullName").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const mobile =
                document.getElementById("mobile").value.trim();

            const department =
                document.getElementById("department").value;

            const year =
                document.getElementById("year").value;

            const selectedEvent =
                document.getElementById("event").value;


            /* ERROR ELEMENTS */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const mobileError =
                document.getElementById("mobileError");

            const departmentError =
                document.getElementById("departmentError");

            const yearError =
                document.getElementById("yearError");

            const eventError =
                document.getElementById("eventError");


            /* CLEAR ERRORS */

            nameError.textContent = "";
            emailError.textContent = "";
            mobileError.textContent = "";
            departmentError.textContent = "";
            yearError.textContent = "";
            eventError.textContent = "";


            /* NAME */

            if (fullName === "") {

                nameError.textContent =
                    "Please enter your full name.";

                isValid = false;

            }


            /* EMAIL */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;

            } else if (!emailPattern.test(email)) {

                emailError.textContent =
                    "Please enter a valid email.";

                isValid = false;

            }


            /* MOBILE */

            const mobilePattern =
                /^[0-9]{10}$/;

            if (mobile === "") {

                mobileError.textContent =
                    "Please enter your mobile number.";

                isValid = false;

            } else if (!mobilePattern.test(mobile)) {

                mobileError.textContent =
                    "Mobile number must contain 10 digits.";

                isValid = false;

            }


            /* DEPARTMENT */

            if (department === "") {

                departmentError.textContent =
                    "Please select your department.";

                isValid = false;

            }


            /* YEAR */

            if (year === "") {

                yearError.textContent =
                    "Please select your year.";

                isValid = false;

            }


            /* EVENT */

            if (selectedEvent === "") {

                eventError.textContent =
                    "Please select an event.";

                isValid = false;

            }


            /* SUCCESS */

            if (isValid) {

                const successMessage =
                    document.getElementById("successMessage");

                successMessage.style.display = "block";

                successMessage.innerHTML = `

                    <i class="bi bi-check-circle-fill"></i>

                    <h4>
                        Registration Successful!
                    </h4>

                    <p>
                        Thank you,
                        <strong>${fullName}</strong>.
                        You have successfully registered for
                        <strong>${selectedEvent}</strong>.
                    </p>

                `;

                registrationForm.reset();

                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }
    );

}


/* ================= NAVBAR ACTIVE LINK ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ================= MOBILE NAVBAR ================= */

const navLinksAll =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.getElementById("mainNavbar");

navLinksAll.forEach(function(link) {

    link.addEventListener("click", function() {

        if (
            window.innerWidth < 992 &&
            navbarCollapse.classList.contains("show")
        ) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );

            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }

        }

    });

});


/* ================= INPUT EFFECT ================= */

const formInputs =
    document.querySelectorAll(
        ".registration-card input, .registration-card select"
    );

formInputs.forEach(function(input) {

    input.addEventListener("focus", function() {

        this.style.borderColor = "#a855f7";

    });

    input.addEventListener("blur", function() {

        this.style.borderColor = "#292b4a";

    });

});
