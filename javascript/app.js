
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        
        //Toggle Nav
        nav.classList.toggle('nav-active');
    });
    nav.addEventListener('click', () => {
        
        //Toggle Nav
        nav.classList.toggle('nav-active');
    });
};

navSlide();
