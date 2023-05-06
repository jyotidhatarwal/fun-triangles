const inputAngles = document.querySelectorAll(".angles");
const buttonTriangle = document.querySelector("#btn-triangle");
const outputMessage = document.querySelector("#output-message");

function sumOfAngles(a,b,c){
    var sum = a + b + c;
   return sum;
}

function isTriangle(){
   outputMessage.style.display = "none";
   var angle1 = Number(inputAngles[0].value);
   var angle2 = Number(inputAngles[1].value);
   var angle3 = Number(inputAngles[2].value);
   var angleSum = sumOfAngles(angle1,angle2,angle3);
   if(angleSum === 180){
    showMessage("This is a Triangle");
   }else{
    showMessage("This is not a triangle");
   }
}
function showMessage(message){
    outputMessage.style.display = "block";
    outputMessage.innerText = message
}

buttonTriangle.addEventListener("click",isTriangle);