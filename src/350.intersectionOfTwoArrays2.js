export var intersect = function(nums1, nums2) {
  const map = new Map()
  const result = []

  nums1.forEach(num => map.set(num, map.has(num) ? map.get(num) + 1 : 1))
  nums2.some(num => {
    if(result.length === nums1.length || result.length === nums2.length) return true
    
    const targetCnt = map.get(num);
    if(targetCnt > 0) {
      result.push(num)
      map.set(num, targetCnt - 1)
    }
  })

  return result
};