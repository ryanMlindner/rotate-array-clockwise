function rotateArray(arr, k) {
  if (arr.length - k < 0) {
    k = k % arr.length
  }
  let sliceIndex = arr.length - k;
  if (sliceIndex === 0) {
    return arr
  }
  rightHalf = arr.slice(sliceIndex, arr.length);
  leftHalf = arr.slice(0, sliceIndex);
  newArray = rightHalf + ',' + leftHalf;
  return newArray;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
/**
 * given array A, rotate the values of the array rightward by K units
 * check that k is smaller than length of A, if not then divide k by A, take the remainder
 * then store k values in a subarray B, add the values of the rest of the array A to the end
 * of subarray B and return 
 */
// And a written explanation of your solution
/**
 * taking an array and rotating it clockwise is simpler to do on paper than by computer, but not by much
 * just take the amount that you want to rotate the array by, splice it at that index (from the back, not front)
 * and put the spliced array in front of the remainder of the array
 * in the case that the array length and the amount to rotate by is the same, return the array unchanged
 */