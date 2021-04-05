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
}

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
            let complement = target - cur
            let compIndex = arr.indexOf(complement);
            compIndex < i ? indexArr.push(compIndex, i) : indexArr.push(i, compIndex);
            return indexArr;
        }
    } 
    return false;
};


// Problem 2  -  Reverse Integer

// Solution 1 with BigO(n)

let reverseInteger1 = (int) => {
    let reverseInt = parseInt(int.toString().split('').reverse().join(''));
    reverseInt = int >= 0 ? reverseInt : reverseInt * (-1);
    if (reverseInt < Math.pow(-2, 31) || reverseInt > Math.pow(2, 31)) return 0;
    return reverseInt;
}

// Solution 2
// reverse function without using inbuilt functions with BigO(n)
let reverseInteger2 = (num) => {
    let givenNum = num;
    let reverseInt = '';

    do {
        reverseInt += Math.abs(givenNum) % 10;
        givenNum = parseInt(givenNum / 10);
    } while (Math.abs(givenNum) >= 1)
    reverseInt = parseInt(reverseInt);
    if (reverseInt < Math.pow(-2, 31) || reverseInt > Math.pow(2, 31)) return 0;

    return num >= 0 ? parseInt(reverseInt) : parseInt(reverseInt) * (-1);
}

// Problem 3 - Palindrome Number

// Sol 1 - Converting the number into String and matching both half
let palindrome1 = (num) => {
    let numArr = num.toString().split('');
    let leftStr = '';
    let rightStr = '';
    for (let i = 0; i < numArr.length / 2; i++) {
        leftStr += numArr[i]
    }
    for (let i = numArr.length - 1; i >= (numArr.length % 2 === 0 ? numArr.length / 2 : numArr.length / 2 - 1); i--) {
        rightStr += numArr[i];
    }

    if (leftStr === rightStr) return true;
    else return false;
}

// Sol 2 - using object instead of string with same logic
let palindrome2 = (num) => {
    let numArr = num.toString().split('');
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < numArr.length / 2; i++) {
        obj1[numArr[i]] = true;
    }
    for (let i = numArr.length - 1; i >= (numArr.length % 2 === 0 ? numArr.length / 2 : numArr.length / 2 - 1); i--) {
        obj2[numArr[i]] = true;
    }

    if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
    else return false;
}

// Sol 3 - without converting the number into string ( fastest )
let palindrome3 = (num) => {
    let givenNum = num;
    let reverse = '';
    if(num < 0) return false;
    do{
        reverse += num % 10;
        num = parseInt(num / 10);
    }while(num >= 1)
    return parseInt(reverse) === givenNum ? true : false;
}

// Sol 4 - using inbuilt functions
let palindrome4 = (num) => {
    if(num < 0) return false;
    let reverseInt = num.toString().split('').reverse().join('');
    if(parseInt(reverseInt) === num) return true;
    else return false;
}

function roman_to_Int(str1) {
    if (str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    // num = X
    var pre, curr;

    for (var i = 1; i < str1.length; i++) {
        curr = char_to_int(str1.charAt(i));     // X
        pre = char_to_int(str1.charAt(i - 1));  // X
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
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}
// console.log(roman_to_Int('XXVI'));
// console.log(roman_to_Int('III'));
