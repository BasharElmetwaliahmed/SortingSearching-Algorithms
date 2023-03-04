/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let strings=s.split(" ");
let finalstringarray=[]
for(let i=0;i<strings.length;i++){
   let ind=parseInt(strings[i][strings[i].length-1]);
   let str=strings[i].slice(0,strings[i].length-1)
   finalstringarray[ind-1]=str;
}
return finalstringarray.join(' ')
    
};
