function openMenu() {
    const navMenu = document.getElementById("navList");
    navMenu.classList.toggle("showMenu");
}

function closeMenu() {
    document.getElementById("navList");
    openMenu().click();
}

fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });