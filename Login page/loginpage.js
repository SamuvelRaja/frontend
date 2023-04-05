const normalEmo = document.querySelector(".normal");
const closedEmo = document.querySelector(".closed");
const openEmo = document.querySelector(".open");
const clickEmo = document.querySelector(".click");
const fnameInput = document.querySelector("#fname");
const lnameInput = document.querySelector("#lname");
const passInput = document.querySelector("#pass");
const loginsubmit = document.querySelector(".login");

window.addEventListener("load", ()=> {
normalEmo.classList.add("active")
})

fnameInput.addEventListener("click",()=>{
    openEmo.classList.add("active")
    closedEmo.classList.remove("active") 
    normalEmo.classList.remove("active")
    clickEmo.classList.remove("active")
})

lnameInput.addEventListener("click",()=>{
    openEmo.classList.add("active")
    normalEmo.classList.remove("active")  
    clickEmo.classList.remove("active")
    closedEmo.classList.remove("active")
})

passInput.addEventListener("click",()=>{
    closedEmo.classList.add("active")
    openEmo.classList.remove("active")
    normalEmo.classList.remove("active") 
    clickEmo.classList.remove("active")
})

function buttonHover(){
    clickEmo.classList.add("active")
    openEmo.classList.remove("active")
    normalEmo.classList.remove("active")
    closedEmo.classList.remove("active") 
}