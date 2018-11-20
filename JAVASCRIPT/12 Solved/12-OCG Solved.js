var userExpression = [];

var validInputs = "1234567890+-*/=c";

function evaluateArray(arr) {

    var num1 = "";
    var num2 = "";
    var operator;

    for (var i = 0; i < arr.length; i++) {

        if (operator) {
            
            num2 = num2 + arr[i];

    } else {

        if (arr[i] === "+" || arr[i] === "-" || arr[i] === "*" || arr[i] === "/"){
   
        } else {

                num1 = num1 + arr[i];

        }

    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operator === '+') {

        return num1 + num2;
    }

    else if (operator === '-') {
        
        return num1 - num2;
    }

    else if (operator === '*') {

        return num1 * num2;

    }

    else if (operator === '/') {

        return num1 / num2;

    }

  }
}



document.onkeyup = function(input) {

    var key = input.key;
  if (validInputs.includes(key)) {

    if (key === 'c') {

        userExpression = [];
        document.getElementById("user-result").textContent = "";


    }
    
    else if (key === '=') {

        var result = evaluateArray(userExpression);
        
        document.getElementById("user-result").textContent = result;

    }

    else if (key === '+' || key === '-' || key === '*' || key === '/') {

        if (userExpression.includes("+") || userExpression.includes("-") || userExpression.includes("*") || userExpression.includes("/")) {

            document.getElementById("user-result") = "You've already entered data."

        }

        else {
            userExpression.push(key);
          }

    }

    else {
        userExpression.push(key)
      }
    }

    else {
        document.getElementById("user-result").textContent = "Please press a valid key";
    }

    document.getElementById("user-expression").textContent = userExpression;

}