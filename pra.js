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