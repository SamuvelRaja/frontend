
 //When user click the button it displays the particular section
 function openNav(fea){
    var i;
    var x = document.getElementsByClassName("featureslink");
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
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", " ");
    this.className += " active1";
    });
  }
  //header position fixed
  let site = document.getElementById('site-header-inner');
  document.addEventListener('scroll', function() {

  // Get the scroll position
  let scrollPos = window.pageYOffset;
  
  if ( scrollPos > 100 ) {
    site.style.backgroundColor = "white";
    site.style.boxShadow="10px 9px 48px rgb(4 32 52 / 10%)";
  } else {
    site.style.backgroundColor = "";
    site.style.boxShadow="none";
  }
});
//enable toggle in mobile devices
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav_link');
hamburger.addEventListener('click', () => {
navLink.classList.toggle('hide');
document.getElementById("close").style.display="block";
});
//Close toggle 
function closeNav() {
  //document.getElementById("nav_mobile").style.visibility="hidden";
  document.getElementById("close").style.display="none";
  navLink.classList.toggle('hide');
}   
//Accordion js
var acc = document.getElementsByClassName("accordion");
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