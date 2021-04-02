// CATEGORY === EASY 

// Problem 1 - TWO SUM

const nums = [1, 19, 3, 5];
const sum = 24;

// sol 1 with BigO(n2)

checkForSum = (arr, sum) => {
    let indexArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) indexArr.push(i, j);
        }
    }

    return indexArr;
}

// sol 2 with BigO(n);

// console.log(checkForSum2(nums, sum));

var twoSum = (nums, target) => {
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

// console.log(twoSum([3,2,4],6));


// Problem 2  -  Reverse Integer

reverseInteger = (num) => {
    let revNum = parseInt(num.toString().split('').reverse().join(''));
    if (num < 0) {
        revNum = revNum * (-1);
    }
    if (revNum < (Math.pow(2, 31) * (-1)) || revNum > Math.pow(2, 31)) {
        console.log('inside if');
        return 0;
    }
    return parseFloat(revNum);
}


// Problem 3 - Palindrome Number

// Sol 1 - Converting the number into String

palindromNumber = (num) => {
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

// Sol 2 - using object instead of string

palindromeNumber2 = (num) => {
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

// Sol 3 - without converting the number into string

palindromNumber3 = (num) => {
    let str = '';
    newNum = num;
    console.log(newNum);

    do{
        // if number is negative ( -1 ) , do while loop still run at least once.
        // Due to which str get assigned -1 and num and str becomes equal i,e -1. 
        // So , we need to apply condition only for positive numbers.
        if(num < 0) return false;
        str += newNum % 10;
        newNum = Math.floor(newNum / 10);
        console.log(newNum);
    } while (newNum >= 1);

    if(parseInt(str) === num) return true;
    else return false;
}