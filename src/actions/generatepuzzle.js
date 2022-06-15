

const plus = function(curTotal,lim) {
  return (curTotal+randNum(lim));
}

const times = function(curTotal,lim) {
  return (curTotal*randNum(lim));
}

const plusprecent = function(curTotal,lim) {
  //not correct. but leave it for now.
  return (curTotal+randNum(lim));
}

const square = function(curTotal,lim) {
  return curTotal**2;
}

const triple = function(curTotal,lim) {
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
const reverseDigits = function(curTotal) {
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

//These are ordered from most frequent to least frequent
const growthOps = [plus,times, pluspercent, square, cube];
const reductionOps = [minus, divide, abfrac, minuspercent, squareroot, cuberoot];
const wildcardOps = [reverseDigits];

const noviceSettings = {
  startLim:10,
  endLimit:100,
  exclusions:null
};

const randNum = function(limit = 10) {
  return Math.round(Math.random()*limit);
}

const opTypeDist = function() {
  const drawNumber = randNum(100); let opArrReturned;
  if (drawNumber <= 49) { opArrReturned = growthOps;}
  else if (drawNumber <= 98) { opArrReturned = reductionOps; }
  else if (drawNumber <= 100) { opArrReturned = wildcardOps;}
  return opArrReturned;
};

const growOpsSelect = function() {
  const drawNumber = randNum(100);
  let opReturned;
  if (drawNumber <= 54) { opReturned = growthOps[0]; }
  else if (drawNumber <= 79) { opReturned = growthOps[1]; }
  else if (drawNumber <= 91.5) { opReturned = growthOps[2]; }
  else if (drawNumber <= 97.75) { opReturned = growthOps[3]; }
  else if (drawNumber <= 100) { opReturned = growthOps[4];}
  return opReturned;
};

const redOpsSelect = function() {
  const drawNumber = randNum(100);
  let opReturned;
  if (drawNumber <= 51) { opReturned = reductionOps[0]; }
  else if (drawNumber <= 76) { opReturned = reducitonOps[1]; }
  else if (drawNumber <= 88.5) { opReturned = reductionOps[2]; }
  else if (drawNumber <= 95.75) { opReturned = reductionOps[3]; }
  else if (drawNumber <= 98.875) { opReturned = reductionOps[4];}
  else if (drawNumber <= 100) { opReturned = reductionOps[5];}
  return opReturned;
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
};

const calcNovNums = function() {
  const startNumber = randNP();
  const runningTotal = startNumber;
  let opArr = ["G","R","G","R","G","R","G"];
  while (opArr.length > 0) {
    if (opArr[0] == "G") {
      growOpsSelect()
    }
    else if (opArr[0] == "R") {

    }


    opArr.unshift(); //discard the head.
  }



  //Need an alternating sequence generator.


};

/*
const fCNegPow = function(lim,pow) {
  for (let i = 1; i <= lim; i++) {
    console.log("i = " + i + ", f(i) = " + (1/(pow*(i**pow)*)));
  }
};

const fCNegSlope = function(lim,slope) {
  for (let i = 1; i <= lim; i++) {
    console.log("i = " + i + ", f(i) = " + (1/(slope*i)));
  }
};
*/
