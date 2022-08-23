let calcValue = 0;

function calc(number, operation) {
  switch (operation) {
    case "+":
      calcValue += number;
      break;
    case "-":
      calcValue -= number;
      break;
    case "*":
      calcValue *= number;
      break;
    case "/":
      calcValue /= number;
      break;
  }

  console.log(calcValue);
}

calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2

// run command
//$ node 1.accumulate.js
