
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubArray(nums) {
  if (!nums) return 0
  if (nums.length === 0) return null
  let sum = nums[0]
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] <= nums[i]) {
      sum = nums[i]
    } else {
      sum += nums[i]
    }
    if (sum > maxSum) {
      maxSum = sum
    }
  }
  return maxSum;
}

module.exports = {
  maxSubArray
}