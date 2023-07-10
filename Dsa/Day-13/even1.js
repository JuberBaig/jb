const arr = [ 2,4,5,6,7]

function printPattern(num){
   let num=0;
    for(let i=0; i<num.lenth; i++ ){
        if(num[i] % 2 ==0)
        sum= sum + num[i]
    }
    return sum; 
}
console.log(printPattern(arr))


function negativesum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < 0) {
            sum += arr[j];
          }
        }
        return sum;
      }
    }
  }
  
