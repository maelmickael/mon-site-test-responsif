const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
        if (targetDetail.open) {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        }
    });
});