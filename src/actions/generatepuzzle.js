
const plus = function(curTotal,lim) {
  return (curTotal+randNum(lim));
}


const times = function(curTotal,lim) {
  return (curTotal*randNum(lim));
}

const pluspercent = function(curTotal,lim) {
  //not correct. but leave it for now.
  return (curTotal+randNum(lim));
}

const square = function(curTotal,lim) {
  return curTotal**2;
}

const cube = function(curTotal,lim) {
  return curTotal**3;
}

const minus = function(curTotal,lim) {
  return (curTotal-randNum(lim));
}

const divide = function(curTotal,lim) {
  return (curTotal/randNum(10));
}

const abfrac = function(curTotal,lim) {
  //Template implementation - fix up later.
  return (curTotal/randNum(10));
}

const minuspercent = function(curTotal,lim) {
  //Not implemented right, fix up later
  return (curTotal-randNum(10));
}

const squareroot = function(curTotal,lim) {
  return (Math.sqrt(curTotal));
}

const cuberoot = function(curTotal,lim) {
  return (Math.cbrt(curTotal));
}

//Taken from https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
const reversedigits = function(curTotal,limit) {
  return (
    parseFloat(
      curTotal
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  )
}

const nameMap = {"+":plus,
  "*":times,
  "+%":pluspercent,
  "Square It":square,
  "Cube It":cube,
  "-":minus,
  "/":divide,
  "* a/b":abfrac,
  "-%":minuspercent,
  "Square Root":squareroot,
  "Cube Root":cuberoot,
  "Rev. Digits":reversedigits
};


//These are ordered from most frequent to least frequent

const noviceSettings = {
  startLim:10,
  endLimit:100,
  exclusions:null
};

const randNum = function(limit = 10) {
  return Math.round(Math.random()*limit);
}

//const growthOps = [plus,times, pluspercent, square, cube];
//const reductionOps = [minus, divide, abfrac, minuspercent, squareroot, cuberoot];
//const wildcardOps = [reversedigits];

//45,28,15,8,4 from fcGeo(), numbers nudged a bit.
const growOpsSelect = function() {
  const drawNumber = randNum(100);
  let opReturned;
  if (drawNumber <= 45) { opReturned = "+"; }
  else if (drawNumber <= 73) { opReturned = "*"; }
  else if (drawNumber <= 88) { opReturned = "+%"; }
  else if (drawNumber <= 96) { opReturned = "Square It"; }
  else if (drawNumber <= 100) { opReturned = "Cube It";}
  return opReturned;
};

//46,25,14,8,5,2 from fcGeo(), numbers nudged a bit.
const redOpsSelect = function() {
  const drawNumber = randNum(100);
  let opReturned;
  if (drawNumber <= 46) { opReturned = "-"; }
  else if (drawNumber <= 71) { opReturned = "/"; }
  else if (drawNumber <= 85) { opReturned = "* a/b"; }
  else if (drawNumber <= 93) { opReturned = "-%"; }
  else if (drawNumber <= 98) { opReturned = "Square Root";}
  else if (drawNumber <= 100) { opReturned = "Cube Root";}
  return opReturned;
};

const wildOpsSelect = () => {return "Rev. Digits"};

const opTypeSelect = function() {
  const drawNumber = randNum(100);
  let opRet;
  if (drawNumber <= 49) { opRet = growOpsSelect();}
  else if (drawNumber <= 98) { opRet = redOpsSelect(); }
  else if (drawNumber <= 100) { opRet = wildOpsSelect();}
  return opRet;
};

//This is taken from Ihor Sakailiuk at the following link:
//https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}

//"RandNP" : *Semi*-Random Non Prime. Not truely random as primes are taken out.
const randNP = function(limit = 10) {
  let candidateNum =  randNum(limit);
  while (isPrime(candidateNum)) {
    candidateNum =  randNum(limit);
  }
  return candidateNum;
};

// This function takes our current running total, and a limit,
// and tries to find something that will work.
// our result must be a whole number > 1 by the end.
const opSelectChecker = function(op,rt) {
  const limit = 20; //just for now
  //note: abfrac and reverse digits don't take two arguements - they are dummied for now.
  for (let i = 2; i < limit; i++) {
    let result = op(rt,limit);
    if ((result % 1 == 0)&&(result > 0)) { return {num:i,result:result};}
  }
  return [-1,-1];
}

const genStepString = function(opStr, num) {
  return (opStr + num); //string concat.
}

const calcNovNums = function() {
  const startNumber = randNP(500);
  let runningTotal = startNumber;
  const opsArray = [];
  let currOps = "";
  while (opsArray.length < 4) {
    currOps = opTypeSelect();
    let values = opSelectChecker(nameMap[currOps],runningTotal);
    if (values.result > 0) {
      opsArray.push(genStepString(currOps, values.num));
      runningTotal = values.result;
    }
  }
  return opsArray;
};

//PMF function was used to calculate our random bounds, in selecting
//operations. It had the right profile.
/*
const fCGeometric = function(lim) {
  let p = 0.45
  for (let i = 1; i <= lim; i++) {
    console.log("i = " + i + ", f(i) = " + (p*((1-p)**(i-1))));
  }
};
*/
