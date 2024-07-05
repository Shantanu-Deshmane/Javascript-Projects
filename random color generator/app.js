function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    console.log(color);
    document.querySelector("body").style.backgroundColor=color;
    document.getElementById("color-code").innerHTML=color

    //used to copy the rgb color code to clipboard
    navigator.clipboard.writeText(color)

}

document.getElementById("btn").addEventListener("click",()=>{
    randomColor()
})