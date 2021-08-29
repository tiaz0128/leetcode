export var rotate = function(nums, k) {
  const idx = k % nums.length;
  const cuttingNumer = nums.splice(nums.length - idx)
  nums.splice(0, 0, ...cuttingNumer)
  return nums
};
