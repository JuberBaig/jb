function printPattern(num) {
    for (let i = 0; i <= (num); i++) {
      let row = "";
      for (let j = 1; j <= (num)-1; j++) {
        row = row + j;
      }
  
      console.log(row);
    }
  }
  
  printPattern(4);