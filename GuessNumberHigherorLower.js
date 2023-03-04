/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

let start=0;
let end=n;
let mid=Math.floor((start+end)/2);
    while(guess(mid)!=0){
        if(guess(mid)==-1){
                        end=mid-1

        }
        else if(guess(mid)==1){
                        start=mid+1;

        }
        mid=Math.floor((start+end)/2);

    }
  return mid  
};
