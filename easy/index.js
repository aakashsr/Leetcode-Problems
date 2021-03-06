// CATEGORY === EASY

// PROBLEM 1 - TWO SUM

const nums = [1, 19, 3, 5];
const sum = 24;

// sol 1 with BigO(n2)

let twoSum1 = (arr, sum) => {
  let indexArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) indexArr.push(i, j);
    }
  }

  return indexArr;
};

// sol 2 with BigO(n);
let twoSum2 = (nums, target) => {
  let complementArr = [];
  let indexArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!complementArr.includes(nums[i])) {
      complementArr.push(target - nums[i]);
    } else {
      const current = nums[i];
      const compIndex = nums.indexOf(target - current);
      compIndex < i ? indexArr.push(compIndex, i) : indexArr.push(i, compIndex);
      return indexArr;
    }
  }
  return false;
};

// Sol 3 with Array.entries() method with BigO(n)
let twoSum3 = (arr, target) => {
  let complementArr = [];
  let indexArr = [];

  for (let [i, elem] of arr.entries()) {
    if (!complementArr.includes(elem)) {
      complementArr.push(target - elem);
    } else {
      let cur = elem;
      let complement = target - cur;
      let compIndex = arr.indexOf(complement);
      compIndex < i ? indexArr.push(compIndex, i) : indexArr.push(i, compIndex);
      return indexArr;
    }
  }
  return false;
};

// Sol 4 with Map Object and best approach with least code ( vv imp)

const twoSum4 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return [map.get(nums[i]), i];
    } else {
      map.set(target - nums[i], i);
    }
  }
};

// Problem 1.2 - Find the number of all pairs that result to given sum ( imp )

// Sol
const pairsWithSum = (nums, target) => {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) !== undefined) {
      count += map.get(target - nums[i]);
    }
    if (map.get(nums[i]) === undefined) {
      map.set(nums[i], 0);
    }
    map.set(nums[i], map.get(nums[i]) + 1);
  }
  return count;
};

// Problem 2  -  Reverse Integer

// Solution 1 with BigO(n)

let reverseInteger1 = (int) => {
  let reverseInt = parseInt(int.toString().split("").reverse().join(""));
  reverseInt = int >= 0 ? reverseInt : reverseInt * -1;
  if (reverseInt < Math.pow(-2, 31) || reverseInt > Math.pow(2, 31)) return 0;
  return reverseInt;
};

// Solution 2
// reverse function without using inbuilt functions with BigO(n)
let reverseInteger2 = (num) => {
  let givenNum = num;
  let reverseInt = "";

  do {
    reverseInt += Math.abs(givenNum) % 10;
    givenNum = parseInt(givenNum / 10);
  } while (Math.abs(givenNum) >= 1);
  reverseInt = parseInt(reverseInt);
  if (reverseInt < Math.pow(-2, 31) || reverseInt > Math.pow(2, 31)) return 0;

  return num >= 0 ? parseInt(reverseInt) : parseInt(reverseInt) * -1;
};

// Problem 3 - Palindrome Number

// Sol 1 - Converting the number into String and matching both half
let palindrome1 = (num) => {
  let numArr = num.toString().split("");
  let leftStr = "";
  let rightStr = "";
  for (let i = 0; i < numArr.length / 2; i++) {
    leftStr += numArr[i];
  }
  for (
    let i = numArr.length - 1;
    i >= (numArr.length % 2 === 0 ? numArr.length / 2 : numArr.length / 2 - 1);
    i--
  ) {
    rightStr += numArr[i];
  }

  if (leftStr === rightStr) return true;
  else return false;
};

// Sol 2 - using object instead of string with same logic
let palindrome2 = (num) => {
  let numArr = num.toString().split("");
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < numArr.length / 2; i++) {
    obj1[numArr[i]] = true;
  }
  for (
    let i = numArr.length - 1;
    i >= (numArr.length % 2 === 0 ? numArr.length / 2 : numArr.length / 2 - 1);
    i--
  ) {
    obj2[numArr[i]] = true;
  }

  if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
  else return false;
};

// Sol 3 - without converting the number into string ( fastest )
let palindrome3 = (num) => {
  let givenNum = num;
  let reverse = "";
  if (num < 0) return false;
  do {
    reverse += num % 10;
    num = parseInt(num / 10);
  } while (num >= 1);
  return parseInt(reverse) === givenNum ? true : false;
};

