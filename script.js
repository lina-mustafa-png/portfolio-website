const about = document.getElementById("aboutbtn");
const projects = document.getElementById("projectsbtn");
const skills = document.getElementById("skillsbtn");
const contact = document.getElementById("contactbtn");

about.addEventListener("click", function () {
    window.location.href = "about.html";
});

projects.addEventListener("click", function () {
    window.location.href = "projects.html";
});

skills.addEventListener("click", function () {
    window.location.href = "skills.html";
});

contact.addEventListener("click", function () {
    window.location.href = "contact.html";
});