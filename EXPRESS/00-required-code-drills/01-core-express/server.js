// 1. Configure Server

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  
  var obj = {}
  var domainsAndCount = []

  for (var i = 0 ; i < arr.length ; i++) {

    domainsAndCount.push(arr[i].split(" "))
  }

  for (var i = 0 ; i < domainsAndCount.length ; i++) {

    var visits = parseInt(domainsAndCount[i][0])
    var domain = domainsAndCount[i][1]

    for (var j = 0 ; j < subDomains.length; j++) {
     
      if (!obj[subDomains[j]]) {
        obj[subDomains[j]] = visits
        
      } else {
        obj[subDomains[j]] += visits
      }
    }

  // ===================================================
}

return obj

}
  app.get("/", function(req, res) {
  var subDomains = getNumVisits(input)
  res.json(subDomains)

})
// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================

  // ===================================================

// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});