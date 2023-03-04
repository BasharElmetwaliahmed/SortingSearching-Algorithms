/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let j=0;
for(let i=1;;i++){
    if(!arr.includes(i)){

        j++
    }
   if(!arr.includes(i) && j==k){
        return i;
    }

}
    
};
