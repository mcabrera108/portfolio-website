/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigation")[0];
const homeButton = document.querySelector("#home-btn");
const aboutButton = document.querySelector("#about-btn");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView();
})
aboutButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView();
})
