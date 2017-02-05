// See: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array

function BinarySearch(arr, val) {
  let valFound = -1;
  let min = 0;
  let max = arr.length;
  let previousGuess = -1;
  let guess = 0;

  // Sort array of ints from min-max
  arr = arr.sort();

  // Let's begin the search
  while(valFound < 0) {
    guess = Math.floor((max+min)/2);

    // If we guess the same thing twice, then the answer doesn't exist
    if (guess === previousGuess) break;
    previousGuess = guess;

    if (arr[guess] === val) valFound = guess;
    else {
      if (arr[guess] < val) min = guess;
      if (arr[guess] > val) max = guess;
    }
  }
  return valFound;
}