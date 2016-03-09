/**
 * Created by SayaliJ on 3/2/2016.
 */

function display(divnm, result) {
    var ans = document.getElementById(divnm);
    ans.innerHTML = ans.innerHTML + result;
}

/********Write a function that accepts an array of numbers as an argument and returns their average.*****************/
var exercise1 = function (nums) {
    var sum = 0;
    nums.forEach(function (val) {
        sum = sum + val;
    });
    sum = sum / (nums.length);
    return sum;
};

/********Write a function that accepts an array of numbers as an argument and returns the largest number in the array.*/
var exercise2 = function (nums) {
    var largest = nums[0], i;
    for (i = 1; i < nums.length; i += 1) {
        if (largest < nums[i]) {
            largest = nums[i];
        }
    }
    return largest;
};

/*******Write a function that accepts an array of numbers and returns true if it contains at least one even number,
 false otherwise.************/
var exercise3 = function (nums) {
    var i;
    for (i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 === 0) {
            return true;
        }
    }
    return false;
};

/********Write a function that accepts an array of numbers and returns true if every number is even, false otherwise.**********/
var exercise4 = function (nums) {
    var i;
    for (i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
};

/*******Write a function that accepts two arguments—an array of strings and a string—and returns true if the
 string is contained in the array, false otherwise.*********/
var arrayContains = function (strings, match) {
    var i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            return true;
        }
    }
    return false;
};

/********Write a function that is similar to the previous one, but returns true only if the array contains the
 given string at least twice.**********/
var arrayContainsTwo = function (strings, match) {
    var res = 0, i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            res += 1;
            if (res === 2) {
                return true;
            }
        }
    }
    return false;
};

/********Write a function that is similar to the previous one, but returns true only if the array contains the
 given string at least thrice.**********/
var arrayContainsThree = function (strings, match) {
    var res = 0, i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            res += 1;
            if (res === 3) {
                return true;
            }
        }
    }
    return false;
};

/*********Write a function that accepts three arguments and returns true if the array contains the element n times,
 where n is the third argument.***********/
var arrayContainsNTimes = function (strings, match, n) {
    var res = 0, i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            res += 1;
            if (res === n) {
                return true;
            }
        }
    }
    return false;
};

/*********Write a function that accepts an array of numbers as an argument and returns the largest number in the array
  using underscore.js)************/
var findMax = function (nums) {
    return (_.max(nums));
};

/*********Write a function that accepts an array of numbers and returns true if it contains at least one even number,
 false otherwise (using underscore.js)**************/
var findEven = function (nums) {
    var even;
    even = _.some(nums, function (num) {
        return num % 2 === 0;
    });
    return even;
};

/*********Write a function that accepts an array of numbers and returns true if every number is even, false
 otherwise (using underscore.js)************/
var findAllEven = function (nums) {
    var even;
    even = _.every(nums, function (num) {
        return num % 2 === 0;
    });
    return even;
};

/***********************************************************************************************************************/
function assignment3(){
    display("avg", exercise1([3,5,35,76,34]));
    display("max", exercise2([122, 37, 446, 56]));
    display("oneEven", exercise3([1, 2, 3, 5, 11]));
    display("allEven", exercise4([2, 86, 24, 6, 202]));
    display("arrayC", arrayContains(["world", "hi"], "hi"));
    display("array2", arrayContainsTwo(["hello", "welcome", "world", "hello"], "hello"));
    display("array3", arrayContainsThree(["test", "web", "programming", "web", "web"], "web"));
    display("arrayN", arrayContainsNTimes(["js", "css", "html", "js", "java","js", "ajax", "bootstrap", "js"], "js", 4));
    display("findMax", findMax([1, 2, 343, 4]));
    display("findEven", findEven([79, 555, 47, 63, 44, 23]));
    display("findAllEven", findAllEven([2, 78, 42, 16]));
}
document.onload(assignment3());