const dragBtns = document.querySelectorAll(".dragBtn");
dragBtns.forEach((dragBtn) => {
const drag = (e) => {
    dragBtn.style.top = e.pageY + "px";
    dragBtn.style.left = e.pageX + "px";
};
dragBtn.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag);
});
window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", drag);
});
});
//automatic slide show and tab navigation
// let slideIndex6 = 0;
// showSlides6();

// function showSlides6() {
//   let i;
//   let slides_1 = document.getElementsByClassName("mySlides_1");
//   let dots_1 = document.getElementsByClassName("dot_1");
//   let dots5 = document.getElementsByClassName("dot_5");
//   for (i = 0; i < slides_1.length; i++) {
//     slides_1[i].style.display = "none";  
//   }
//   slideIndex6++;
//   if (slideIndex6 > slides_1.length) {slideIndex6 = 1}    
//   for (i = 0; i < dots_1.length; i++) {
//     dots_1[i].className = dots_1[i].className.replace(" active6", "");
//     dots5[i].className = dots5[i].className.replace(" active1", "");
//   }
//   slides_1[slideIndex6-1].style.display = "block";  
//   dots_1[slideIndex6-1].className += " active6";
//   dots5[slideIndex6-1].className += " active1";

//   setTimeout(showSlides6, 3000); // Change image every 3 seconds
// }
//First tab navigation,When user click the button it display the image
function openNav(fea) {
var i;
var x = document.getElementsByClassName("img_show");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
document.getElementById(fea).style.display = "block";  
}
 // Add active class to the current button (change the btn color to highlight it)
var head = document.getElementById("myBtn");
var btns = head.getElementsByClassName("link");
for (var y = 0; y < btns.length; i++) {
btns[y].addEventListener("click", function() {
var current = document.getElementsByClassName("active1");
current[0].className = current[0].className.replace(" active1", "");
this.className += " active1";
});
}
    //slide show images(powerful vector)
            let slideIndex = 0;
            showSlides();
    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let dots5 = document.getElementsByClassName("dot_5");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
        dots5[i].className = dots5[i].className.replace(" active5", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active2";
    // dots5[slideIndex-1].className += " active5";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
    }

            //slide show images1(solo design)
            let slidesIndex = 0;
            showSlides1();
            function showSlides1() {
            let i;
            let slides1 = document.getElementsByClassName("mySlides1");
            let dots1 = document.getElementsByClassName("dot1");
            for (i = 0; i < slides1.length; i++) {
            slides1[i].style.display = "none";  
            }
            slidesIndex++;
            if (slidesIndex > slides1.length) {slidesIndex = 1}    
            for (i = 0; i < dots1.length; i++) {
            dots1[i].className = dots1[i].className.replace(" active2", "");
            }
            slides1[slidesIndex-1].style.display = "block";  
            dots1[slidesIndex-1].className += " active2";
            setTimeout(showSlides1, 2000); // Change image every 2 seconds
            }

    //slide show images2(Customizable toolbars)
    let slides2Index = 0;
    showSlides2();
    function showSlides2() {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");
    for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
    }
    slides2Index++;
    if (slides2Index > slides2.length) {slides2Index = 1}    
    for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
    }
    slides2[slides2Index-1].style.display = "block";  
    dots2[slides2Index-1].className += " active2";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
    }
    //slide show images3(Store, sync and share documents)
    let slides3Index = 0;
    showSlides3();
    function showSlides3() {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");
    let dots3 = document.getElementsByClassName("dot3");
    for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
    }
    slides3Index++;
    if (slides3Index > slides3.length) {slides3Index = 1}    
    for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active2", "");
    }
    slides3[slides3Index-1].style.display = "block";  
    dots3[slides3Index-1].className += " active2";
    setTimeout(showSlides3, 2000); // Change image every 2 seconds
    }

  //Second tab navigation
function openNav(fea) {
    var i;
    var x = document.getElementsByClassName("img_show");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(fea).style.display = "block";  
    }
    var head = document.getElementById("myBtn");
    var btns = head.getElementsByClassName("link");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
    });
    }

    //Second automatic slide show and tab navigation
    let slideIndex7 = 0;
    showSlides7();
function showSlides7() {
  let i;
  let slides_2 = document.getElementsByClassName("mySlides_2");
  let dots_2 = document.getElementsByClassName("dot_2");
  let dots6 = document.getElementsByClassName("dot_6");
  for (i = 0; i < slides_2.length; i++) {
    slides_2[i].style.display = "none";  
  }
  slideIndex7++;
  if (slideIndex7 > slides_2.length) {slideIndex7 = 1}    
  for (i = 0; i < dots_2.length; i++) {
    dots_2[i].className = dots_2[i].className.replace(" active6", "");
    dots6[i].className = dots6[i].className.replace("active1", "");
  }
  slides_2[slideIndex7-1].style.display = "block";  
  dots_2[slideIndex7-1].className += " active6";
  dots6[slideIndex7-1].className += " active1";

  setTimeout(showSlides7, 3000); // Change image every 3 seconds
}
//Second tab navigation,When user click the button it show the display
function openNav(fea1) {
var i;
var x = document.getElementsByClassName("img_show1");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
document.getElementById(fea1).style.display = "block";  
}
//When button is in active button color changes
var head1 = document.getElementById("myBtn1");
var btns1 = head.getElementsByClassName("link1");
for (var i = 0; i < btns1.length; i++) {
btns1[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active1");
current[0].className = current[0].className.replace(" active1", "");
this.className += " active1";
});
}
    