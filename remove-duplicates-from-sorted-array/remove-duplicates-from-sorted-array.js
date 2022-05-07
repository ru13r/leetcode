/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  // Define a counter to reassign nums
  let j = 0;
  // Iterate through input array
  for (let i = 0; i < nums.length ; i++) {
    // Check if curr elem is same as next elem
    if (nums[i] !== nums[i + 1]) {
      // reassign nums and increment counter
      nums[j] = nums[i];
      j++;
    }

  }
  //Slice nums from index 0 to counter and return nums length
  nums.splice(j, nums.length - j);
  return j;
};
