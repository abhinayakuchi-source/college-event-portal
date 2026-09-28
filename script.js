// Dynamic announcements
document.getElementById("announcements").innerHTML = "<p>🔥 Latest: Registrations open until Oct 9!</p>";

// Registration form validation
document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let dept = document.getElementById("dept").value;
  let event = document.getElementById("eventSelect").value;

  if (!name || !email || !mobile || !dept || !event) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  document.getElementById("successMsg").innerText = 
    `🎉 Registration successful for ${event}, ${name}!`;
});

// Quick register button
function registerEvent(eventName) {
  document.getElementById("eventSelect").value = eventName;
  window.location.hash = "#registration";
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let cname = document.getElementById("cname").value;
  let cemail = document.getElementById("cemail").value;
  let cmsg = document.getElementById("cmsg").value;

  if (!cname || !cemail || !cmsg) {
    alert("⚠️ Please fill all contact fields!");
    return;
  }

  document.getElementById("contactMsg").innerText = 
    `✅ Thank you ${cname}, we will reply soon!`;
});
