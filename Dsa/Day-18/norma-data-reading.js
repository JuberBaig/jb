const product = {
    id: 1,
    name: "iPad Pro 11 Inch",
    brand: "Apple",
    price: 78000,
    currency: "INR",
  };
  
  const uName = product.name;
  const price = product.price;
  const isActive = product.isActive || "Not Available";
  
  const message = `I'm buying ${product.brand} ${product.name}`;
  
  console.log(uName, price, isActive, message);
  
  console.log({ uName, price, isActive, message });
  
  
  
  // ES6 Ways
  //Destructuring
  
  
  