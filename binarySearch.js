// See: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
/**
  Pseudocode:

  Let min = 0 and max = n-1.
  Compute guess as the average of max and min, rounded down (so that it is an integer).
  If array[guess] equals target, then stop. You found it! Return guess.
  If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
  Otherwise, the guess was too high. Set max = guess - 1.
  Go back to step 2.
 */

function BinarySearch(arr, val) {
  let valFound = -1;
  let min = 0;
  let max = arr.length;
  let guess = 0;
  let iterations = 0;

  // Sort array of ints from min-max
  arr = arr.sort();

  // Let's begin the search
  while(valFound < 0) {
    iterations++;
    guess = Math.floor((max+min)/2);
    if (arr[guess] === val) valFound = guess;
    else {
      if (arr[guess] < val) min = guess;
      if (arr[guess] > val) max = guess;
    }
    if (min >= max) break;
  }
  return {
    valFound,
    maxRunningTime: Math.log2(arr.length)+1,
    iterations
  };
}