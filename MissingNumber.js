/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
const mergeSort=(arr1,arr2)=>{
    let arr=[]
    while(arr1.length && arr2.length ){
        if(arr1[0]<arr2[0]){
              arr.push(arr1.shift());
        }
        else{
             arr.push(arr2.shift());
        }
    }
    return[...arr,...arr1,...arr2]
}
const merge=(arr)=>{
    let half=arr.length/2;
    if(arr.length<=1){
    return arr;
    }
    let left=arr.splice(0,half);
    let right=arr
    return mergeSort(merge(left),merge(right))
}
let sorted=merge(nums)
for(let i=0;i<=sorted.length;i++){
    if(sorted[i]!=i){
        return i
    }
}
};
