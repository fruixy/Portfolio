const logo = document.getElementById("logo");
const navMenu = document.getElementById("navmenu");
    
if (logo && navMenu) {
    logo.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
} else {
    console.error("Logo or nav-menu not found");
}