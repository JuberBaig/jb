const checkAnagram = (str1, str2) => {
    const arr1 = str1.split("");
    const arr2 = str2.split("");
  
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr2.splice(j, 1);
          console.log("Splice: ", arr2);
          break;
        }
      }
    }
  
    console.log({ str1, str2 });
    return arr2.length > 0 ? false : true;
  };
  
  console.log(checkAnagram("carrace", "racecar"));

  


  function anagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr2[index] = 0;
      } else {
        return false;
      }
    }
    return arr2.every((char) => char === 0);
  }
  