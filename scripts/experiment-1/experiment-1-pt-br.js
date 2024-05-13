let messageIndex = 0;

function experimentOneChangeText (){
    let text = document.getElementById("changeable-text-exp1");

    let textMessages =
        ["Você me editou! Valeu.",
            "Uma vez já ta bom, pode seguir em frente...",
            "Em to de boa, maluco! Vai pro próximo experimento.",
            "Ah, ja entendi... Você quer ver até onde isso vai né?",
            "Parabéns! Você chegou na última mensagem.",
            "Eu disse ÚLTIMA MENSAGEM! Para de tentar ir mais a fundo!",
            "Ai, agora você chegou no fim. De verdade dessa vez.",
            "Você alcançou o final. Favor seguir para o próximo experimento.",
            "É só rodar um pouco pra baixo pra parte do 'Experimento II'.",
            "para por favor...",
            "Aff... Ok...",
            "Quer contar? Vamos contar."]

    if(messageIndex < textMessages.length+1){
        text.textContent = textMessages[messageIndex];
        messageIndex++;
    }

    if(messageIndex >= textMessages.length+1){
        let timesPressed = messageIndex.toString();
        text.innerHTML = "Tu clicou nesse botão estúpido <span class='text-highlight'>" + timesPressed + "</span> vezes!";
        messageIndex++;
    }

}