// Sol 4 - using inbuilt functions
let palindrome4 = (num) => {
  if (num < 0) return false;
  let reverseInt = num.toString().split("").reverse().join("");
  if (parseInt(reverseInt) === num) return true;
  else return false;
};

// Problem 4 - Roman to Integer

// Sol 1 - Using Switch statement
function roman_to_Int1(str1) {
  if (str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i)); // X
    pre = char_to_int(str1.charAt(i - 1)); // X
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
}

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

// Solution 2 - Using Object
let roman_to_Int2 = (roman) => {
  let num = char_to_integer(roman.charAt(0));
  for (let i = 1; i < roman.length; i++) {
    let pre = char_to_integer(roman[i - 1]);
    let curr = char_to_integer(roman[i]);
    if (pre >= curr) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
};

char_to_integer = (char) => {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return romanToInt[char];
};

// Solution 3 - Using for loop from index 0

let roman_to_Int3 = (roman) => {
  var charToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    let cur = charToInt[roman[i]];
    let next = charToInt[roman[i + 1]];

    if (next) {
      // this above condition i,e if(next)  is there only to cover the last index where cur will contain value at last index but "next" will becomes "undefined" . So , this make sure if "next" next becomes "undefined" , just add "cur" to sum.
      if (cur < next) {
        sum -= -cur;
      } else {
        sum += cur;
      }
    } else {
      sum += cur;
    }
  }
  return sum;
};

// Sol : 4 - By using less number of iterations

/* Logic 
if ( cur < next ) => then add (next - cur) to sum and increment i by 2
else add only "cur" to sum

Ex - MCMXCIV 
i = 0 
cur = M => 1000 & next = C => 100 
cur > next => sum += cur;
sum = 1000

i = 1; 
cur = C => 100 & next = M => 1000
cur < next => sum = sum + (next - cur) 
i+= 2
sum = 1900 

Note : We are incrementing i by 2 , because we are taking both cur and next into consideration when "cur < next"
*/

const roman_to_Int4 = (roman) => {
  var charToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    let cur = charToInt[roman[i]];
    let next = charToInt[roman[i + 1]];

    if (next) {
      if (cur < next) {
        sum = sum + (next - cur);
        i++;
      } else {
        sum += cur;
      }
    } else {
      sum += cur;
    }
  }

  return sum;
};

// Sol 4 - V2 - Using while loop

const romanIntoInteger6 = (roman) => {
  var charToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  let i = 0;

  while (roman[i] !== undefined) {
    let cur = charToInt[roman[i]];
    let next = charToInt[roman[i + 1]];

    if (cur < next) {
      sum = sum + (next - cur);
      i += 2;
    } else {
      sum += cur;
      i += 1;
    }
  }
  return sum;
};

// Problem 5 - Longest Common Prefixes

// Solution 1 - BigO(n2)

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

let strs = ["slack", "slacu", "slow"];

let longestCommonPrefix = (str) => {
  console.log(str);
  let common = [];
  let common2 = [];
  let firstItem = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      // console.log(str[i].length);
      if (i === 0) {
        firstItem.push(str[i][j]);
      }
      if (i > 0) {
        console.log(str[i][j], firstItem[j]);
        if (str[i][j] === firstItem[j]) {
          if (!common.includes(str[i][j])) {
            common.push(str[i][j]);
          }
        }
      }
    }
  }
  console.log(common);
};

// longestCommonPrefix(strs);

// Problem 6 - Remove Duplicates

// SOL 1 - Brute Force method - BigO(n2)

let arr = [0, 0, 23, 1, 1, 1, 2, 2, 3, 3, 4];

let removeDuplicates1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

// SOL 2 - Using Extra Array - BigO(n)
let removeDuplicates2 = (arr) => {
  let uniqueArr = [];
  arr.forEach((elem) => {
    if (!uniqueArr.includes(elem)) uniqueArr.push(elem);
    else return false;
  });
  return uniqueArr;
};

// SOL 3 - Using JS inbuilt function ( not working in leetcode)
let removeDuplicates3 = (arr) => {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    // console.log(acc);
    return acc;
  }, []);
};

// SOL 4 - Using O(1) memory and O(N) complexity

/* Approach - Since array is already sorted , we took two pointer i and j and matched the adjacent element , if they are equal , we remove one of the occurances of element . Now , as the size of array is shortened by 1 , to retain the value of i and j , we need to decrement both by one. We repeat this , until we reach end of array.

*/

let removeDuplicates4 = (arr) => {
  for (let i = 0, j = i + 1; i < arr.length; i++, j++) {
    if (arr[i] === arr[j]) {
      arr.splice(i, 1);
      i -= 1;
      j -= 1;
    }
  }
  return arr;
};

// SOL 4(version 2) - Using O(1) memory and O(N) complexity

const removeDuplicates5 = (arr) => {
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(i, 1);
      j--;
    } else {
      i++;
    }
  }
  arr.length = i;
  return arr;
};

// SOL 5 - Using O(1) memory and O(N) complexity

/* Logic - Since the array is already sorted, we can keep two pointers i and j, where i is the slow-runner while j is the fast-runner. As long as nums[i] === nums[j], we increment j to skip the duplicate.
When we encounter nums[j] !== nums[i], the duplicate run has ended so we must copy its value to nums[i + 1], i is then incremented and we repeat the same process again until j reaches the end of array.
 */

const removeDuplicates6 = (arr) => {
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  arr.length = i + 1;
};

// Problem 7 - Merge Sorted Array ( don't return a new array instead return the first array as resultant array)

/* Algo :
 1. loop over "nums2" array until i < nums2.length or nums2[i] becomes "undefined"
 2. compare each item of nums2 array with nums1 array . If "nums2" array item is less than "nums1" array item or nums1[i] is "undefined", use splice method to insert that "nums2[j]" number into "nums1" array and then increment both "i" and "j".
 3. Else i,e if nums1[i] < nums2[j] , just increment i as it's already sorted.
*/

const merge = (nums1, m, nums2, n) => {
  // remove the zeros from the Array
  nums1.splice(m, nums1.length - m);
  let i = 0;
  let j = 0;

  while (nums2[j] !== undefined) {
    // or j < nums2.length
    if (nums1[i] === undefined || nums1[i] >= nums2[j]) {
      // if nums2[j] is smaller than arr1[i] , then push nums2[j] at i position in nums1
      nums1.splice(i, 0, nums2[j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  return nums1;
};

// Problem 8 - Merge String Alternatively

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

/* Algo : 
1. Get the longer array , say "maxLength"
2. Loop upto "maxLength"
3. Create a new string and keep adding str1 character and str2 character alternatively until their lengths
*/

const mergeStr = (str1, str2) => {
  let mergedStr = "";
  const maxLength = str1.length > str2.length ? str1.length : str2.length;
  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) mergedStr += str1[i];
    if (i < str2.length) mergedStr += str2[i];
  }
  return mergedStr;
};

// Problem 9 - Merge Sorted Array and return the result in a new Array object

/* Algo:
1. Loop until any of the array item becomes "undefined"
2. If "nums2" item is less than "nums1" or nums1 item becomes "undefined" , then push "nums2" item into new array 
3. Else push "nums1" item.
4. Return the final array.
*/

const merge2 = (nums1, nums2) => {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (nums1[i] !== undefined || nums2[j] !== undefined) {
    if (nums1[i] === undefined || nums1[i] >= nums2[j]) {
      mergedArr.push(nums2[j]);
      j++;
    } else {
      mergedArr.push(nums1[i]);
      i++;
    }
  }
  return mergedArr;
};

// Problem 10 - Shuffle The Array

// Sol 1 - By returning new array.

const shuffleArray = (nums, n) => {
  let shuffledArr = [];
  for (let i = 0; i < n; i++) {
    shuffledArr.push(nums[i], nums[n + i]);
  }
  return shuffledArr;
};

// Sol 2 - Inplace Algo

const shuffleArray2 = (nums, n) => {
  let i = -1;
  j = n;
  while (nums[i + 1] !== undefined) {
    let temp = nums[j];
    nums.splice(j, 1);
    nums.splice(i + 2, 0, temp);
    i += 2;
    j += 1;
  }
  return nums;
};

// Problem 11 - JEWELS and STONES

// Sol 1 Using "includes()"

var numJewelsInStones = (jewels, stones) => {
  let count = 0;
  if (jewels.length < 1) {
    return "There is no jewels";
  } else if (stones.length > 50) {
    return "You can have max 50 stones!";
  } else {
    for (let i = 0; stones.length <= 50; i++) {
      if (jewels.includes(stones[i])) count++;
    }
  }
  return count;
};

// Sol 2 Using "filter()"

const numJewelsInStones2 = (jewels, stones) => {
  if (jewels.length < 1) {
    return "There is no jewels";
  } else if (stones.length > 50) {
    return "You can have max 50 stones!";
  } else {
    return [...stones].filter((stone) => jewels.includes(stone)).length;
  }
};

// Problem 12 - How Many Numbers Are Smaller Than the Current Number

// Sol 1 - Using while and for loop  - O(n2)

var smallerNumbersThanCurrent = function (nums) {
  let i = 0;
  const result = [];
  while (i < nums.length) {
    let count = 0;
    let cur = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < cur) {
        count++;
      }
    }
    result.push(count);
    i++;
  }
  return result;
};

