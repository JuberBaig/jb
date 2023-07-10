function searchCount(arr, number) {
    let count = 0;
  
    if( typeof(number) != "number" || number=="" || number == undefined || number == null Array.isArray(arr)=="false")
    {
        return "plzz enter a valid input";    
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number) {
        count++;
      }
    }
    return count;
  }
  
  const arr = [1,2,5,9,4,6,3,5,8,7,5,3,5,6,,5,,3,5,,4,6,,3,4,5,6,8,2];
  const number = 5 ;
  console.log(searchCount(arr, number));