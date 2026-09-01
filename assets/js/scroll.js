function updateScrollTheme() {

    if (window.scrollY > 100) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateScrollTheme);
window.addEventListener("load", updateScrollTheme);