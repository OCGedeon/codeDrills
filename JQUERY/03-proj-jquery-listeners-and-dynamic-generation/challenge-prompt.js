
$(document).ready(function () {



  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  var body = $("body")


  var btns = body.find("#buttons");


  for (var i = 0; i < letters.length; i++) {
    var textButton = $("<button>");

    textButton.addClass("<button>");

    textButton.attr("data-letter", letters[i]);

    btns.append(textButton);
  }


  btns.on("click", ".letter-button", function () {

    var textDiv = $("<div>");

    textDiv.addClass("letter");

    textDiv.text($(this).attr("data-letter"));
    
    body.find("#display").append(textDiv);
  });
  
    

});

