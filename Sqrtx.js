/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0) return 0
    let  start=1;
let end=x;
let middle=0
while(end-start>1){
     middle=Math.floor((start+end)/2)

    if(middle*middle>x){
        end=middle
    }
    else{
        start=middle
    }
}

 return start
    
};
