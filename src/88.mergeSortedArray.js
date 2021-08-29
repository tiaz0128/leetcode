/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 export var merge = function(nums1, m, nums2, n) {
  let cnt = 0;
  nums1.sort((a, b) => b === 0 ? -1 : 0)
  
  let i;
  for(i = nums1.length - 1; ; i--){
    if(nums1[i] === 0) cnt++;
    else break;
  }
 
 const c = nums2.length > cnt ? cnt : nums2.length
 nums1.splice(i + 1, c, ...nums2)
 nums1.sort((a, b) => a - b)

 return nums1
}
