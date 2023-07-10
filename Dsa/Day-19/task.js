const CountName = (input) => {
    const mapping = {};
  
    for (let i = 0; i < input.length; i++) {
      const Key = input[i];
  
      if (mapping.hasOwnProperty(Key)) {
        mapping[Key] = mapping[Key] + 1; 
      } else {
        mapping[Key] = 1;
      }
    }
  
    return mapping;
  }
  
  console.log(CountName(["ankit",
  "chirag",
  "mitesh",
  "mahesh",
  "ankit",
  "sanket",
  "Sanket",]));
  