let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase ="abcdefghijklmnopqrstuvwxyz";
let number = "0113456789";
let symbol = "!@#$%^&*(){[]};:<>,.?/"
let length = 10;



btn.addEventListener("click",()=>{
    let password = "";
    let allChars = uppercase + lowercase + number + symbol ;
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    
    console.log(password);
    while(length > password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
        console.log(password)
    }
    input.value = password;
})

function copyPass(){
    input.select();
    document.execCommand("copy");
}