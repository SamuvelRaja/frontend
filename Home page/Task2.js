//Header sticky
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//  Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

//  When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

//Toggle menu list shown in mobile

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav_link');
hamburger.addEventListener('click', () => {
navLink.classList.toggle('hide_nav');
});

//open toogle

function openNav(){
//   var open=document.getElementsByClassName('nav_link')[0].children[0];
//   console.log(open)
document.getElementsByClassName("nav_link").style.visibility="visible";

}

//Close toggle 
function closeNav() {
  document.getElementsByClassName("nav_link").style.visibility="hidden";
}


