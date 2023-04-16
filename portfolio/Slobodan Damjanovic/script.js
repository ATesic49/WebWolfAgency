const pocetna= document.querySelector('#pocetna')
const nav = document.querySelector('nav')
const li = document.querySelectorAll('li a')
const oNamaONama = document.querySelectorAll('#onama .onama')

// NAV
document.querySelector('#options').addEventListener('click',()=>{
    document.querySelector('nav .text').classList.toggle('navZaTel')
})
// NAV


// POCETNA
document.addEventListener('scroll',()=>{
    const pocetnaRect = pocetna.getBoundingClientRect() 
    if(pocetnaRect.y == 0){
        nav.classList.add('backgroundImageNone')
    }else{
        nav.classList.remove('backgroundImageNone')
    }
})
document.addEventListener('DOMContentLoaded',()=>{
    const pocetnaRect = pocetna.getBoundingClientRect() 
        nav.classList.add('backgroundImageNone')
})

// POCETNA


// SWIPER
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop:'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// SWIPER


// SCROLL NAV

  document.addEventListener('scroll',()=>{
    if(isInViewport(document.querySelector('#pocetna'))){
        li.forEach(li=>{
            li.classList.remove('active')
        })
    }   


    if(isInViewport(document.querySelector('#onama'))){
        li.forEach(li=>{
            li.classList.remove('active')
        })
        li[0].classList.add('active')
    }

    if(isInViewport(document.querySelector('#usluge'))){
        li.forEach(li=>{
            li.classList.remove('active')
        })
        li[1].classList.add('active')
    }
    if(isInViewport(document.querySelector('#cenovnik'))){
        li.forEach(li=>{
            li.classList.remove('active')
        })
        li[2].classList.add('active')
    }
    if(isInViewport(document.querySelector('#kontakt'))){
        li.forEach(li=>{
            li.classList.remove('active')
        })
        li[3].classList.add('active')
    }
  })
// SCROLL NAV

// SCROLL O NAMA
document.addEventListener('scroll',()=>{
  oNamaONama.forEach(onama =>{
    if(isInViewport(onama)){
        oNamaONama.forEach(element=>{
            element.querySelector('.img').classList.remove('imgActive')
        })
        onama.querySelector('.img').classList.add('imgActive')
    }
  })

})
// SCROLL O NAMA




// IMG SRC
console.log(document.querySelector('#pocetna img').src)
addEventListener("resize", () => {
    if(window.innerWidth<=350){
        document.querySelector('#pocetna .swiper').style.aspectRatio= 753/580;
        document.querySelector('#pocetna img').src='./img/justicijaMala.jpg'
    }else if(window.innerWidth<=600){
        document.querySelector('#pocetna img').src='./img/justicijaCopy.jpg'
        document.querySelector('#pocetna .swiper').style.aspectRatio=  750/500;
        
    }else{
        document.querySelector('#pocetna img').src="./img/justicija.jpg"
        document.querySelector('#pocetna .swiper').style.aspectRatio=  709/374;

    }
});
addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth<=350){
        document.querySelector('#pocetna .swiper').style.aspectRatio= 753/580;
        document.querySelector('#pocetna img').src='./img/justicijaMala.jpg'
    }else if(window.innerWidth<=600){
        document.querySelector('#pocetna img').src='./img/justicijaCopy.jpg'
        document.querySelector('#pocetna .swiper').style.aspectRatio=  750/500;
        
    }else{
        document.querySelector('#pocetna img').src="./img/justicija.jpg"
        document.querySelector('#pocetna .swiper').style.aspectRatio=  709/374;

    }
});

// IMG SRC




















// FUNKCIJE

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
   
    return (
        rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) &&
        rect.bottom >=  (window.innerHeight/2 || document.documentElement.clientHeight/2) 
        
    );
  }
// FUNKCIJE


