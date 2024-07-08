/*
plugin Name : Lighthouse Plugin
Plugin version : 1.0.0
Plugin Author : Shantanu Deshmane
Date : 21/06/2024
*/


// function to include html pop up code

function includepopupHTML() {
    let html ='<div id="vis-popup"><span><img id="close" onclick="closePopup()" src="/Images/close.png" alt=""></span><img id="left-arrow" src="/Images/left.png" alt=""><img id="right-arrow" src="/Images/right.png" alt=""><img id="mainPopImage" src="/Images/car1.jpg" alt=""></div>'

    let popdiv= document.createElement('div');
    popdiv.innerHTML=html;
    document.body.insertBefore(popdiv,document.body.firstChild);
}
let img;
let current;

// function to init plugin
function imagepopupInit(target){
    img = document.getElementsByClassName(target);

// add eventl istener on all selected images
for(let i=0; i<img.length; i++){
    // add pointer
    img[i].style.cursor="pointer";

    // add event listener
    img[i].addEventListener("click",function(){
        document.getElementById("mainPopImage").src = this.src;
        document.getElementById("vis-popup").style.display="block";
        checkArrow();

    })
}
    includepopupHTML()

    // next button
    document.getElementById("right-arrow").addEventListener("click",function(){
        nextImg()
    })
    // previous button
    document.getElementById("left-arrow").addEventListener("click",function(){
        previousImg()
    })
}
// close popup
function closePopup(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display="none";
}


// next image
function nextImg(){
    getCurrentimage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();

}
// previous image
function previousImg(){
    getCurrentimage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}

// get current image
function getCurrentimage(){
    for(let i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById("mainPopImage").src){
            current = i;
        }
    }
}

function checkArrow(){
    getCurrentimage();
    if(current == "0"){
        document.getElementById("left-arrow").style.display="none";
        document.getElementById("right-arrow").style.display="block";
        
    }else if (current == img.length - 1){
        document.getElementById("right-arrow").style.display="none";
        document.getElementById("left-arrow").style.display="block";
        
    }else{
        document.getElementById("left-arrow").style.display="block";
        document.getElementById("right-arrow").style.display="block";
    }
}
