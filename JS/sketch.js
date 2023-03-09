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

//tab
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
    //slide show images
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
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active2";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }