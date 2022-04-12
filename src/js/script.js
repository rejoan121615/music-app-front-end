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
