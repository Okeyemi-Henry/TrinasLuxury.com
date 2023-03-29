window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.qoute');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.2;
    if( contentPosition < screenPosition){
        content.classList.add('active');
    }
    else{
        content.classList.remove('active');
    }
});




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click',()=>{
    nav.classList.add('active');
  })
}

if(close) {
  close.addEventListener('click',()=>{
    nav.classList.remove('active');
  })
};


  


var MainImg = document.getElementById ("MainImg");
  var smallimg = document.getElementsByClassName ("small-img");
  
  smallimg[0].onclick = function (){
    MainImg.src = smallimg[0].src;
  }
  
  smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
  }
  
  smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
  }
  
  smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
  }


