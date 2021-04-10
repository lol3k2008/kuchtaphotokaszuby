const date = document.querySelector(`.dateYear`);



    //   ---__DATA_IN_FOOTER__---
const now = new Date().getFullYear();
date.textContent = now;


    //    ---__ARROW_UP__---

const arrowUp = document.querySelector(`.arrowUP`);

window.addEventListener(`scroll`, () =>{
    

if(scrollY > 800){
    arrowUp.style.transform = `translate(-70px,0)`;
}
else{
    arrowUp.style.transform = `translate(0,0)`;
    
}
})

// --------------------ANIMATION------------
const headerSection = Array.from(document.querySelectorAll(`h1,h2,h3,h4`));

const isInViewport = function (el) {
    const bounding = el.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  
};
const searchHeaderSection = () =>{

    headerSection.forEach(el => {
  if (isInViewport(el)) {
el.classList.add(`animation__animation`)

}
    });

  if(headerSection[headerSection.length-1].classList.contains(`animation__animation`)){
    window.removeEventListener(`scroll`, searchHeaderSection) 
  }

};

window.addEventListener(`scroll`, searchHeaderSection)



// ----------------_#PORTFOLIO__ALBUMS_BACKGROUND__--------------

const aPortraits = document.querySelector(`li.portrety`);
const aLandscape = document.querySelector(`li.krajobrazy`);
const aStudio = document.querySelector(`li.studio`);

const portraits = [`img/Portraits/Sesja portretowa 1.jpg`,`img/Portraits/Sesja portretowa 2.jpg`,`img/Portraits/Sesja portretowa 3.jpg`,`img/Portraits/Sesja portretowa 4.jpg`];

const landscape = [`img/Landscape/Fotografia krajobrazowa 1.jpg`,`img/Landscape/Fotografia krajobrazowa 2.jpg`,`img/Landscape/Fotografia krajobrazowa 3.jpg`,`img/Landscape/Fotografia krajobrazowa 4.jpg`,];

const studio = [`img/Studio/Kompozycja w studio 1.jpg`,`img/Studio/Kompozycja w studio 2.jpg`,`img/Studio/Kompozycja w studio 3.jpg`,`img/Studio/Kompozycja w studio 4.jpg`];

const los = Math.floor(Math.random()*portraits.length)

aPortraits.style.backgroundImage = `url('${portraits[los]}')`;
aLandscape.style.backgroundImage = `url('${landscape[los]}')`;
aStudio.style.backgroundImage = `url('${studio[los]}')`;