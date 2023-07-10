function searchCount(arr, num){
    if(typeof num !="number"){
        return "please enter the valid arguments"
    }
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===num){
            count++;
        }
    }
     if(count==0){
        return -1;
     }
     return count;

}

let arr=[1,2,3,4,5,6,7,8,4,5,6,7,8,9,3,3];

console.log(searchCount(arr,5));