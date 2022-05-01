"use strict";

const menuBtn = document.getElementById("menu-btn");
const NavBar = document.getElementById("left-navigation");

menuBtn.onclick = function () {
    if (menuBtn.checked) {
        NavBar.style.left = "0%";
    } else {
        NavBar.style.left = "-100%";
    }
};

// context menu
const contextWrap = document.querySelector("#context-wrap");
const contextOptions = document.querySelector("#context-menu");

// context options
contextWrap.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    contextOptions.style.display = "block";
    if (window.innerWidth > e.pageX + 420) {
        contextOptions.style.left = e.pageX + "px";
        contextOptions.style.top = e.pageY + "px";
    } else {
        contextOptions.style.left = window.innerWidth - 420 + "px";
        contextOptions.style.top = e.pageY + "px";
    }
});
contextWrap.addEventListener("click", () => {
    contextOptions.style.display = "none";
});
