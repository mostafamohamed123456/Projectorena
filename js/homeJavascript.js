let navList = document.querySelectorAll(".navigation-bar ul li a");
//Add active class to another items while hovering and remove it from others
navList.forEach((item) =>{
    item.addEventListener('mouseenter', ()=>{
        //remove active class from other items
        navList.forEach((items)=>{
            items.classList.remove("active");
        })
        //add active class to specified item
        item.classList.add("active");
    })
    item.onmouseout = ()=>{
        item.classList.remove("active");
    }
});

let loginSearchDiv = document.querySelector(".navigation-bar .login-search-div");
let searchBtn = document.querySelector(".navigation-bar .login-search-div .search-btn");
let loginBtn = document.querySelector(".navigation-bar .login-search-div .user-image");
let loginBtnImg = document.querySelector(".navigation-bar .login-search-div .user-image img");
let settingsBtn = document.querySelector(".navigation-bar .login-search-div .settings-btn");
let inputField;
let newSearchBtn;





searchBtn.onclick = () =>{
    //remove loginBtn, SettingBtn, and searchBtn
    loginBtn.remove();
    settingsBtn.remove();
    searchBtn.remove();
    //calling the createInputField Function
    createInputField()
};

//create New Input Field And change the search Button text
function createInputField(){
    //Creating New Search field
    inputField = document.createElement("input");
    //set Attributes to the New Search Field
    inputField.setAttribute("type","search");
    inputField.setAttribute("name","search");
    inputField.setAttribute("placeholder","search your project");
    //Set New Class To The New Search Field
    inputField.classList.add("search-field");
    //Append The New Search Field To The LoginSearchDiv
    loginSearchDiv.appendChild(inputField);
    //Creating New Search Btn
    newSearchBtn = document.createElement("span");
    newSearchBtn.innerHTML = "search";
    newSearchBtn.classList.add("newSearchBtn");
    loginSearchDiv.insertBefore(newSearchBtn, inputField)

    inputField.focus();
    newSearchBtn.addEventListener("click",()=>{
        returnToNormal();
    })
};
//return everything to normal
function returnToNormal(){
    inputField.remove();
    newSearchBtn.remove();

    let newLoginBtnSpan = document.createElement("span");
    let newSettingsBtnSpan = document.createElement("span");
    let newSearchBtnSpan = document.createElement("span");
    newSearchBtnSpan.classList.add("search-btn");
    newLoginBtnSpan.classList.add("user-image");
    newSettingsBtnSpan.classList.add("settings-btn");
    let newLoginBtnImg = document.createElement("img");
    newLoginBtnImg.setAttribute("src","images/user.png")
    newLoginBtnImg.setAttribute("title","")
    newLoginBtnImg.setAttribute("alt","")
    let newSettingsBtnI = document.createElement("i");
    newSettingsBtnI.classList.add("fas");
    newSettingsBtnI.classList.add("fa-gear");
    let newSearchBtnI = document.createElement("i");
    newSearchBtnI.classList.add("fas");
    newSearchBtnI.classList.add("fa-search");

    newLoginBtnSpan.appendChild(newLoginBtnImg);
    newSettingsBtnSpan.appendChild(newSettingsBtnI);
    newSearchBtnSpan.appendChild(newSearchBtnI);

    loginSearchDiv.appendChild(newLoginBtnSpan);
    loginSearchDiv.appendChild(newSearchBtnSpan);
    loginSearchDiv.appendChild(newSettingsBtnSpan);

    newSearchBtnSpan.addEventListener('click',()=>{
        newLoginBtnSpan.remove();
        newSettingsBtnSpan.remove();
        newSearchBtnSpan.remove();
        createInputField();
    })

}

let startBtn = document.querySelector(".content .btns-div .started-btn");
startBtn.onclick = ()=>{
    window.open("projects.html","_blank");
}
let returnBackBtn = document.createElement("button");
    returnBackBtn.innerHTML = "<i class='fas fa-arrow-up'></i>";
    returnBackBtn.classList.add("return-btn");
    document.body.appendChild(returnBackBtn);

window.addEventListener("scroll",()=>{
    if(window.scrollY >= 100){
        returnTopFunction()
    }else if(window.scrollY == 0){
        returnBackBtn.style.display = "none";
    }
    
});

function returnTopFunction(){
    returnBackBtn.style.display = "block";
    returnBackBtn.onclick = ()=>{
        if(window.scrollY >= 100){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        }
    }
}

let stepsParent = document.querySelector(".how-it-works-content");
let steps = document.querySelectorAll(".steps");

window.addEventListener("scroll",()=>{
    if(window.scrollY >= stepsParent.offsetHeight + 300){
        steps.forEach((eachStep)=>{
            eachStep.classList.add("activate")
        })
    }else{
        steps.forEach((eachStep)=>{
            eachStep.classList.remove("activate")
        })
    }
} )


let featuresParent = document.querySelector(".our-features");
let featureCenter = document.querySelector(".center-feature");
let features = document.querySelectorAll(".features");
window.addEventListener("scroll", ()=>{
    if(window.scrollY >= (featuresParent.offsetTop - 400)){

        featureCenter.classList.add("activate-feature");

        setTimeout(function(){
            features[1].classList.add("activate-feature"); //simple
        },200);
        setTimeout(function(){
            features[0].classList.add("activate-feature"); //login
        },400);
        setTimeout(function(){
            features[3].classList.add("activate-feature"); //contact
        },600);
        setTimeout(function(){
            features[4].classList.add("activate-feature"); //ideas
        },800);
        setTimeout(function(){
            features[2].classList.add("activate-feature"); //responsive
        },1000);
        
    }else{
        featureCenter.classList.remove("activate-feature");
        features.forEach((eachFeature)=>{
            eachFeature.classList.remove("activate-feature")
        })
    }
})