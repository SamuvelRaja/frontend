const elements = document.querySelectorAll(".btns");
//var mycolor = document.getElementById("myColor").value;
elements.forEach(elem =>{
    elem.addEventListener("click",()=>{
let command = elem.dataset ["element"];

 if(command == "createLink"||command=="insertImage")
 {
    let url= prompt('Enter the link here:', '')
    document.execCommand(command,false,url);
 }
 
 else {
   
    document.execCommand(command,false,null);
 }
    });
});

var editable = document.getElementById("editbox");
function indleft(){
   editable.classList.toggle("indleft");
}
function indright(){
   editable.classList.toggle("indright");
}
var popup=document.getElementById("popup");
function openPopup(){
   popup.classList.add("open-popup");
}
function closePopup(){
   popup.classList.remove("open-popup");
}
document.getElementById("replace").onclick = function() {
   var bad = document.getElementById("typo").value;
   var good = document.getElementById("correctWord").value;
   var content = document.getElementById("editbox").value;
   var b = new RegExp(bad, "g"); // replace globally
   document.getElementById("editbox").value = content.replace(b, good);
 }

function chooseColor(){
   var mycolor1 = document.getElementById("myColor").value;
   document.execCommand('foreColor', false, mycolor1);
 }
 function chooseBg(){
   var myBg1 = document.getElementById("myBg").value;
   document.execCommand('hiliteColor',false,myBg1)
 }
 //using option values to set font size and font family
 function changeFont(){
   var myFont = document.getElementById("input-font").value;
   document.execCommand('fontName', false, myFont);
 }
 const search = document.getElementById("search");
 search.addEventListener('input', (event) => {
   const searchText = event.target.value;
   const regex = new RegExp(searchText, 'gi');

   let text = editable.innerHTML;
  //text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');

  const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
  editable.innerHTML = newText;
});