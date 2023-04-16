const li = document.querySelectorAll('#navigacija nav ul li')
  li.forEach(element=>{
      element.addEventListener('click',()=>{
          li.forEach(li=>{
              li.classList.remove('selektovani')
          })
          element.classList.add('selektovani')
      })
  })

document.addEventListener('scroll',()=>{
})



var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});





function isInViewport(element) {
  const rect = element.getBoundingClientRect();
 
  return (
      rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) &&
      rect.bottom >=  (window.innerHeight/2 || document.documentElement.clientHeight/2) 
      
  );
}
const pocetna = document.querySelector('#pocetna')
const oNama = document.querySelector('#o-nama')
const usluge = document.querySelector('#usluge')
const cenovnik = document.querySelector('#cenovnik')
const zadnji = document.querySelector('#zadnji')
  
document.addEventListener('scroll',()=>{
  uslugeRect=usluge.getBoundingClientRect()
  if(li[0].classList[0]!=='selektovani'){
  if(isInViewport(pocetna)){
    li.forEach(li=>{
      li.classList.remove('selektovani')
    })
    li[0].classList.add('selektovani')}
  }
  if(isInViewport(oNama)){
    if(li[1].classList[0]!=='selektovani'){
    li.forEach(li=>{
      li.classList.remove('selektovani')
    })
    li[1].classList.add('selektovani')}
  }
  if(isInViewport(usluge)){
    if(li[2].classList[0]!=='selektovani'){
    console.log('usluge')
    li.forEach(li=>{
      li.classList.remove('selektovani')
    })
    li[2].classList.add('selektovani')}
  }
  if(isInViewport(cenovnik)){
    if(li[3].classList[0]!=='selektovani'){
    li.forEach(li=>{
      li.classList.remove('selektovani')
    })
    li[3].classList.add('selektovani')}
  }
  if(isInViewport(zadnji)){
    if(li[4].classList[0]!=='selektovani'){
    li.forEach(li=>{
      li.classList.remove('selektovani')
    })
    li[4].classList.add('selektovani')}
  }
})

const tackice = document.querySelector('#padajuciMeni')
tackice.addEventListener('click',()=>{
  document.querySelector('#navbar-tel').classList.toggle('flex')
})

const gluposti = document.querySelectorAll('#navbar-tel li')
gluposti.forEach(glupost=>{
  glupost.addEventListener('click',()=>{
    document.querySelector('#navbar-tel').classList.toggle('flex')
  })
})



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
acc.forEach(acc=>{
  acc.addEventListener('click',()=>{
    acc.classList.toggle('active')
  })
})
