const arr= [1,2,3,4,3,2,1]

for( let i=0; i < arr.length; i++){
    for(let j=1; j < arr.length; j++){
        if(arr[i]==arr[j]){
            arr[i]=undefined;
        }
    }
}
for(let i=0; i < arr.length; i++){
    if(arr[i] != undefined){
        console.log(arr[i]);
    }
}