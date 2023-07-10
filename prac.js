function juberBaig(num){
    var newString=" "
    for(var i = num.length-1; i>=0; i--){
        newString = newString + num[i];

    }
    return newString;
}
console.log(juberBaig("juber"));