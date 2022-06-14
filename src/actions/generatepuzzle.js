
const growthOps = ["+","*", "x%", "Square It", "Cube It"];

const reductionOps = ["-", "/", "Root Square", "Root Cube", "a/b", "x%"];

const wildcardOps = ["Rev. Digits"];

const opTypeDist = function() {
  const drawNumber = Math.round(Math.random()*100);
  let opArrReturned;
  if (drawNumber <= 48) {
    opArrReturned = growthOps;
  }
  else if (drawNumber <= 98) {
    opArrReturned = reductionOps;
  }
  else {
    opArrReturned = wildcardOps;
  }
  return opArrReturned;
}

const randNum = (limit) => {return Math.ceil(Math.random()*(limit-1)};

const calcNovNums = function() {
  const startNumber = randNum(10);
  console.log(opTypeDist());
}
