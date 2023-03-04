/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const swap=(arr,swapIndex,i)=>{
    let temp=arr[i];
    arr[i]=arr[swapIndex];
    arr[swapIndex]=temp;


}
const pivot=(arra,start=0,end=arra.length-1)=>{
  let swapIndex=start;
  let pivotNumber=arra[start];
  for(let i=start+1;i<arra.length;i++){
    if(pivotNumber>arra[i]){
        swapIndex++;
                swap(arra,swapIndex,i)

    }

  }
          swap(arra,swapIndex,start)
          return swapIndex

}
const quicksort=(arr,start=0,end=arr.length-1)=>{
    if(start<end){
            let pivIndex=pivot(arr,start,end)
         quicksort(arr,start,pivIndex-1)
         quicksort(arr,pivIndex+1,end)

    }
  return arr
}
let nonSorted=[...nums];
let sorted=quicksort(nums);
let arr=[];
for(let i=0;i<sorted.length;i++){
    arr.push(sorted.indexOf(nonSorted[i]))
}


return arr
    
};
