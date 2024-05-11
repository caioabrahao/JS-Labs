let messageIndex = 0;

function experimentOneChangeText (){
    let text = document.getElementById("changeable-text-exp1");

    let textMessages = ["You Edited Me! Thanks!",
                                "One time is fine, you can move on...",
                                "I said im alright! Go to the next Experiment.",
                                "I see... You wanna see how far it goes, huh?",
                                "Congratulations! This is the last message.",
                                "I said LAST MESSAGE! Stop trying to go further!",
                                "Ok, this is the end, for real this time.",
                                "You reached the end. Move on to the next Experiment.",
                                "Just scroll down to the 'Experiment 2' section.",
                                "please stop...",
                                "Huh... Fine...",
                                "Let's count! Bare with me!"]

    if(messageIndex < textMessages.length){
        text.textContent = textMessages[messageIndex];
        messageIndex++;
    }

    if(messageIndex >= textMessages.length){
        let timesPressed = messageIndex.toString();
        text.innerHTML = "You clicked this stupid button <span class='text-highlight'>" + timesPressed + " </span>times!";
        messageIndex++;
    }

}

let quizIndex = 0;
const questions = [
    {question: "Is it raining today?", answer: false},
    {question: "Are you a big fan of hot dogs?", answer: false},
    {question: "Is 67 your favourite number?", answer: false},
    {question: "Are you having a good day?",answer: false},
    {question: "Have you uninstalled League of Legends yet?",answer: false},
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
    quizDisplay.textContent = "The quiz has come to an end! Wanna see the results?";
    let yesButton = document.getElementById("yes-button");
    let noButton = document.getElementById("no-button");
    yesButton.remove();
    noButton.remove();

    let newButton = document.createElement("button");
    newButton.textContent = "Sure! Lets see it.";
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
        answerText.innerHTML = questionListNumber.toString() + ". " + questions[i].question + " = " + "<span class='text-highlight'>" + questions[i].answer  + "</span>";
        document.getElementById("quiz-text-box").appendChild(answerText);
    }

    let ResultsButton = document.getElementById("resultsButton")
    ResultsButton.textContent = "Restart Quiz";
}