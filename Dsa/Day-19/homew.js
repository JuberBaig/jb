const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];

/**
 * @description Method to find two sum pair
 * @param {Numer[]} arr
 * @param {Numer} k
 * @returns {Number[]}
 */
const findTwoElementPair = (arr, k) => {
  // Write code here
};

console.log(findTwoElementPair(nums, 7));


function findTwoElementPair(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
            (arr[i]+arr[j]==sum)
   {
      sum = arr[i];
      for (let j = i + 1; j < arr.length; j++) 
        }
      }
      return sum;
    }
  }
}

