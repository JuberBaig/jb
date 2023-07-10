function printPattern(n){
    for(i = 0; i<=(n); i++)
    if(i % 2 == 0){
        console.log("*");
       }
       else(console.log(`${i}${i}${i}`))
}
printPattern(6)