// Sol 2 - Using map() and filter() functions - One liner - O(n2)

const smallerNumbersThanCurrent2 = (nums) => {
  return nums.map((number) => nums.filter((cur) => number > cur).length);
};

// Sol 3 - Using JS sort() - O(n)  - Amazing solution

let smallerNumbersThanCurrent3 = function (nums) {
  let sortedArr = [...nums].sort(function (a, b) {
    return a - b;
  });
  return nums.map((val) => sortedArr.indexOf(val));
};

// Problem 13  Shuffle String

const shuffleString = (s, indices) => {
  let shuffledArr = [];
  for (let i = 0; i < s.length; i++) {
    let index = indices[i]; // get the index of the
    let current = s[i]; // get the current value
    shuffledArr[index] = current; // assign the value at index
  }
  return shuffledArr.join("");
};

// Problem 14 Decompress Run-Length Encoded List

const mergeList = (nums) => {
  let arr = [];
  for (let i = 0, j = 1; i < nums.length; i += 2, j += 2) {
    let freq = nums[i];
    let value = nums[j];

    for (let k = 0; k < freq; k++) {
      arr = arr.concat([value]);
    }
  }
  return arr;
};

// Problem 15 Count Items Matching a Rule

// Sol 1
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type" && items[i][0] === ruleValue) {
      count++;
    } else if (ruleKey === "color" && items[i][1] === ruleValue) {
      count++;
    } else if (ruleKey === "name" && items[i][2] === ruleValue) {
      count++;
    }
  }
  return count;
};

// Sol 2

var countMatches = function (items, ruleKey, ruleValue) {
  return items.filter((item) => {
    return (
      (ruleKey === "type" && ruleValue === item[0]) ||
      (ruleKey === "color" && ruleValue === item[1]) ||
      (ruleKey === "name" && ruleValue === item[2])
    );
  }).length;
};

// Problem 16  Maximum Product Difference Between Two Pairs

// Sol1 - Wihout using "sort()"

var maxProductDifference = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  nums.splice(nums.indexOf(max), 1);
  nums.splice(nums.indexOf(min), 1);
  let max2 = Math.max(...nums);
  let min2 = Math.min(...nums);

  return max * max2 - min * min2;
};

// Sol 2 - Using sort()

var maxProductDifference = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  let max1 = sortedArr[sortedArr.length - 1];
  let max2 = sortedArr[sortedArr.length - 2];
  let min1 = sortedArr[0];
  let min2 = sortedArr[1];

  return max1 * max2 - min1 * min2;
};

// Problem 17 - Count the number of consistent strings in

/* Approach:
1. Convert allowed string into array.
2. Set the count to length of words array.
3. Use nested loop over "words" array.
4. If the character is not preset in "allowed" array , decrement the count and break.
*/

// Sol 1 - Using nested loops

var countConsistentStrings = function (allowed, words) {
  const allowedArr = [...allowed];
  let count = words.length;

  for (let i = 0; i < words.length; i++) {
    for (j = 0; j < words[i].length; j++) {
      if (!allowedArr.includes(words[i][j])) {
        count--;
        break;
      }
    }
  }
  return count;
};

// Sol 2 - Using reduce() and every()

const countConsistentStrings = (allowed, words) =>
  words.filter((word) => [...word].every((letter) => allowed.includes(letter)))
    .length;

// Problem 18  - Check If Two String Arrays are Equivalent

// Sol 1 - Using join()

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("") ? true : false;
};

// Sol 2 - Using for loops

var arrayStringsAreEqual = function (word1, word2) {
  let str1 = "";
  let str2 = "";
  for (let i = 0; i < word1.length; i++) {
    str1 += word1[i];
  }

  for (let i = 0; i < word2.length; i++) {
    str2 += word2[i];
  }

  return str1 === str2 ? true : false;
};

// Problem 19 - Find the Highest Altitude

