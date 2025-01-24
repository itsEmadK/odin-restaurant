import restLocationImg from "./images/restaurant-location.png";

function loadContactPage() {
    const contentDiv = document.querySelector("div#content");

    const contactTabDiv = document.createElement("div");
    contactTabDiv.classList.add("tab", "contact");

    const phoneNumberPara = document.createElement("p");
    phoneNumberPara.classList.add("contact-info", "phone-number");
    phoneNumberPara.innerText = "📞 123-456-789";

    const addressPara = document.createElement("p");
    addressPara.classList.add("contact-info", "address");
    addressPara.innerText = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

    const locationImgEl = document.createElement("img");
    locationImgEl.classList.add("contact-info", "location");
    locationImgEl.src = restLocationImg;
    locationImgEl.alt = "Restaurant location";

    contactTabDiv.appendChild(phoneNumberPara);
    contactTabDiv.appendChild(addressPara);
    contactTabDiv.appendChild(locationImgEl);

    contentDiv.appendChild(contactTabDiv);
}


export { loadContactPage }