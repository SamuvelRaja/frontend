//drag and drop the section
(function() {
var y,x,el,dy = 0,dx = 0,ok = false,z = 1000,d = document;

function down(e) {
    var tx,ty;
    if (!e) {e = window.event;}
    el = (typeof e.target != "undefined")?e.target:e.srcElement;
    if (el.tagName != "HTML"|"BODY" && el.lang != "dragThis") {
        el = (typeof el.parentNode != "undefined")?el.parentNode:el.parentElement;
    }
    if (el.lang == "dragThis") {
        el.style.opacity = '0.8';
        var a =  el.getBoundingClientRect();
        var bx = a.left,
        by = a.top;
        var posType = window.getComputedStyle(el,null).getPropertyValue("position");
        if (posType == 'relative') {
            tx = 0;
            ty = 0;
        }
        if (posType == 'absolute') {
            tx = bx + window.pageXOffset;
            ty = by + window.pageYOffset;
        }
        if (posType == 'fixed') {
            tx = bx;
            ty = by;
        }
        e.preventDefault();
        ok = true;
        el.style.zIndex = z++;
        dx = parseInt(el.style.left + tx, 10);
        dy = parseInt(el.style.top + ty, 10);
        x = e.clientX;
        y = e.clientY;
    }
}

function move(e) {
    if (!e) {e = window.event;}
    if (ok) {
        el.style.left = dx + e.clientX - x + "px";
        el.style.top  = dy + e.clientY - y + "px";
    }
}
function up() {
    ok = false;
    el.style.opacity = '1';
}

d.addEventListener('mousedown', down, false);
d.addEventListener('mousemove', move, false);
d.addEventListener('mouseup', up, false);
})();

//First section
var slideIndex = 1;
var myTimer;
window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 3000);
})
// NEXT AND PREVIOUS CONTROL
    function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
      showSlides(slideIndex -= 1);
    } else {
     showSlides(slideIndex += 1); 
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
    if (n === -1){
      myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
    } else {
      myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
    }
  }
  //Controls the current slide and resets interval if needed(for span dot)(first span dots)
function currentSlide2(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
    showSlides(slideIndex = n);
  }
  //Controls the current slide and resets interval if needed(for buttons)(websites,prototype btns....)
  function currentSlide1(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
    showSlides(slideIndex = n);
  }
  //First automatic and manual slideshow of images and also active state enabled(websites,prototype btns....)
function showSlides(n){
    var i;
    var slides1 = document.getElementsByClassName("mySlides_1");
    var dots1 = document.getElementsByClassName("dot_1");
    var btntext = document.getElementsByClassName("btnclr");
    if (n > slides1.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides1.length}
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    for (i = 0; i < btntext.length; i++) {
      btntext[i].className = btntext[i].className.replace(" active1", "");
    }
    slides1[slideIndex-1].style.display = "block";
    dots1[slideIndex-1].className += " active";
    btntext[slideIndex-1].className += " active1";
  }
  //Pause and resume arrow functions
  pause = () => {
    clearInterval(myTimer);
  }
  resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
  }
  
  //Second section view test buttons
   var slideIndex2 = 1;
   var myTimer2;
