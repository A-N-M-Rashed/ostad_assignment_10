//Solution 1
function calculateDifference(val1, val2) {
    return Math.abs(val1 - val2);
}

console.log("Diference: " + calculateDifference(1, 2));
//Solution 1 Ends

//Solution 2
function isOdd(val) {
    if (val % 2 == 0) return false;
    if (val % 2 != 0) return true;
}

console.log("isOdd: " + isOdd(4));
//Solution 2 Ends

//Solution 3
const nums = [];
function findMin(nums) {
    console.log("Smallest number: " + Math.min(...nums));
}

findMin([5, 3, 4]);
//Solution 3 ends

//Solution 4
const numbers = [66, 70, 71, 29];
const newArr = numbers.filter(filterEvenNumbers);
function filterEvenNumbers(number) {
    if (number % 2 == 0) {
        return number;
    }
}

console.log("filtered even numbers: " + newArr);
//Solution 4 Ends

//Solution 5

const old_arr = [1, 30, 4, 21, 55];
console.log("Array in Decending Order: " + old_arr.sort(sortArrayDescending));
function sortArrayDescending(a,b) {
    return b-a;
}
//Solution 5 Ends

//Solution 6
function lowercaseFirstLetter(s){
    console.log("First Letter Lowercase: " + s[0].toLowerCase()+s.substr(1));
}

lowercaseFirstLetter("OSTAD");
//Solution 6 Ends

//Solution 7
function findAverage(arr){
    let result=0;
    for(number of arr){
        result+=number;
    }

    result=result/(arr.length);

    console.log("Average : " + result);
}

findAverage([10, 20]);
//Solution 7 Ends

//Solution 8 
function isLeapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }
    else{
        return false;
    }

}

console.log("isLeapYear: " + isLeapYear(2004));
//Solution 8 Ends