//click the button to get the input values(values display in the para)
const writetext = document.getElementById("textarea_show");
const btn = document.getElementById("submit_show");
const comment = document.getElementById("comment1");
var selectedText;

var myForm = document.getElementById("myForm")
myForm.addEventListener('submit',function(event){
    event.preventDefault();
});
    const selectabletextarea = document.querySelectorAll(".selectable-text");
    const reply = document.getElementById("reply-icon");
    selectabletextarea.forEach(elem =>{
        elem.addEventListener("mouseup",selectabletextareaMouseUp);
    });
    function selectabletextareaMouseUp(event){
            selectedText = window.getSelection().toString().trim();
           console.log("god",selectedText);     
        if(selectedText.length){
            console.log(selectedText.length);
            const x = event.pageX;
            const y = event.pageY;
            reply.style.left= x+"px";
            reply.style.top= y+"px";
            reply.style.display = "block";
        }
    }
    document.addEventListener("mousedown",replyMouseDown);
    function replyMouseDown(event){
        reply.addEventListener("click",function(){
            document.getElementById("textarea_show").style.display = "block";
            document.getElementById("submit_show").style.display = "block";
        });
    }    
      function myFun(){
        comment.innerHTML = writetext.value;
        //document.getElementById("select").innerText = selectedText;
        console.log(selectedText);
    }
    btn.addEventListener('click',myFun);
    