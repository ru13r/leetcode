/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let ubound = nums.length;
  for (let i = 0; i < ubound; i++) {
    if (nums[i] === val) {
      nums[i] = nums[ubound - 1];
      nums[ubound - 1] = null;
      ubound--;
      i--;
    }
  }
  return ubound;
};