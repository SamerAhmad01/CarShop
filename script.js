function getShops() {
  var selectedBrand = document.getElementById("car-brand").value;
  var shopListDiv = document.getElementById("shop-list");
  shopListDiv.innerHTML = ""; // Clear previous shop list

  if (selectedBrand === "") {
    return; // No brand selected
  }

  // Filter shops by selected brand
  var filteredShops = shops.filter(function (shop) {
    return shop.brand_specialization === selectedBrand;
  });

  // Display filtered shops
  filteredShops.forEach(function (shop) {
    var shopDiv = document.createElement("div");
    shopDiv.classList.add("shop");
    shopDiv.innerHTML = `
      <h2>${shop.name}</h2>
      <p>Brand Specialization: ${shop.brand_specialization}</p>
      <p>Phone Number: ${shop.phone_number}</p>
      <p>Rating: ${shop.rating}</p>
    `;
    shopListDiv.appendChild(shopDiv);
  });
}

// Mock data (replace with actual JSON data)
var shops = [
  {
    "name": "AutoFix",
    "brand_specialization": "Toyota",
    "phone_number": "+97178896600",
    "rating": 4.5
  },
  {
    "name": "CarCare",
    "brand_specialization": "Honda",
    "phone_number": "+9715452454783",
    "rating": 4.2
  },
  {
    "name": "SpeedyService",
    "brand_specialization": "Ford",
    "phone_number": "+9715452454783",
    "rating": 4.8
  }
];
