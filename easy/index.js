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

var twoSum =  (nums, target) => {
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

// console.log(reverseInteger(-123667577));