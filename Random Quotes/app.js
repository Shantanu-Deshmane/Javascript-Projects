let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");



let url = "https://api.quotable.io/random";
async function getQuotes(url){
    let response = await fetch (url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = `" ${data.content} "`;
    author.innerHTML = `-${data.author}`;
}
getQuotes(url);