function createMenuItem(imageSource, title, desc) {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const menuItemImageEl = document.createElement("img");
    menuItemImageEl.classList.add("menu-item-image");
    menuItemImageEl.src = imageSource;
    menuItemImageEl.alt = "Food picture";

    const menuItemTitle = document.createElement("h3")
    menuItemTitle.classList.add("menu-item-title");
    menuItemTitle.innerText = title;

    const menuItemDesc = document.createElement("p");
    menuItemDesc.classList.add("menu-item-desc");
    menuItemDesc.innerText = desc;

    menuItemDiv.appendChild(menuItemImageEl);
    menuItemDiv.appendChild(menuItemTitle);
    menuItemDiv.appendChild(menuItemDesc);
}