var largestAltitude = function (gain) {
  let maxAltitude = 0;
  let newHeight = 0;
  for (let i = 0; i < gain.length; i++) {
    newHeight = newHeight + gain[i];
    if (newHeight > maxAltitude) {
      maxAltitude = newHeight;
    }
  }
  return maxAltitude;
};

// Problem 20 - Maximum Subarray

// Sol 1 - If arr contains both +ve and -ve numbers

const maximumSubarray = (nums) => {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

// Sol2 - For all cases ( Optimal Solution )

const maxSubArray = (nums) => {
  let maxGlobal = nums[0];
  let maxCurrent = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent + nums[i] > nums[i]
      ? (maxCurrent = maxCurrent + nums[i])
      : (maxCurrent = nums[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
};

// Problem 21 - Move Zeroes

// Sol 1 In place algo - Space - O(1) and Time - O(n)

const moveZeroes2 = (nums) => {
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
};

// sol 2 - Space - O(n) and Time - O(n)

const moveZeroes3 = (nums) => {
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newArr.push(nums[i]);
      counter++;
    }
  }

  for (let i = counter; i < nums.length; i++) {
    newArr.push(0);
  }
  return newArr;
};

// Problem 22 - Contains Duplicates

const containDuplicates = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};

// Problem 23 - Majority Element
const majorityElement = (nums) => {
  let index = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] === nums[i]) {
      count++;
    } else {
      count--;
    }

    if (count == 0) {
      index = i;
      count = 1;
    }
  }
  return nums[index];
};

// Problem 24 - Intersection of two arrays

// Sol 1 - Using Set()
const intersection = (nums1, nums2) => {
  const num1Set = new Set(nums1);
  const num2Set = new Set(nums2);

  const result = [];

  for (var value of num1Set) {
    if (num2Set.has(value)) {
      result.push(value);
    }
  }

  return result;
};

// Sol 2 - Using Array "includes()" method
const intersection = (nums1, nums2) => {
  const intersectionArr = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      if (!intersectionArr.includes(nums1[i])) {
        intersectionArr.push(nums1[i]);
      }
    }
  }
  return intersectionArr;
};

// Problem 25 - Intersection of two arrays II

// Sol 1 - Using Hashmaps

var intersect1 = function (nums1, nums2) {
  let map = new Map();
  for (let n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  let finalArr = [];
  for (let n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      finalArr.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return finalArr;
};

// Sol 2 - Using includes

var intersect2 = function (nums1, nums2) {
  const intersectionArr = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      intersectionArr.push(nums1[i]);
      const index = nums2.indexOf(nums1[i]);
      nums2.splice(index, 1);
    }
  }
  return intersectionArr;
};

// Problem 26 - Find all numbers disappeared in an array

var findDisappearedNumbers = function (nums) {
  let newSet = new Set(nums);
  const resArr = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!newSet.has(i)) {
      resArr.push(i);
    }
  }
  return resArr;
};

// Problem 27 - Happy Number

var isHappy = function (n) {
  let set = new Set();
  while (!set.has(n)) {
    set.add(n);
    let sqSum = 0;
    while (n > 0) {
      sqSum += (n % 10) ** 2;
      n = parseInt(n / 10);
    }

    if (sqSum === 1) {
      return true;
    } else {
      n = sqSum;
    }
  }
  return false;
};

// Problem 28 (i) - Reverse Linked List

const reverseLinkedList = (head) => {
  let prev = null;
  let cur = head;
  let next = null;

  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev; // prev will become the head at the end of loop.
};

// Problem 28(ii) - Reverse Linked List ( recursively )

function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

// Problem 29 - Random Note

// Sol 1 - Using object

const ransomNoteOne = (ransomNote, magazine) => {
  let map = {};
  for (let char of magazine) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }

  for (let char of ransomNote) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return true;
};

// Sol 2 - Using Map Object

const ransomNoteTwo = (ransomNote, magazine) => {
  let map = new Map();
  for (let char of magazine) {
    if (!map.has(char)) {
      map.set(char, 0);
    }
    map.set(char, map.get(char) + 1);
  }

  for (let char of ransomNote) {
    if (!map.get(char)) {
      // make sure to use "get()" to get the value associated with key not "has()"
      return false;
    }
    map.set(char, map.get(char) - 1);
  }
  return true;
};

// Problem 30 : First Unique char of string

var firstUniqChar = function (s) {
  let map = {};
  for (let char of s) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }
  for (let char in map) {
    if (map[char] === 1) {
      return s.indexOf(char);
    }
  }
  return -1;
};
