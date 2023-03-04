/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums=nums.sort((a,b)=>a-b)
    let index=[]
for(let i=0;i<nums.length;i++){
    if(nums[i]==target){
        index.push(i);
    }
    else if(nums[i]>target){
        break
    }
}
return index    
};
