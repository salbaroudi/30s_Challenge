
//it is better to just pass two args back.
//quite a few functions have their own special constraints.
//let's just keep it all in the operation functions - easier that way.

const glimit = 30;

const plus = function(curTotal) {
  const addend = randNum(glimit);
  return {num:addend,result:curTotal+addend};
}

const times = function(curTotal) {
  const multiplicand = randNum(glimit)
  return {num:multiplicand,result:curTotal*multiplicand};
}

const pluspercent = function(curTotal) {
  const percent = randNum(10)*10; //left in percent notation
  return {num:percent,result:(curTotal + (curTotal*(percent/100)))};
}

const square = function(curTotal) {
  return {num:null,result:curTotal**2}; //just catch with if statement later.
}

const cube = function(curTotal) {
  return {num:null,result:curTotal**3};
}

const minus = function(curTotal) {
  const subtractand = randNum(glimit)
  return {num:subtractand,result:curTotal-subtractand};
}

const divide = function(curTotal) {
  const divisor = randNum(Math.round(curTotal/2))
  return {num:divisor,result:curTotal/divisor};
}

const abfrac = function(curTotal) {
  const denominator = randNum(Math.round(glimit))
  const numerator = randNum(denominator); //kinda hacky..but one of a kind function.
  return {num:numerator,denum:denominator,result:curTotal*(numerator/denominator)};
}

const minuspercent = function(curTotal) {
  const percent = randNum(10)*10; //left in percent notation
  return {num:percent,result:(curTotal - (curTotal*(percent/100)))};
}

const squareroot = function(curTotal) {
  return {num:null,result:Math.sqrt(curTotal)};
}

const cuberoot = function(curTotal) {
  return {num:null,result:Math.cbrt(curTotal)};
}

//Taken from https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
const reversedigits = function(curTotal) {
  return {num:null,
    result: parseFloat(curTotal.toString().split('').reverse().join('')),
    denum:null};
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

//PMF function was used to calculate our random bounds, in selecting
//operations. It had the right profile.
const fCGeometric = function(lim) {
  let p = 0.45
  for (let i = 1; i <= lim; i++) {
    console.log("i = " + i + ", f(i) = " + (p*((1-p)**(i-1))));
  }
};

// This function takes our current running total, and a limit,
// and tries to find something that will work.
// our result must be a whole number > 1 by the end.
const opSelectChecker = function(op,rt) {
  //loop limit - try a certain number of times.
  for (let i = 0; i < 10; i++) {
    let { num, result, denum } = op(rt);
    if ((result % 1 == 0)&&(result > 0)&&(result != rt)) { //Then our next operation was successful, package result.
      return {num:num,result:result,denum:denum}; //denum will almost never be there. Let string funciton sort it out.
    }
  }
  return {num:-1,result:-1,denum:-1}; //failure.
}

const genStepString = function(opname,values) {
  let {num, denum} = values;
  let retString = "";
  if (num) { //operation with one numerator. (plus, divide, etc...)
    retString = opname + ` ${num}`;
  }
  else { //non numerator op (square, cuberoot, etc...)
    retString = opname;
  }
  //Special Cases.
  if (denum) { //then we have an abfrac.
      retString = `* (${num} / ${denum})`;
  }
  else if (opname == "-%") {
      retString = `- ${num} %`;
  }
  else if (opname == "+%") {
      retString = `+ ${num} %`;
  }
  return retString;
}

const calcNovNums = function() {
  const startNumber = randNP(30);
  console.log(startNumber);
  var runningTotal = startNumber;
  var currOps = "";
  var values;
  const opsArray = [];
  const rTArray = [];
  while (opsArray.length < 4) {
    currOps = opTypeSelect();
    values = opSelectChecker(nameMap[currOps],runningTotal);
    if (values.result > 0) { //we must process our result for FE.
      opsArray.push(genStepString(currOps,values));
      rTArray.push(values.result);
      runningTotal = values.result;
    }
  }
  return {rTArray:rTArray,runningTotal:runningTotal,opsArray:opsArray};
};
