var text_h4 = document.getElementById("article-text");
var selectedText_p = document.getElementById("selected-text");

text_h4.addEventListener('mouseup', () => {
  let selection = window.getSelection();
  selectedText_p.textContent = selection.toString();
});

// var openreply = document.getElementById("reply_form");
// openreply.addEventListener("click",()=>{
// document.getElementById("reply_box").style.display = "block";

// });
function openReply(){
    document.getElementById("reply_box").style.display = "block";
    document.getElementById("submit_show").style.display = "block";
}
// function openaddReply(){
//     document.getElementById("reply_box1").style.display = "block";
//     document.getElementById("submit_show1").style.display = "block";
// }
// var myForm = document.querySelector(".myForm");
// myForm.addEventListener('submit',function(event){
//     event.preventDefault();
// });

// function create_tr(table_id) {
//     let table_body = document.getElementById(table_id),
//         first_tr   = table_body.firstElementChild
//         tr_clone   = first_tr.cloneNode(true);

//     table_body.append(tr_clone);

//     clean_first_tr(table_body.firstElementChild);
// }

// function clean_first_tr(firstTr) {
//     let children = firstTr.children;
    
//     children = Array.isArray(children) ? children : Object.values(children);
//     children.forEach(x=>{
//         if(x !== firstTr.lastElementChild)
//         {
//             x.firstElementChild.value = '';
//         }
//     });
// }




