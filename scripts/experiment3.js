function updateTextByInput(){
    let textField = document.getElementById("textField");
    let textDisplay = document.getElementById("textInputDisplay");

    textField.addEventListener("keypress", function(){
        if(event.keyCode === 13 && textField.value !== ""){
            textDisplay.textContent = textField.value;
            textField.value = "";
        }

    });
}