//show and hide password 
function showPassword(){
    var x = document.getElementById("passInput");
    var eyeicon = document.getElementById("togglePassword");
    var eyechange = document.getElementsByClassName("eyes");
    if(x.type==="password"){
        x.type="text";
        eyeicon.classList.add("fa-eye");
        eyeicon.classList.remove("fa-eye-slash");
        glassshow.classList.add("glassanimate1");
        glassshow.classList.remove("glassanimate");
    
       
    }
    else{
        x.type="password";
        eyeicon.classList.add("fa-eye-slash");
        eyeicon.classList.remove("fa-eye"); 
    }
}

//get the email input length
document.querySelector("#email").addEventListener("input",function(){
    var length = this.value.length;
    var degree = length*3;
   
    var eyemove1 = document.querySelector(".eyeleft");
    var eyemove2 = document.querySelector(".eyeright");
    
    eyemove1.style.transform="rotate(-"+degree+"deg)";
    eyemove2.style.transform="rotate(-"+degree+"deg)";    
})

var glassshow = document.querySelector(".glass_img");
function passValue(){
    glassshow.classList.add("glassanimate");
}