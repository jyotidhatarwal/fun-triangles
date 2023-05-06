const baseValue = document.querySelector("#base-side");
const heightValue = document.querySelector("#height");
const buttonCalculate = document.querySelector("#btn-calculate");
const outputMessage = document.querySelector("#output-message");

function calculateHypotenuse(){
    outputMessage.style.display = "none";
    var base = Math.pow(Number(baseValue.value),2);
    var height = Math.pow(Number(heightValue.value),2);
    var hypotenuseSquare = base + height;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    outputMessage.style.display = "block";
    outputMessage.innerText = "The Length of Hypotenuse is "+ hypotenuse + " cm²";
}

buttonCalculate.addEventListener("click",calculateHypotenuse);