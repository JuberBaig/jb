const profile = {
    name: "One",
    city: "ABC",
  };
  
  // Add new data
  profile.country = "USA";
  profile["country"] = "India";
  
  // Update existing data
  profile.city = "Goa";
  
  console.log("profile", profile);
  console.log("profile.country", profile.country);
  