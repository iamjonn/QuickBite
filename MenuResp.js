
"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menuR");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");


const showPopupButton = document.getElementById("show-popup");
const popupR = document.getElementById("popupR");
const shortenedLinksList = document.getElementById("shortened-links-list");



function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
  //  body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

//popup
showPopupButton.addEventListener("click", () => {
    popupR.style.display = "block";
  });
  
  popupR.addEventListener("click", (event) => {
    if (event.target === popupR) {
      popupR.style.display = "none";
    }
  });
