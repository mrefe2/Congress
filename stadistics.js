var statistics = {
    "nRep": 0,
    "nDem": 0,
    "nInd": 0,
    "avRepVwP": 0,
    "avDemVwP": 0,
    "memRepLoyal": [],
    "memDemLoyal": [],
    "mostEngaged": [],
    "lessEngaged": [],
}

var members = data.results[0].members;

//-----------------------------------------------------------------------------------------------------------------------------------------

var nRep = [];
function numberOfRep() {
     for (r = 0; r < members.length; r++){
         if (members[r].party == "R") {
             nRep.push(members[r]);
         }
     }
}

numberOfRep();
console.log(nRep);

var nDem = [];
function numberofDem() {
    for (d = 0; d < members.length; d++){
         if (members[d].party == "D") {
             nDem.push(members[d]);
         }
     }
}

numberofDem();
console.log(nDem);

var nInd = [];
function numberofInd() {
    for (i = 0; i < members.length; i++){
         if (members[i].party == "I") {
             nInd.push(members[i]);
         }
     }
}

numberofInd();
console.log(nInd);


//----------------------------------------------------------------------------------------------------------------------------------------------

