/*const openMenu = document.getElementById("burger");

openMenu.addEventListener("click", () => {
    (".navList").classList.toggle("showMenu");
})*/

function openMenu() {
    const navMenu = document.getElementById("navList");
    navMenu.classList.toggle("showMenu");
}

function closeMenu() {
    document.getElementById("navList");
    openMenu().click();
}

const rad = document.getElementById("rad");
rad.addEventListener("click", () => {
    rad.classList.toggle("active");
})