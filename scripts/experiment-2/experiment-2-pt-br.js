let quizIndex = 0;
const questions = [
    {question: "Esta chovendo hoje?", answer: false},
    {question: "Você gosta de cachorros quentes?", answer: false},
    {question: "67 é seu número favorito?", answer: false},
    {question: "Seu dia esta indo bem?",answer: false},
    {question: "Já desinstalou o League of Legends?",answer: false},
];

function quizDisplayUpdate (){
    const quizDisplay = document.getElementById("quiz-display");
    quizDisplay.textContent = questions[quizIndex].question;
}

function answerYes(){
    questions[quizIndex].answer = true;
    quizIndex++;
    if(quizIndex < questions.length) {
        quizDisplayUpdate();
    } else {
        endQuiz();
    }
}

function answerNo(){
    questions[quizIndex].answer = false;
    quizIndex++;
    if(quizIndex < questions.length) {
        quizDisplayUpdate();
    } else {
        endQuiz();
    }
}

function startQuiz(){
    let yesButton = document.getElementById("yes-button");
    let noButton = document.getElementById("no-button");
    quizDisplayUpdate();
    yesButton.removeAttribute("disabled");
    noButton.removeAttribute("disabled");
    document.getElementById("start-quiz-button").remove();
}

function endQuiz(){
    const quizDisplay = document.getElementById("quiz-display");
    quizDisplay.textContent = "O quiz chegou ao fim. Gostaria de ver os resultados?";
    let yesButton = document.getElementById("yes-button");
    let noButton = document.getElementById("no-button");
    yesButton.remove();
    noButton.remove();

    let newButton = document.createElement("button");
    newButton.textContent = "Bora! Vamos ver.";
    newButton.addEventListener("click", seeResults);
    newButton.type = "button";
    newButton.className = "button";
    newButton.id = "resultsButton"

    document.getElementById("quiz-buttons").appendChild(newButton);
}

function seeResults(){
    const quizDisplay = document.getElementById("quiz-display");
    quizDisplay.remove();

    for(let i = 0; i < questions.length; i++){
        let answerText = document.createElement("p");
        let questionListNumber = i + 1;
        let yesOrNo = "none";

        if(questions[i].answer === true){
            yesOrNo = "Sim";
        }else{
            yesOrNo = "Não";
        }

        answerText.innerHTML = questionListNumber.toString() + ". " + questions[i].question + " = " + "<span class='text-highlight'>" + yesOrNo  + "</span>";
        document.getElementById("quiz-text-box").appendChild(answerText);
    }

    let ResultsButton = document.getElementById("resultsButton");
    ResultsButton.textContent = "Reiniciar o Quiz";
    ResultsButton.addEventListener("click", restartQuiz);
}

function restartQuiz(){
    window.location = window.location;
}