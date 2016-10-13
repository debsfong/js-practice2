const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    return 0;
  } else {
    reader.question("What number would you like to add? ", function (answer) {
      sum += parseInt(answer);
      console.log(sum);
      return sum + addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => {
  console.log(`Total Sum: ${sum}`)
  reader.close();
}
);
