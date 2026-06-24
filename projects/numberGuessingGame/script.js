const submit=document.querySelector(".Submit");
let UserInput=document.querySelector(".user_Value");
let message_Text=document.querySelector(".message_Text");
const computerNumber=[1,2,3,4,5,6,7,8,9,10];

submit.addEventListener("click",()=>{
    message_Text.innerHTML="";
    let computer_Guess=Math.floor(Math.random()*computerNumber.length);
    if(computer_Guess>UserInput){
        message_Text.innerHTML="The number is low"
    }
    if(computer_Guess<UserInput){
        message_Text.innerHTML="The number is too high"
    }
    if(computer_Guess===UserInput){
        message_Text.innerHTML="Correct"
    }
});
