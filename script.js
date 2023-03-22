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
    document.querySelector('.lmaolmaolmao').scrollIntoView()
})
window.addEventListener('scroll',()=>{
    if(wrapper.getBoundingClientRect().top * -1>=wrapper.getBoundingClientRect().height){
        nav.classList.add('pozadina-nava')
    }else{
        nav.classList.remove('pozadina-nava')

    }
})
// FUNCTIONS    
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
   
    return (
        rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) &&
        rect.bottom >=  (window.innerHeight/2 || document.documentElement.clientHeight/2) 
        
    );
  }
// FUNCTIONS