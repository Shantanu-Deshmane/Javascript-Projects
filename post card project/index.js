let post = document.getElementById("post");
let like = document.getElementById("like");
let likeCount = document.querySelector(".left-Icon")
let save = document.querySelector(".right-Icon")
let totalLike = document.getElementById("totalLike")
let totalLikeNum = 0;

// when doubleClick on post display the like 
post.addEventListener("dblclick", function(){
    like.style.transform = "translate(-50%,-50%) scale(1)";
    like.style.opacity = "0.7";
    likeCount.firstChild.style.color = "#f4027b"
    addLike();
    console.log(totalLikeNum)
    setTimeout(function (){
    like.style.opacity = "0";
    },1000);
    setTimeout(function (){
        like.style.transform = "translate(-50%,-50%) scale(0)";
    },2000)
})

// like and unlike color change function
 let isLiked = false;
likeCount.addEventListener("click",()=>{
    isLiked = !isLiked;

    if(isLiked){
        likeCount.firstChild.style.color = "#f4027b";
        addLike();
        console.log(totalLikeNum)
       
    }
    else{
        likeCount.firstChild.style.color = "#000";
        removeLike()
        console.log(totalLikeNum)

    }
})

// save and unsave color function
let isSaved = false;
save.addEventListener("click",()=>{
    isSaved = !isSaved;
    if(isSaved){
        save.style.color = "rgb(0, 162, 255)";
    }
    else{
        save.style.color = "#000";
    }
});

// increase and decrease like count
function addLike(){
    if(totalLike != 1)
        totalLikeNum = 1;
        totalLike.innerHTML=totalLikeNum+" likes"
}
function removeLike(){
        totalLikeNum = 0;
        totalLike.innerHTML=totalLikeNum+" likes"
}

let isFollowing = false;
document.querySelector(".followBtn").addEventListener("click",()=>{
    isFollowing = !isFollowing;
    if(isFollowing){
    document.querySelector(".followBtn").innerHTML = "Following";
    }else{
        document.querySelector(".followBtn").innerHTML = "Follow";
    }
})