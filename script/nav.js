const mobileMenu = document.querySelector(`.mobile_menu`);
const desktopMenu = document.querySelector(`.desktop_menu`);
const hamburgerMenu = document.querySelector(`.hamburger_menu`);

const lineOne = hamburgerMenu.querySelector(`.lineOne`);
const lineTwo = hamburgerMenu.querySelector(`.lineTwo`);
const lineThree = hamburgerMenu.querySelector(`.lineThree`);


const toggleMobileMenu = () =>{
    mobileMenu.classList.toggle(`activeMenu`);
    lineOne.classList.toggle(`rotateLineOne`);
    lineTwo.classList.toggle(`hiddenLineTwo`);
    lineThree.classList.toggle(`rotateLineThree`);
}


hamburgerMenu.addEventListener(`click`, toggleMobileMenu);
mobileMenu.addEventListener(`click`, toggleMobileMenu);


