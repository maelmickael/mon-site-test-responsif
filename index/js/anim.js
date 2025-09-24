window.addEventListener("load", () => {
    const anim = document.getElementById("right");
    anim.style.transform = "translateX(0)";
    anim.style.opacity = "1";
    anim.style.transition = "800ms"
})

window.addEventListener("load", () => {
    const anim_left = document.getElementById("left");
    anim_left.style.transform = "translateX(0)";
    anim_left.style.opacity = "1";
    anim_left.style.transition = "500ms"
})

// Observer : surveille si un élément apparaît à l'écran
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anim_inner_section"); // on ajoute la classe "show"
        }
    });
});

// Sélectionner tous les éléments cachés et les observer
document.querySelectorAll(".hidden").forEach(element => {
    observer.observe(element);
});