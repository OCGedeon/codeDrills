// Divisors within an array


// This function takes in an array and returns true if any element is evenly divisible 
// by another element and false otherwise

function checkDivisors(arr) {

  // ---------- Your Code Here ----------
  for (var i = 0; i < arr.length; i++) {
    
  
    var currentElem = arr[i];
    

    for (var j = 0; j < arr.length; j++) {
      var innerElem = arr[j];

      if ((i !== j) && (currentElem % innerElem === 0)) {
        return true

      }

    }

  }





  // ----------- End Code Area -----------

}

// This should console log true
console.log(checkDivisors([4, 35, 3, 9, 22, 10]));

// This should console log true
console.log(checkDivisors([37, 17, 28, 7, 63]));

// This should console log true
console.log(checkDivisors([12, 27, 29, 62, 27]));

// This should console log false
console.log(checkDivisors([81, 7, 33, 20, 12]));

// This should console log false
console.log(checkDivisors([32, 15, 49, 82, 11]));