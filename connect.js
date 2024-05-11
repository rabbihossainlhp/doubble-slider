const signUp_btn = document.querySelector(".sign-up-btn");
const signIn_btn = document.querySelector(".sign-in-btn");
const signUP = document.querySelector(".sign-up");
const signIN = document.querySelector(".sign-in");
const signInCont = document.querySelector(".sign-up-content");
const signUpCont = document.querySelector(".sign-in-content");

signUp_btn.onclick = () =>{
    signUpCont.style.display = "none";
    signInCont.style.display = "flex";
    signUP.style.display = "flex";
    signIN.style.display = "none";
}

signIn_btn.onclick = () =>{
    signUpCont.style.display = "flex";
    signInCont.style.display = "none";
    signUP.style.display = "none";
    signIN.style.display = "flex";
}