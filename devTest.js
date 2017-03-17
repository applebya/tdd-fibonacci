const test = require("tape");
const expectedValue = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

// Looped & recursive fibonacci sequences

const fibByLoop = num => {
  let a = 1, b = 0, temp;

  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

const fibByRec = n => n <= 1 ? n : fibByRec(n - 1) + fibByRec(n - 2);

const buildFibSequence = (quantity, ftn) => {
  let indexArray = [...Array(quantity).keys()].map(k => k + 1);
  return indexArray.map(ftn);
};

// Tests

test("Stack", t => {
  t.ok(expectedValue instanceof Array, "is an array");
  t.end();
});

test("Fibonacci", t => {
  let loopedValue = buildFibSequence(10, fibByLoop);
  t.deepEqual(
    loopedValue,
    expectedValue,
    `Looped sequence matches ${expectedValue}`
  );

  let recursiveValue = buildFibSequence(10, fibByRec);
  t.deepEqual(
    recursiveValue,
    expectedValue,
    `Recursive sequence matches ${expectedValue}`
  );

  t.end();
});
