let commentContainer = document.getElementById("comment-container");
//let commentreply = document.getElementById("commentreply");

function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment-details");

  div.innerHTML += `
    <input type="text" placeholder="Add your reply" class="input" />
    <button class="btn submit">Submit</button>`;
  return div;
}
let addeddiv = document.getElementById("addeddiv");
function createInputBox1(){
  let div = document.createElement("div");
  div.innerHTML +=`<div class="all-comment" id="addeddiv">
        <div class="card1">
            <span class="text1">New Comment</span>
            <p id="selected-text1"></p>
            <span id="reply1" class="reply1">Add Reply</span>
            
        </div>
    </div>`;
    return div;
}
addeddiv.addEventListener("click", function (e){
  let addcommentsClicked = e.target.classList.contains("newcomment");
  if (addcommentsClicked) {
    closestCard.appendChild(createInputBox1());
  }

});

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `
    <div class="card">
      <span class="text">${text}</span>
    </div>`;
  return div;
}

commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");

//if reply is clicked add input box
  if (replyClicked) {
    closestCard.appendChild(createInputBox());
  }

  if (submitClicked) {
    const commentDetails = e.target.closest(".comment-details");
  
    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value));
      commentDetails.remove();
    }
  }
});
//newly added
commentreply.addEventListener("click",function(e){
  let replyClicked = e.target.classList.contains("reply");
  if (replyClicked) {
    closestCard.appendChild(createInputBox());
  }

});

var text_h4 = document.getElementById("article-text");
var selectedText_p = document.getElementById("selected-text");
  text_h4.addEventListener('mouseup', () => {
    let selection = window.getSelection();
    selectedText_p.textContent = selection.toString();
    console.log(selectedText_p.textContent,"hdjsahf");
  });
function addcomment() {
  var x = document.getElementById("addeddiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// var text_h3 = document.getElementsByClassName("article-text");
// var selectedText_para = document.getElementById("selected-text1");

// text_h3.addEventListener('mouseup', () => {
//   let selection = window.getSelection();
//   selectedText_para.textContent = selection.toString();
// });

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = selectedText_p.textContent +" "+x;
}