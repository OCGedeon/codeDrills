// Anagrams


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------

  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');

  if (str1.length !== str2.length) {
    return false;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  for (var i=0; i < str1/length; i++) {

    str2 = str2.replace(str[i], "");
  }

  if (str2.length === 0) {
    return true;
  } else {
    return false
  }
  
  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Goodnight Sun"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
