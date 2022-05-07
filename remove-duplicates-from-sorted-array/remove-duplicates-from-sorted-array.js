/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let ubound = nums.length;
  let i = 0;
  let j = 1;
  let k = 0;
  while (i < ubound && j <= ubound) {
    if (nums[i] === nums[j]) {
      j++;
      continue;
    }
    if ( j - i > 1) {
      k = j - i - 1;
      for (let l = i + 1; l < ubound; l++) {
        nums[l] = (l + k < ubound) ? nums[l+k] : null;
      }
      ubound = ubound - k;
    }
    i++;
    j = i + 1;
  }
  return ubound;
};
