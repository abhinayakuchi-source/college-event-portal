/* =====================================================
   HACKSPHERE 2026
   JAVASCRIPT
===================================================== */


/* =====================================================
   ANNOUNCEMENTS
===================================================== */

const announcements = [
    "Registration is now open for HackSphere 2026!",
    "HackSphere Hackathon registrations are filling fast!",
    "Project Expo participants can register now.",
    "Get ready for an exciting day of technology and culture!",
    "All registered participants should report before their event."
];

let announcementIndex = 0;

const announcementText =
    document.getElementById("announcementText");

const announcementBtn =
    document.getElementById("announcementBtn");


function updateAnnouncement() {

    announcementIndex++;

    if (announcementIndex >= announcements.length) {
        announcementIndex = 0;
    }

    announcementText.style.opacity = "0";

    setTimeout(() => {

        announcementText.textContent =
            announcements[announcementIndex];

        announcementText.style.opacity = "1";

    }, 200);

}


if (announcementBtn) {

    announcementBtn.addEventListener(
        "click",
        updateAnnouncement
    );

}


/* Automatically rotate */

setInterval(updateAnnouncement, 5000);


/* =====================================================
   EVENT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const eventItems =
    document.querySelectorAll(".event-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active */

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        eventItems.forEach(item => {

            const category =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                }, 20);

            } else {

                item.style.opacity = "0";
                item.style.transform = "translateY(15px)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 200);

            }

        });

    });

});


/* =====================================================
   SELECT EVENT
===================================================== */

function selectEvent(eventName) {

    const eventSelect =
        document.getElementById("selectedEvent");

    eventSelect.value = eventName;

    document
        .getElementById("registration")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   REGISTRATION FORM
===================================================== */

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        /* Values */

        const name =
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
            document.getElementById("selectedEvent").value;


        /* Error elements */

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


        /* Clear errors */

        nameError.textContent = "";
        emailError.textContent = "";
        mobileError.textContent = "";
        departmentError.textContent = "";
        yearError.textContent = "";
        eventError.textContent = "";


        let isValid = true;


        /* Name validation */

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        }


        /* Email validation */

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


        /* Mobile validation */

        const mobilePattern =
            /^[0-9]{10}$/;


        if (mobile === "") {

            mobileError.textContent =
                "Please enter your mobile number.";

            isValid = false;

        } else if (!mobilePattern.test(mobile)) {

            mobileError.textContent =
                "Enter a valid 10-digit number.";

            isValid = false;

        }


        /* Department */

        if (department === "") {

            departmentError.textContent =
                "Please select your department.";

            isValid = false;

        }


        /* Year */

        if (year === "") {

            yearError.textContent =
                "Please select your year.";

            isValid = false;

        }


        /* Event */

        if (selectedEvent === "") {

            eventError.textContent =
                "Please select an event.";

            isValid = false;

        }


        /* If valid */

        if (isValid) {

            const successMessage =
                document.getElementById("successMessage");


            successMessage.style.display = "flex";


            /* Display registration information */

            console.log("Registration Details:");

            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Mobile:", mobile);
            console.log("Department:", department);
            console.log("Year:", year);
            console.log("Event:", selectedEvent);


            /* Reset form */

            registrationForm.reset();


            /* Scroll to success message */

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            /* Hide after 6 seconds */

            setTimeout(() => {

                successMessage.style.display =
                    "none";

            }, 6000);

        }

    }
);


/* =====================================================
   NAVBAR ACTIVE LINK
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   MOBILE NAVBAR CLOSE
===================================================== */

const navLinksMobile =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

const navbarCollapse =
    document.getElementById("navbarNav");


navLinksMobile.forEach(link => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth < 992 &&
            navbarCollapse.classList.contains("show")
        ) {

            new bootstrap.Collapse(
                navbarCollapse
            ).hide();

        }

    });

});


/* =====================================================
   INPUT INTERACTION
===================================================== */

const inputs =
    document.querySelectorAll(
        ".input-wrapper input, .input-wrapper select"
    );


inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform =
            "translateY(-1px)";

    });


    input.addEventListener("blur", () => {

        input.parentElement.style.transform =
            "translateY(0)";

    });

});


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
