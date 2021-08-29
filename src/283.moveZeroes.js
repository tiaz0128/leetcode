export var moveZeroes = function(nums) {
  nums.sort((a, b) => b === 0 ? -1 : 0)
  return nums
};
