let p = document.querySelector(".set-profile-data p");
let image = document.querySelector(".set-profile-data img");
let uploadImageBtn = document.getElementById("choose-image");
let inputFileBtn = document.querySelector(".set-profile-data input[type='file']");
let submitBtn = document.getElementById("submit");
let nickName = document.querySelector(".set-profile-data input[type='text']");

let displayData = JSON.parse(localStorage.getItem("data"));
p.innerHTML = displayData[displayData.length - 1].usernameData;
let newArr = [];

if(localStorage.getItem("data2")){
    newArr = JSON.parse(localStorage.getItem("data2"));
}

uploadImageBtn.addEventListener('click',function(){
    inputFileBtn.click();
})
inputFileBtn.addEventListener("change",getFiles);

function getFiles(){
    let reader = new FileReader();
        reader.onload = function(){
        image.src = reader.result;
    }
    reader.readAsDataURL(inputFileBtn.files[0]);
}

submitBtn.onclick = ()=>{
    let data2Obj = {
        userId :  displayData[displayData.length - 1].id,
        usernameData2 : displayData[displayData.length - 1].usernameData,
        imageData2 : image.getAttribute("src"),
        nicknameData : nickName.value
    }
    newArr.push(data2Obj);
    localStorage.setItem("data2", JSON.stringify(newArr));
    window.open("home.html","_self");
}