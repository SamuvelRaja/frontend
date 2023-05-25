//first pro seo's manual click slider
let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    //let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
  }
  //second
  let slideIndex1 = 1;
  showSlides1(slideIndex1);
  
  function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
  }
  
  function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
  }
  function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1");
    let dots1 = document.getElementsByClassName("demo1");
    //let captionText = document.getElementById("caption");
    if (n > slides1.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides1.length}
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1-1].style.display = "block";
   dots1[slideIndex1-1].className += " active";   
  }
  //When user click the button it displays the particular section
 function showHide(fea){
    var i;
    var x = document.getElementsByClassName("show_class");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(fea).style.display = "block";  
  }
   // Add active class to the current button (change the btn highlight it)
   var header = document.getElementById("myBtn");
   var btns = header.getElementsByClassName("link");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active_list");
     current[0].className = current[0].className.replace(" active_list", "");
     this.className += " active_list";
     });
   }
// function showAndHide(parameter){
//     if(parameter==1){
//         document.getElementById('first').style.display="block";
//         document.getElementById('second').style.display="none";
        
//     }
//     else{
//         document.getElementById('second').style.display="block";
//         document.getElementById('first').style.display="none";
        
//     }
// }
// $(window).scroll(function() {
//   var windowH = $(window).height(),
//     scrollY = $(window).scrollTop();
//   $('div').each(function() {
//     var elPosition = $(this).offset().top;
//     if (scrollY > elPosition - windowH) {
//       $(this).addClass("animate_btw");
//     }
//   });
// });

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);


  