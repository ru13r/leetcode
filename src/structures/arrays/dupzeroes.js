/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
  if (arr.length > 1) {
    const ubound = arr.length - 1;
    let i = 0;
    let j = 0;
    while (i < ubound) {
      if (arr[i] === 0) {
        // duplicate and shift
        i++;
        for (j = ubound; j > i; j--) {
          arr[ j ] = arr[ j - 1 ];
        }
        arr[i] = 0;
      }
      i++;
    }
  }

};

export default duplicateZeros;