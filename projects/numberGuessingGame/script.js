const Submit=document.querySelector(".Submit");
const user_Value=document.querySelector(".user_Value");
const message_Text=document.querySelector(".message_Text");
const computer=[1,2,3,4,5,6,7,8,9,10];
Submit.addEventListener("click",(event)=>{
    const target=event.target;
    console.log("it works");
    let userValue=Number(user_Value.value);
    let computerValue = computer[Math.floor(Math.random() * computer.length)];

    if(computerValue>userValue){
        message_Text.innerHTML=`ur value is too low ${userValue}`;
    }
    if(computerValue<userValue){
        message_Text.innerHTML=`ur value is too high ${userValue}`;
    }
    if(computerValue===userValue){
        message_Text.innerHTML=`ur value is correct       ${userValue}`;
    }
});