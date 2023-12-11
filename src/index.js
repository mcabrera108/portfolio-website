/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigation")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

