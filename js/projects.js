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

let projects = document.querySelectorAll(".left-navigator .projects");
let btnsDiv = document.querySelectorAll(".left-navigator .projects div");
let projectsNameHeader = document.querySelectorAll(".left-navigator .projects h3");
let projectNameSpan = document.querySelector(".project-content .project-name .project-name-span");
let projectIframe = document.querySelector(".project-content .project iframe");
let viewBtn = document.querySelectorAll(".left-navigator .projects div .view-btn");

projects.forEach((individDiv,index)=>{
    individDiv.onclick = ()=>{
        btnsDiv[index].classList.toggle("active");
        projectNameSpan.innerHTML = projectsNameHeader[index].innerHTML ;
    }
})

viewBtn.forEach((individViewBtn,index)=>{
    individViewBtn.onclick = function(){
        projectIframe.setAttribute("src", projects[index].getAttribute("data-link"));
    }
})