// Problem 1 - Rotate Array

// Sol1 - time : O(n) space : O(1)

const rotate = (nums, k) => {
  const n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  function reverse(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
};

// Sol1 - time : O(n) space : O(n)

const rotate2 = (nums, k) => {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newArr[(i + k) % nums.length] = nums[i];
  }

  for (let i = 0; i < newArr.length; i++) {
    nums[i] = newArr[i];
  }
};
