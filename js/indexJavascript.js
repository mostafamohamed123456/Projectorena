let loginBtn = document.querySelector(".sign-up-section #login-btn");
loginBtn.addEventListener("click",loginFunction);
let signUpBtn = document.querySelector(".login-section #sign-up-btn");
signUpBtn.addEventListener("click",signUpFunction);
let signUpSection = document.querySelector(".sign-up-section");
let logInSection = document.querySelector(".login-section");


function loginFunction(){
    signUpSection.classList.add("hide-sign-up-section");
    logInSection.classList.add("show-login-section");

    let welcomeMessage = "welcome back our friend";

    let i = 0;

    let welcomeMessageDiv = document.querySelector(".welcome-back-message");

    let welcomeMessageParagraph = document.querySelector(".welcome-back-message p");

    welcomeMessageDiv.classList.add("show-welcome-message");

    let welcomeMessageInterval = setInterval(function(){
        
        welcomeMessageParagraph.textContent += welcomeMessage[i];
        i++
        if(i >= welcomeMessage.length){
            clearInterval(welcomeMessageInterval);
            setTimeout(function(){
                welcomeMessageDiv.classList.add("hide-welcome-message");
            },350)
        }
    },200)
}


function signUpFunction(){
    signUpSection.classList.remove("hide-sign-up-section");
    logInSection.classList.remove("show-login-section");
    location.reload();
}

let firstName = document.querySelector("input[name='first-name']");
let lastName = document.querySelector("input[name='last-name']");
let password = document.querySelector("input[name='password']");
let rePassword = document.querySelector("input[name='re-password']");
let email = document.querySelector("input[name='email']");
let gender = document.querySelector("select");
let birthDate = document.querySelector("input[name='birthdate']");
let errMessage = document.querySelector(".err-matching");
let arrData = [];

let getTheDataInConsole = localStorage.getItem("data");
let displayData = JSON.parse(getTheDataInConsole)



if(localStorage.getItem("data")){
    arrData = displayData;
}

function signUpData(e){
    e.preventDefault();

    let signUpObj = {
        id: Math.random(Math.floor()),
        firstNameData: firstName.value,
        lastNameData: lastName.value,
        passwordData: password.value,
        rePasswordData: rePassword.value,
        emailData: email.value,
        genderData: gender.value,
        birthDateData: birthDate.value,
        usernameData: firstName.value + " " + lastName.value,
    }
    
    if(signUpObj.passwordData !== signUpObj.rePasswordData){
        errMessage.classList.add("show-err-matching");
    }else{
        errMessage.classList.remove("show-err-matching");
        if(firstName.value == "" || lastName.value == "" || password.value == "" || rePassword.value == "" || email.value == "" || gender.value == "first-option" || birthDate.value == ""){
            alert("Please Fill Each Field")
        }else{
            arrData.push(signUpObj);
            localStorage.setItem("data",JSON.stringify(arrData));
            window.open("profileData.html","_blank")
        }
    }
}

let signUpSubmit = document.querySelector("#signUpSubmit")
signUpSubmit.addEventListener("click",signUpData);
 
let loginUsername = document.querySelector(".login-section input[name='username']");
let loginPassword = document.querySelector(".login-section input[name='password']");

function loginData(e){
    e.preventDefault();

    displayData.forEach(function(data){
        if(loginUsername.value == data.usernameData && loginPassword.value == data.passwordData){
            window.open("home.html","_self");
        }
    })
}

let loginSubmit = document.querySelector(".login-section input[type='submit']");
loginSubmit.addEventListener('click', loginData);