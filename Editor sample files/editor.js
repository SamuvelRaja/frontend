let selectContainer = document.querySelector(".select-container");
let select = document.querySelector(".select");
let input = document.getElementById("input");
let options = document.querySelectorAll(".select-container .option");
const elements = document.querySelectorAll(".btns");
elements.forEach(elem =>{
    elem.addEventListener("click",()=>{
let command = elem.dataset ["element"];
document.execCommand(command,false,null);
    });

});

select.onclick = () => {
    selectContainer.classList.toggle("active");
};

options.forEach((e) => {
    e.addEventListener("click", () => {
        input.value = e.innerText;
        selectContainer.classList.remove("active");
        options.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});


var element = document.getElementById("editbox");
function txtbold() {
    element.classList.toggle("bold");
}
function txtitalics(){
    element.classList.toggle("italic");
}
function txtunderline(){
    element.classList.toggle("underline"); 
}
function txtstrike(){
    element.classList.toggle("strike");  
}
function txtcenter(){
    element.classList.toggle("center");
}
function txtright(){
    element.classList.toggle("right");
}
function txtleft(){
    element.classList.toggle("left");
}
function txtsub(){
    element.classList.add("sub");
}
function txtsup(){
    element.classList.toggle("sup");
}
