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
                                "please stop..."]

    text.textContent = textMessages[messageIndex];

    if(messageIndex < 9){
        messageIndex++;
    }

}