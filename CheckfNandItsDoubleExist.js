/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
let cond=false
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length;j++){
        if(i!=j && arr[i]==2*arr[j]){
            console.log(i,j)
            cond=true
            break
        }
    }
}
return cond
    
};
