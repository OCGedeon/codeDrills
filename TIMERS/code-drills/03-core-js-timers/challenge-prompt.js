 // Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function questionOne() {
    alert ("Question 1");
}

setTimeout(questionOne, 1000 * 5);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function questionTwo() {
    alert("Question 2");
}

setTimeout(questionTwo, 1000 * 15);


// Remove the timer you just made for Question 2

clearTimeout(questionTwo);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
function questionThreePtOne() {

    alert("Question 3.1");
}

setTimeout(questionThreePtOne, 1000 * 15);

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
function questionThreePtTwo() {

    alert("Question 3.2");
}

setTimeout(questionThreePtTwo, 1000 * 16);



console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(questionThreePtOne);

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
function questionFive() {

    alert("Question 5");
}

setTimeout(function() {console.log("Question 5 Completed")}, 1000 * 11);


