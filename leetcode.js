// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     let reversed = 0;
//     let y = x;
//     while (y > 0) {
//         reversed = reversed * 10 + y % 10;
//         y = Math.floor(y / 10);
//     }
//     return reversed == x;
// };


// leetcode question 1

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i = 0 ; i < nums.length ; i++){
//      for(let j = i+1 ; j<nums.length ; j++){
//          if(target == nums[i] + nums[j]){
//                return [i,j]
//          }

//      }
//     }
// };

//509

// const fib = (n) => {
//     const arr = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }

//     return arr[n];
// };

// if(n==0||n==1)
//     return n;
// while{
//    return fib(n-1) + fib(n-2);
// }