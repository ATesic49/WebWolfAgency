const nav=document.querySelector('nav')
const wrapper =document.querySelector('.wrapper')
const moon= document.querySelector('.moon img')
const text =document.querySelectorAll('.wrapper .text h2')
let i =0
wrapper.addEventListener('wheel',(wheel)=>{
const deltaY=wheel.deltaY
const moon= document.querySelector('.moon img')
if(deltaY>0){
    i--
}else{
    i++
}
})
let m ='a'
wrapper.addEventListener('scroll',(e)=>{

if(wrapper.scrollTop >=wrapper.getBoundingClientRect().height*.3 && m!=='popunjeno'){
    console.log(wrapper.scrollTop>80)
    console.log(wrapper.scrollTop)
   text[0].animate([
    {opacity:0,transform:'translateY(-30%)'},
    {opacity:1,transform:'translateY(0)'}
   ],{
    duration:2000,
    fill:'forwards'
   })
   setTimeout(()=>{
    text[0].animate([
        {opacity:1,transform:'translateY(0)'},
        {opacity:0,transform:'translateY(-30%)'}
       ],{
        duration:1500,
        fill:'forwards'
       })
   },3000)
   setTimeout(()=>{
    text[1].animate([
        {opacity:0,transform:'translateY(-30%)'},
        {opacity:1,transform:'translateY(0)'}
       ],{
        duration:2000,
        fill:'forwards'
       })
   },4000)
   setTimeout(()=>{
    text[1].animate([
        {opacity:1,transform:'translateY(0)'},
        {opacity:0,transform:'translateY(-20%)'}
       ],{
        duration:1500,
        fill:'forwards'
       })
   },7000)
   setTimeout(()=>{
    text[2].animate([
        {opacity:0,transform:'translateY(-30%)'},
        {opacity:1,transform:'translateY(0)'}
       ],{
        duration:2000,
        fill:'forwards'
       })
   },9000)
   setTimeout(()=>{
    text[2].animate([
        {opacity:1,transform:'translateY(0)'},
        {opacity:1,transform:'translateY(-30%)'}
       ],{
        duration:1500,
        fill:'forwards'
       })
   },12000)
   setTimeout(()=>{
    document.querySelector('.wrapper .click a').style.display='flex'
    document.querySelector('.wrapper .click a').animate([
        {opacity:0},
        {opacity:1}

    ],{
        duration:500,
        fill:'forwards'
    })
   },12500)
  return m = 'popunjeno'
}
})

document.querySelector('.wrapper .click a').addEventListener('click',()=>{
    document.querySelector('.about').scrollIntoView()
})
window.addEventListener('scroll',()=>{
    if(wrapper.getBoundingClientRect().top * -1>=wrapper.getBoundingClientRect().height-20){
        nav.classList.add('pozadina-nava')
    }else{
        nav.classList.remove('pozadina-nava')

    }
})





// NAV
const li =nav.querySelectorAll('ul li')
li.forEach(element=>{
    element.addEventListener('click',()=>{
        li.forEach(e=>{
            e.classList.remove('underline')
        })
        element.classList.add('underline')
    })
})





li[0].addEventListener('click',()=>{
    document.querySelector('.about').scrollIntoView()
})
li[1].addEventListener('click',()=>{
    document.querySelector('.services').scrollIntoView()

})
li[2].addEventListener('click',()=>{
    document.querySelector('.constact').scrollIntoView()

})
document.querySelector('.wrapper .click a').addEventListener('click',()=>{
    document.querySelector('.about').scrollIntoView()
})
document.querySelector('nav img').addEventListener('click',()=>{
    document.querySelector('.wrapper').scrollIntoView()
    li.forEach(e=>{
        e.classList.remove('underline')
    })
})
// NAV

// IS IN WIEWPORT
document.addEventListener('scroll',()=>{
if(isInViewport(wrapper)){
        li.forEach(e=>{
        e.classList.remove('underline')
    })
}
if(isInViewport(document.querySelector('.about'))){
    li.forEach(e=>{
    e.classList.remove('underline')
})
li[0].classList.add('underline')
}
if(isInViewport(document.querySelector('.services'))){
    li.forEach(e=>{
    e.classList.remove('underline')
})
li[1].classList.add('underline')
}
if(isInViewport(document.querySelector('.contact'))){
    li.forEach(e=>{
    e.classList.remove('underline')
})
li[2].classList.add('underline')
}
})



// IS IN WIEWPORT




// FUNCTIONS    
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
   
    return (
        rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) &&
        rect.bottom >=  (window.innerHeight/2 || document.documentElement.clientHeight/2) 
        
    );
  }
// FUNCTIONS