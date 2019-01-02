var fs = require("fs");
var args = [];


for (var i = 2 ; i < process.argv.length ; i++) {
  args.push(process.argv[i]);
};

var quote = args[args.length -1];

args.pop(); args.pop();

var person = args.join(" ");
var fullQuote = [];


quote = '"' + quote + '"';

fullQuote.push(quote);
fullQuote.push("-");
fullQuote.push(person);
fullQuote = fullQuote.join(" ");


fs.appendFile("quotes.txt", ";"+fullQuote, function(error, data) {
  console.log("Quote added!")
});

