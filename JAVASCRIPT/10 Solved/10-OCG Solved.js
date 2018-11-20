var userConfirm;

document.onkeyup = function(input) {

    var userkey = input.key.toLowerCase();

    console.log(userKey);

    if (userKey === "h") {
        userConfirm = confirm("You have been confirmed!");
    }

    if (userKey === "k") {
    
    if (userConfirm === true) {
        alert("Hello");
    

    } else {
        alert("No Thanks");
    }

  }
}