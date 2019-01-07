// 1. Configure Server

//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple"

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  var alphabet = {
    "a": true,
    "b": false,
    "c": false,
    "d": false,
    "e": true,
    "f": false,
    "g": false,
    "h": false,
    "i": true,
    "j": false,
    "k": false,
    "l": false,
    "m": false,
    "n": false,
    "o": true,
    "p": false,
    "q": false,
    "r": false,
    "s": false,
    "t": false,
    "u": true,
    "v": false,
    "w": false,
    "x": false,
    "y": false,
    "z": false
  }

  var senArr = sen.toLowerCase().split(" ")

  for (var i = 0 ; i < senArr.length ; i ++) {

    var wordLength = senArr[i].length

    senArr[i] = senArr[i].split("")

    if (alphabet[senArr[i][0]]) {
      senArr[i].push("w")
    }

    for (var j = 0 ; j < wordLength && !alphabet[senArr[i][j]]; j ++) {

      senArr[i].push(senArr[i][j])
      
    }

      senArr[i].splice(0,j)
      senArr[i] = senArr[i].join("") + "ae"
  
  }

  senArr = senArr.join(" ")
  
  return (senArr)
}
  // ===================================================



// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  
    app.get("/", function(req,res) {

    res.json(pigLatin(sentence))

  })





  // ===================================================


// Listener
// ===========================================================

// 1. Create server

  app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  
});