const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#btn-submit");
const outputMessage = document.querySelector("#output-message");

const correctAnswers = ["A geometric figure","Polygon","3","Equilateral","Scalene","Isosceles","Hypotenuse","45°"];

function submitQuiz(){
    outputMessage.style.display = "none";
    var score = 0;
    var index =0;
    var data = new FormData(quizForm);
    for(var value of data.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    showMessage("Out of 8, Your Score is "+ score);

}

function showMessage(message){
    outputMessage.style.display = "block";
    outputMessage.innerText = message;
}

submitButton.addEventListener("click",submitQuiz);