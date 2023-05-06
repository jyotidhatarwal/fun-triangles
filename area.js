const baseValue = document.querySelector("#base-side");
const heightValue = document.querySelector("#height");
const buttonCalculate = document.querySelector("#btn-calculate");
const outputMessage = document.querySelector("#output-message");

function calculateArea(){
    outputMessage.style.display = "none";
    var base = Number(baseValue.value);
    var height = Number(heightValue.value);
    var area = 1/2* base * height;
    outputMessage.style.display = "block";
    outputMessage.innerText = "Area of the triangle is "+ area + " cm²"
}

buttonCalculate.addEventListener("click",calculateArea);