
var userTyped = document.getElementById("letterTyped");

var letterUsed = document.getElementById("lastLetter");

var letterUsedArray = [];

document.onkeyup = function (event) {
    
    var userInput = event.key;
    
    userTyped.textContent = userInput; 
    
    letterUsedArray.push(userInput);
    
    letterUsed.textContent += userInput + ",";

}
