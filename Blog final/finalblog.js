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
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = selectedText_p.textContent +" "+x;
  }
  function showdiv() {
    var y = document.getElementById("comment-details");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }