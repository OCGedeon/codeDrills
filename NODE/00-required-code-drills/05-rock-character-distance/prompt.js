
  var string = "ilovetowritecode";
  var character = "o"
  
  function distanceFrom(str, char) {
// ===================== YOUR WORK HERE =====================
var indices = []
    
    var final = []

    for (var i = 0 ; i < str.length ; i ++) {
      
      if (str[i] === char) {
        indices.push(i)
      }
    }

    var hold = []
    for (var i = 0 ; i < str.length ; i ++) {
      var temp = []
      for (var j = 0 ; j < indices.length ; j++) {
        var thing = i - indices[j]
        temp.push(Math.abs(thing))

      }
      hold.push(temp)
    }

    for (var i = 0 ; i < hold.length ; i++) {
      
      var index = str.length;
      
      for (var j = 0 ; j < hold[i].length ; j++) {
        
        if (hold[i][j] < index) {
          index = hold[i][j]
        }
      }
      final.push(index)
    }

    return final

// ==========================================================
  }
  
  console.log(distanceFrom(string, character))
 