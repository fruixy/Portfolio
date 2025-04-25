/* apparition au défilement */
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;
        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); 


/* apparition au chargement */
window.addEventListener("load", () => {
    const skills = document.querySelectorAll(".skill-appear");
    skills.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.18}s`;
    });
});
