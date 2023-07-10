function countFreg(arr, n){
    let  visited = Array.from({length: n}, (_, i) =>false);
    for( let i=0; i < n; i++){
        if(visited[i]== true)
        continue;

        let count= 1;
        for(let j=i+1; j<n; j++){
            if(arr[i]== arr[j]){ 
                visited[j]=true;
                count++;
            }
            
        }
        return(arr[i] + " " + count + "<br/>");
    }

}
let arr = [1,2,3,1,3,4,1];
let n = arr.length;
console.log(countFreg(arr, n));




