const elements = document.querySelectorAll(".btns");
elements.forEach(elem =>{
    elem.addEventListener("click",()=>{
let command = elem.dataset ["element"];

 if(command === "createLink")
 {
    let url= prompt('Enter the link here');
    document.execCommand(command,false,url);
 }
 else if(command==="formatBlock"){
   let formattingvalue = elem.dataset["block"];
   document.execCommand(command,false,formattingvalue);
 }
 else {
    document.execCommand(command,false,null);
 }
    });
});


// document.getElementById('code').addEventListener('click',function(){
//   var blackBgDiv = document.createElement('div');
//   blackBgDiv.style.backgroundColor = 'black';
//   blackBgDiv.style.color = 'white';
//   blackBgDiv.contentEditable = true;
//   document.getElementById('editbox').appendChild(blackBgDiv);
//   //blackBgDiv.focus();

//   blackBgDiv.addEventListener('keydown', function(e) {
//     if (e.keyCode == 13) {
//       e.preventDefault();
//       var newLine = document.createElement('div');
//       newLine.innerHTML = '<br>';
//       document.getElementById('editbox').appendChild(newLine);
//       //blackBgDiv.blur();
//     }
//   });
// });
var editable = document.getElementById("editbox");
var button = document.getElementById("code");
function codeopen(){
  editable.classList.add("code1");
}
//editable.addEventListener("click", function (event) {
  //var blackBgDiv = document.createElement('div');
  
  // Checking if key pressed is ENTER or not
  // if the key pressed is ENTER
  // click listener on button is called
 
  // blackBgDiv.addEventListener('keydown', function(e) {
  //   if (e.keyCode == 13) {
  //     e.preventDefault();
  //     var newLine = document.createElement('div');
  //     newLine.innerHTML = '<br>';
  //     document.getElementById('editbox').appendChild(newLine);
  //     blackBgDiv.blur();
  //   }
  // });
//});

////headings and para(h1 to h6 ,p)////
function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}
function chooseColor(){
   var mycolor1 = document.getElementById("myColor").value;
   document.execCommand('foreColor', false, mycolor1);
 }
 function chooseBg(){
   var myBg1 = document.getElementById("myBg").value;
   document.execCommand('hiliteColor',false,myBg1)
 }
 ////using option values to set font size and font family////
 function changeFont(){
   var myFont = document.getElementById("input-font").value;
   document.execCommand('fontName', false, myFont);
 }
 function changeFont1(){
   var myFont1 = document.getElementById("input-font1").value;
   document.execCommand('fontSize', false, myFont1);
 }
 
////Insert source code////
const showCode = document.getElementById('show-code');
let active = false;
showCode.addEventListener('click', function () {
	showCode.dataset.active = !active;
	active = !active
	if(active) {
		editable.textContent = editable.innerHTML;
		editable.setAttribute('contenteditable', true);
	}
   else {
		editable.innerHTML = editable.textContent;
		editable.setAttribute('contenteditable', true);
	}
})

////insert image from the local storage////
const input = document.querySelector(".filechose")
input.addEventListener('change',function(e){
console.log(input.files)
//api to read the files
const reader = new FileReader()
//once reader finishes reading it will load
reader.onload = function(){

   const img = new Image()
   img.src = reader.result;
   document.getElementById("editbox").appendChild(img)
}
//to read the file as text
//reader.readAsText(input.files[0])
reader.readAsDataURL(input.files[0])   //it will read the data as base 64(for images)
},false)

//add active class to the buttons
var btns1 = document.querySelectorAll(".btn_active");
btns1.forEach( a=>{
  a.addEventListener("click",()=>{
  a.classList.toggle("active1");
   })
})

// var eee = document.querySelector('.editorbox');
// // document.getElementById('editbox').innerHTML = eee;
// // document.querySelector('.editorbox').value
// eee.innerHTML="enter here";
// console.log(eee)