const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} bigger than ${el2}? (y, n)`, function (answer) {
    if (answer === "y") {
      return callback(true);
    } else {
      return callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  const callback = function swapper(isGreaterThan) {
    if (isGreaterThan === true) {
      let temp = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = temp;
      console.log(arr);
      madeAnySwaps = true;
    }
    return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
  }
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], callback);
  }
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      return innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      return sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
