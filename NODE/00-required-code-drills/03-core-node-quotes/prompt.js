// ======== You are given NOTHING to start with 😱 ========

var fs = require("fs");
var args = [];
var fullQuotes;
var person;
var message = "That person never said anything"


for (var i = 2 ; i < process.argv.length ; i++) {
  args.push(process.argv[i]);
}

person = args.join(" ");


fs.readFile("quotes.txt", "utf8", function(error, data) {
  
  
  fullQuotes = data.split(";");

  for (var i = 0 ; i < fullQuotes.length; i++) {
    
    var quote = fullQuotes[i].split("-");

    if (quote[1].toLocaleLowerCase() === person) {

      message = quote[0];

    }
  }

  console.log(message)
});
