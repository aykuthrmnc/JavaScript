const fs = require("fs");
const { faker } = require('@faker-js/faker');

const electronics = [
  "Telefon",
  "Bilgisayar",
  "Tablet",
  "Televizyon",
  "Kulaklık",
  "Hoparlör",
  "Oyun Konsolu",
  "Akıllı Saat",
  "Akıllı Bileklik",
  "Kamera",
];
const prices = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000];

let products = [];

for (let i = 0; i < 500; i++) {
  let productName = electronics[Math.floor(Math.random() * electronics.length)];
  let price = prices[Math.floor(Math.random() * prices.length)];
  let product = {
    id: i + 1,
    name: productName + " " + faker.commerce.productName(),
    price: price,
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    category: "Elektronik",
  };
  products.push(product);
}

fs.writeFile("elektronik_urunler.json", JSON.stringify(products, null, 2), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Veriler başarıyla kaydedildi.");
  }
});
