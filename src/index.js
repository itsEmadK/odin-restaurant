import { loadHomepage } from "./loadHomepage.js";
import { loadMenuPage } from "./loadMenuPage.js";
import { loadContactPage } from "./loadContactPage.js";
import "./styles.css";


const contentDiv = document.querySelector("div#content");
const homeButton = document.querySelector("button.home");
const menuButton = document.querySelector("button.menu");
const contactButton = document.querySelector("button.contact");

loadHomepage();
homeButton.classList.add("selected");


homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadHomepage();
    homeButton.classList.add("selected");
    menuButton.classList.remove("selected");
    contactButton.classList.remove("selected");
});


menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadMenuPage();
    homeButton.classList.remove("selected");
    menuButton.classList.add("selected");
    contactButton.classList.remove("selected");
});


contactButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadContactPage();
    homeButton.classList.remove("selected");
    menuButton.classList.remove("selected");
    contactButton.classList.add("selected");
});


