const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.getElementById("nav-menu");


burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active"); 
    burgerMenu.classList.toggle("active"); 
});

const experiences = document.querySelectorAll('.experience');

experiences.forEach((experience) => {
    
    experience.addEventListener('click', () => {
    
        const description = experience.querySelector('.description');
        if (description) {
            description.classList.toggle('active'); 
        }
    });
});