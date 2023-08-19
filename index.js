let mainContainer=document.querySelector(".main-container");
let thankYou = document.querySelector(".thank-you");
let submitbutton = document.getElementById("submit");
let rateAgain = document.getElementById("ratenow");
let rates=document.querySelectorAll(".btn2");
let rating =document.getElementById("rating");

submitbutton.addEventListener("click",function(){
    thankYou.classList.remove("hidden");
    mainContainer.style.display="none"; 
    
   

});

rateAgain.addEventListener("click",function(){
    thankYou.classList.add("hidden");
    mainContainer.style.display="block"; 
    
});

rates.forEach((rate) =>{
    rate.addEventListener("click",function(){
       rating.innerHTML=rate.innerHTML;
     

    })
});
