//show and hide password 
function showPassword(){
    var x = document.getElementById("passInput");
    var eyeicon = document.getElementById("togglePassword");
    if(x.type==="password"){
        x.type="text";
        eyeicon.classList.add("fa-eye");
        eyeicon.classList.remove("fa-eye-slash");
        glassshow.classList.add("glassanimate1");
    }
    else{
        x.type="password";
        eyeicon.classList.add("fa-eye-slash");
        eyeicon.classList.remove("fa-eye"); 
    }
}
//username
//let usernameInput = document.querySelector('.username');
var pupilMove = document.querySelector('.pupil');
var pupilMove1 = document.querySelector('.pupil1');
function movefName(){
    pupilMove.style.transform="rotate(90deg)";
    pupilMove1.style.transform="rotate(90deg)";
}
function movelName(){
    pupilMove.style.transform="rotate(180deg)";
    pupilMove1.style.transform="rotate(180deg)";
}
var glassshow = document.querySelector(".glass_img");
function passValue(){
    glassshow.classList.add("glassanimate");
}




