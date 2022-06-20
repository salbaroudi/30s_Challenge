
//it is better to just pass two args back.
//quite a few functions have their own special constraints.
//let's just keep it all in the operation functions - easier that way.
const noviceSettings = {
  startUB:100,
  startLB:20,
  gLimit:30,
  timesBound:300,
  pFiveToggle:false,
  percentBound:10,
  sqLimit:30,
  cubeLimit:15,
  divLimit:10,
  sqRootLBound:4,
  cuRootLBound:9,
  uLMultBound:5,
  revDigitLim:1000,
  rLims:[46,71,85,93,98,100]
};

const intermediateSettings = {
  startUB:150,
  startLB:40,
  gLimit:60,
  timesBound:500,
  pFiveToggle:true,
  percentBound:20,
  sqLimit:40,
  cubeLimit:20,
  divLimit:40,
  sqRootLBound:4,
  cuRootLBound:9,
  uLMultBound:5,
  revDigitLim:1000,
  rLims:[36,61,75,83,88,100]
};

const expertSettings = {
  startUB:200,
  startLB:60,
  gLimit:200,
  timesBound:1000,
  pFiveToggle:false,
  percentBound:30,
  sqLimit:35,
  cubeLimit:20,
  divLimit:50,
  sqRootLBound:4,
  cuRootLBound:9,
  uLMultBound:20,
  revDigitLim:10000,
  rLims:[26,51,65,80,90,100]
};



var set = {}; //will point to one our difficulty parameter sets!

const plus = function(curTotal) {
  const addend = randNum(set.gLimit);
  return {num:addend,result:curTotal+addend};
}

const times = function(curTotal) {
  if (curTotal < set.timesBound) {
    const multiplicand = randNum(set.gLimit)
    return {num:multiplicand,result:curTotal*multiplicand};
  }
  return {num:-1,result:-1};
}

const pluspercent = function(curTotal) {
  var percent = randNum(set.percentBound)*10; //left in percent notation
  if (set.pFiveToggle) {
    percent += Math.round(Math.random())*5;
  }
  return {num:percent,result:(curTotal + (curTotal*(percent/set.percentBound)))};
}

const square = function(curTotal) {
  const sqLimit = 40;
  if (curTotal < set.sqLimit) {
    return {num:null,result:curTotal**2}; //just catch with if statement later.
  }
  return {num:-1,result:-1}
}

const cube = function(curTotal) {
  const cubeLimit = 15;
  if (curTotal < set.cubeLimit) {
    return {num:null,result:curTotal**3};
  }
  return {num:-1,result:-1}
}

const minus = function(curTotal) {
  const subtractand = randNum(set.gLimit)
  return {num:subtractand,result:curTotal-subtractand};
}

const divide = function(curTotal) {
  if (!isPrime(curTotal) && (curTotal > set.divLimit)) {
    const divisor = randNum(Math.round(curTotal/2)) //?
    return {num:divisor,result:curTotal/divisor};
  }
  return {num:-1, result:-1};
}

//Our - Fraction. Denominator is always bigger.
const abfrac = function(curTotal) {
  var denominator = 0; var numerator = 0;
  while(denominator == numerator) {
    denominator = randNum(Math.round(set.gLimit))
    numerator = randNum(denominator-1);
  }
  return {num:numerator,denum:denominator,result:curTotal*(numerator/denominator)};
}

//Our + Fraction. Numerator is always bigger.
const bafrac = function(curTotal) {
  var denominator = 0; var numerator = 0;
  while(denominator == numerator) {
    numerator = randNum(Math.round(set.gLimit));
    denominator = randNum(numerator-1);
  }
  return {num:numerator,denum:denominator,result:curTotal*(numerator/denominator)};
}


const minuspercent = function(curTotal) {
  var percent = randNum(set.percentBound)*10; //left in percent notation
  if (set.pFiveToggle) {
    percent += Math.round(Math.random())*5;
  }
  return {num:percent,result:(curTotal - (curTotal*(percent/(set.percentBound))))};
}

const squareroot = function(curTotal) {
  if (curTotal > set.sqRootLBound) {
    return {num:null,result:Math.sqrt(curTotal)};
  }
  return {num:-1,result:-1}
}

const cuberoot = function(curTotal) {
  if (curTotal > set.cuRootLBound) {
    return {num:null,result:Math.cbrt(curTotal)};
  }
  return {num:-1,result:-1};
}

//Taken from https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
const reversedigits = function(curTotal) {
  if (curTotal < set.revDigitLim) {
    return {num:null,
      result: parseFloat(curTotal.toString().split('').reverse().join('')),
      denum:null};
  }
  return {num:-1,result:-1};
}

