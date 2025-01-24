import chefPNG from "./images/chef.png"


function loadHomepage() {
    const contentDiv = document.querySelector("div#content");
    const homeTabDiv = document.createElement("div");
    homeTabDiv.classList.add("tab", "home");
    const headerEl = document.createElement("h4");
    headerEl.classList.add("homepage-heading");
    const header1 = headerEl.cloneNode(true);
    header1.innerText = "Best pizza in your country";
    const header2 = headerEl.cloneNode(true);
    header2.innerText = "Made with passion since 1908";
    const header3 = headerEl.cloneNode(true);
    header3.innerText = "Order online or visit us!";

    const chefImgEl = document.createElement("img");
    chefImgEl.src = chefPNG;
    chefImgEl.alt = "An image of the chef";
    chefImgEl.classList.add("chef");

    homeTabDiv.appendChild(header1);
    homeTabDiv.appendChild(header2);
    homeTabDiv.appendChild(chefImgEl);
    homeTabDiv.appendChild(header3);

    contentDiv.appendChild(homeTabDiv);
}

export {
    loadHomepage
}