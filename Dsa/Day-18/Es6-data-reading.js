const product2 = {
    id: 1,
    productName: "iPad Pro 11 Inch",
    productBrand: "Apple",
    productPrice: 78000,
    productCurrency: "INR",
  };
  
  const { productName, productBrand, isActive = "Not Available" } = product2;
  
  const message = `I'm ${productBrand} ${productName} ${isActive}`;
  
  console.log({ message });
  