const nameMap = {"+":plus,
  "x":times,
  "+%":pluspercent,
  "* B/a":bafrac,
  "Square It":square,
  "Cube It":cube,
  "-":minus,
  "/":divide,
  "-%":minuspercent,
  "* a/B":abfrac,
  "Square Root":squareroot,
  "Cube Root":cuberoot,
  "Rev. Digits":reversedigits
};


const randNum = function(limit = 10) { //can't be zero!
  return genNum = Math.ceil(Math.random()*limit);
}

//const growthOps = [plus,times, pluspercent, square, cube];
//const reductionOps = [minus, divide, abfrac, minuspercent, squareroot, cuberoot];
//const wildcardOps = [reversedigits];

//45,28,15,8,4 from fcGeo(), numbers nudged a bit.
const growOpsSelect = function() {
  const drawNumber = randNum(100);
  let opReturned;
  if (drawNumber <= set.rLims[0]) { opReturned = "+"; }
  else if (drawNumber <= set.rLims[1]) { opReturned = "x"; }
  else if (drawNumber <= set.rLims[2]) { opReturned = "+%"; }
  else if (drawNumber <= set.rLims[3]) { opReturned = "* B/a"; }
  else if (drawNumber <= set.rLims[4]) { opReturned = "Square It"; }
  else if (drawNumber <= set.rLims[5]) { opReturned = "Cube It";}
  return opReturned;
};


//46,25,14,8,5,2 from fcGeo(), numbers nudged a bit.
const redOpsSelect = function() {
  const drawNumber = randNum(100);
  let opReturned;
  if (drawNumber <= set.rLims[0]) { opReturned = "-"; }
  else if (drawNumber <= set.rLims[1]) { opReturned = "/"; }
  else if (drawNumber <= set.rLims[2]) { opReturned = "-%"; }
  else if (drawNumber <= set.rLims[3]) { opReturned = "* a/B"; }
  else if (drawNumber <= set.rLims[4]) { opReturned = "Square Root";}
  else if (drawNumber <= set.rLims[5]) { opReturned = "Cube Root";}
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

//Credit goes to Ihor Sakailiuk at the following link:
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
    if ((result % 1 == 0)&&(result > 0)&&(result != rt)) { //No decimal and >0 and not a trivial op (no rt change).
      return {num:num,result:result,denum:denum};
    }
  }
  return {num:-1,result:-1,denum:-1}; //failure.
}

const genStepString = function(opname,values) {
  let {num, denum} = values;
  let retString = "";
  if (num) { //operation with one numerator. (plus, divide, etc...)
    retString = opname + `${num}`;
  }
  else { //non numerator op (square, cuberoot, etc...)
    retString = opname;
  }
  //Special Cases.
  if (denum) { //then we have an abfrac.
      retString = `x(${num}/${denum})`;
  }
  else if (opname == "-%") {
      retString = `-${num}%`;
  }
  else if (opname == "+%") {
      retString = `+${num}%`;
  }
  return retString;
}

const boundConstraints = function(startNumber,curTotal) {
  const uLB = set.uLMultBound;
  if ((curTotal < 6)||(startNumber*uLB < curTotal)||((startNumber/uLB) > curTotal)){
    return false;
  }
  return true;
}

const getStartNumber = function(uB, lB) {
  var rN = randNP(uB);
  while (rN < lB) {
    rN = randNP(uB);
  }
  return rN;
}


const calcPuzzle = function() {
  set = noviceSettings; //configuration.
  const startNumber = getStartNumber(set.startUB,set.startLB);
  var runningTotal = startNumber;
  var currOps; var values;
  const opsArray = []; const rTArray = [];
  while (opsArray.length < 8) {
    currOps = opTypeSelect();
    values = opSelectChecker(nameMap[currOps],runningTotal);
    if ((values.result > 0) && boundConstraints(startNumber,values.result)) {
      opsArray.push(genStepString(currOps,values));
      rTArray.push(values.result);
      runningTotal = values.result;
    }
  }
  return {startNumber:startNumber,rTArray:rTArray,runningTotal:runningTotal,opsArray:opsArray};
};

//call calcNovNums() many times, to see how many blowups occur via console inspection.
const calcNumsTest = function(diff) {
  if (diff == "Novice") { set = noviceSettings; }
  else if (diff = "Intermediate") { set = intermediateSettings;}
  else if (diff = "Expert") { set = expertSettings; }

  for (let i = 0; i < 50; i++) {
    var retObj = calcPuzzle();
    console.log("i= " + i + ", sN= " + retObj.startNumber + ", rT= " + retObj.runningTotal);
    console.log(retObj);
  }
}

const calcNovTest = function() {
  calcNumsTest("Novice");
}

const calcIntTest = function() {
  calcNumsTest("Intermediate");
}

const calcExpTest = function() {
  calcNumsTest("Expert");
}