window.addEventListener("load",function() {
    showSlides2(slideIndex2);
    myTimer2 = setInterval(function(){plusSlides2(1)}, 3000);
})
// NEXT AND PREVIOUS CONTROL
function plusSlides2(a){
    clearInterval(myTimer2);
    if (a < 0){
      showSlides2(slideIndex2 -= 1);
    } else {
     showSlides2(slideIndex2 += 1); 
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
    if (a === -1){
      myTimer2 = setInterval(function(){plusSlides2(a + 2)}, 3000);
    } else {
      myTimer2 = setInterval(function(){plusSlides2(a + 1)}, 3000);
    }
  }
   //Controls the current slide and resets interval if needed(for buttons)(view,test btns....)
   function currentSlide3(a){
    clearInterval(myTimer2);
    myTimer2 = setInterval(function(){plusSlides2(a + 1)}, 3000);
    showSlides2(slideIndex2 = a);
  }
   //Controls the current slide and resets interval if needed(for span dot)(second span dots)
    function currentSlide4(a){
    clearInterval(myTimer2);
    myTimer2 = setInterval(function(){plusSlides2(a + 1)}, 3000);
    showSlides2(slideIndex2 = a);
  }
  //Second automatic and manual slideshow of images and also active state enabled(view,test btns......)
function showSlides2(a){
    var j;
    var slides2 = document.getElementsByClassName("mySlides_2");
    var dots2 = document.getElementsByClassName("dot_2");
    var btntext1 = document.getElementsByClassName("btnclr1");
    if (a > slides2.length) {slideIndex2 = 1}
    if (a < 1) {slideIndex2 = slides2.length}
    for (j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
    }
    for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace(" active", "");
    }
    for (j = 0; j < btntext1.length; j++) {
      btntext1[j].className = btntext1[j].className.replace(" active1", "");
    }
    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className += " active";
    btntext1[slideIndex2-1].className += " active1";
  }
  //Pause and resume arrow functions
  pause = () => {
    clearInterval(myTimer2);
  }
  resume = () =>{
    clearInterval(myTimer2);
    myTimer2 = setInterval(function(){plusSlides2(slideIndex2)}, 3000);
  }
  //Third section slide show images(powerful vector)
  var slideIndex3 = 1;
  var myTimer3;
  window.addEventListener("load",function() {
      showSlides3(slideIndex3);
      myTimer3 = setInterval(function(){plusSlides3(1)}, 3000);
  })
  // NEXT AND PREVIOUS CONTROL
  function plusSlides3(b){
    clearInterval(myTimer3);
    if (b < 0){
      showSlides3(slideIndex3 -= 1);
    } else {
     showSlides3(slideIndex3 += 1); 
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
    if (b === -1){
      myTimer3 = setInterval(function(){plusSlides3(b + 2)}, 3000);
    } else {
      myTimer3 = setInterval(function(){plusSlides3(b + 1)}, 3000);
    }
  }
  //Controls the current slide and resets interval if needed(for poweful vector text.....)
  function currentSlide5(b){
    clearInterval(myTimer3);
    myTimer3 = setInterval(function(){plusSlides3(b + 1)}, 3000);
    showSlides3(slideIndex3 = b);
  }
  //Third automatic and manual slideshow of images and also active state enabled(for poweful vector text.....)
  function showSlides3(b){
    var k;
    var slides3 = document.getElementsByClassName("mySlides");
    var dots3 = document.getElementsByClassName("dot");
   
    if (b > slides3.length) {slideIndex3 = 1}
    if (b < 1) {slideIndex3 = slides3.length}
    for (k= 0; k < slides3.length; k++) {
        slides3[k].style.display = "none";
    }
    for (k = 0; k < dots3.length; k++) {
        dots3[k].className = dots3[k].className.replace(" active2", "");
    }
    slides3[slideIndex3-1].style.display = "block";
    dots3[slideIndex3-1].className += " active2";
  }
  //Pause and resume arrow functions
  pause = () => {
    clearInterval(myTimer3);
  }
  resume = () =>{
    clearInterval(myTimer3);
    myTimer3 = setInterval(function(){plusSlides3(slideIndex3)}, 3000);
  }
  //Fourth section slide show images(Solo design)
  var slideIndex4 = 1;
  var myTimer4;
  window.addEventListener("load",function() {
      showSlides4(slideIndex4);
      myTimer4 = setInterval(function(){plusSlides4(1)}, 3000);
  })
  // NEXT AND PREVIOUS CONTROL
  function plusSlides4(b){
    clearInterval(myTimer4);
    if (b < 0){
      showSlides4(slideIndex4 -= 1);
    } else {
     showSlides4(slideIndex4 += 1); 
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
    if (b === -1){
      myTimer4 = setInterval(function(){plusSlides4(b + 2)}, 3000);
    } else {
      myTimer4 = setInterval(function(){plusSlides4(b + 1)}, 3000);
    }
  }
  //Controls the current slide and resets interval if needed(for solo design text.....)
  function currentSlide6(b){
    clearInterval(myTimer4);
    myTimer4 = setInterval(function(){plusSlides4(b + 1)}, 3000);
    showSlides4(slideIndex4 = b);
  }
  //Fourth automatic and manual slideshow of images and also active state enabled(for solo design.....)
  function showSlides4(b){
    var k;
    var slides4 = document.getElementsByClassName("mySlides1");
    var dots4 = document.getElementsByClassName("dot1");
   
    if (b > slides4.length) {slideIndex4 = 1}
    if (b < 1) {slideIndex4 = slides4.length}
    for (k= 0; k < slides4.length; k++) {
        slides4[k].style.display = "none";
    }
    for (k = 0; k < dots4.length; k++) {
        dots4[k].className = dots4[k].className.replace(" active2", "");
    }
    slides4[slideIndex4-1].style.display = "block";
    dots4[slideIndex4-1].className += " active2";
  }
   //Pause and resume arrow functions
   pause = () => {
    clearInterval(myTimer4);
  }
  resume = () =>{
    clearInterval(myTimer4);
    myTimer4 = setInterval(function(){plusSlides4(slideIndex4)}, 3000);
  }
  //Fifth section slide show images(Customizable toolbars)
  var slideIndex5 = 1;
  var myTimer5;
  window.addEventListener("load",function() {
      showSlides5(slideIndex5);
      myTimer5 = setInterval(function(){plusSlides5(1)}, 3000);
  })
   // NEXT AND PREVIOUS CONTROL
   function plusSlides5(b){
    clearInterval(myTimer5);
    if (b < 0){
      showSlides5(slideIndex5 -= 1);
    } else {
     showSlides5(slideIndex5 += 1); 
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
    if (b === -1){
        myTimer5 = setInterval(function(){plusSlides5(b + 2)}, 3000);
      } else {
        myTimer5 = setInterval(function(){plusSlides5(b + 1)}, 3000);
      }
    }
    //Controls the current slide and resets interval if needed(for solo design text.....)
  function currentSlide7(b){
    clearInterval(myTimer5);
    myTimer5 = setInterval(function(){plusSlides5(b + 1)}, 3000);
    showSlides5(slideIndex5 = b);
  }
    //Fifth automatic and manual slideshow of images and also active state enabled(for Customizable toolbars.....)
  function showSlides5(b){
    var k;
    var slides5 = document.getElementsByClassName("mySlides2");
    var dots5 = document.getElementsByClassName("dot2");
   
    if (b > slides5.length) {slideIndex5 = 1}
    if (b < 1) {slideIndex5 = slides5.length}
    for (k= 0; k < slides5.length; k++) {
        slides5[k].style.display = "none";
    }
    for (k = 0; k < dots5.length; k++) {
        dots5[k].className = dots5[k].className.replace(" active2", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active2";
  }
  //Pause and resume arrow functions
  pause = () => {
    clearInterval(myTimer5);
  }
  resume = () =>{
    clearInterval(myTimer5);
    myTimer5 = setInterval(function(){plusSlides5(slideIndex5)}, 3000);
  }
   //Sixth section slide show images(Store, sync and share documents)
   var slideIndex6 = 1;
   var myTimer6;
   window.addEventListener("load",function() {
       showSlides6(slideIndex6);
       myTimer6 = setInterval(function(){plusSlides6(1)}, 3000);
   })
   // NEXT AND PREVIOUS CONTROL
   function plusSlides6(b){
    clearInterval(myTimer6);
    if (b < 0){
      showSlides6(slideIndex6 -= 1);
    } else {
     showSlides6(slideIndex6 += 1); 
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
    if (b === -1){
        myTimer6 = setInterval(function(){plusSlides6(b + 2)}, 3000);
      } else {
        myTimer6 = setInterval(function(){plusSlides6(b + 1)}, 3000);
      }
    }
     //Controls the current slide and resets interval if needed(Store, sync and share documents.)
  function currentSlide8(b){
    clearInterval(myTimer6);
    myTimer6 = setInterval(function(){plusSlides6(b + 1)}, 3000);
    showSlides6(slideIndex6 = b);
  }
  //Fifth automatic and manual slideshow of images and also active state enabled(Store, sync and share documents.....)
  function showSlides6(b){
    var k;
    var slides6 = document.getElementsByClassName("mySlides3");
    var dots6 = document.getElementsByClassName("dot3");
   
    if (b > slides6.length) {slideIndex6 = 1}
    if (b < 1) {slideIndex6 = slides6.length}
    for (k= 0; k < slides6.length; k++) {
        slides6[k].style.display = "none";
    }
    for (k = 0; k < dots6.length; k++) {
        dots6[k].className = dots6[k].className.replace(" active2", "");
    }
    slides6[slideIndex6-1].style.display = "block";
    dots6[slideIndex6-1].className += " active2";
  }
  //Pause and resume arrow functions
  pause = () => {
    clearInterval(myTimer6);
  }
  resume = () =>{
    clearInterval(myTimer6);
    myTimer6 = setInterval(function(){plusSlides6(slideIndex6)}, 3000);
  }