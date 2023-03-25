// Ürün kategorileri
const categories = ["Bilgisayar", "Cep Telefonu", "Televizyon", "Kamera", "Oyun Konsolu", "Kulaklık", "Tablet", "Aksesuar"];

// Ürünler
const products = [];

// Rastgele ürün adı oluştur
const generateProductName = () => {
  const adjectives = ["Güçlü", "Kullanışlı", "Gelişmiş", "Yüksek Kaliteli", "Modern"];
  const nouns = ["Laptop", "Telefon", "Televizyon", "Kamera", "Oyun Konsolu", "Kulaklık", "Tablet", "Aksesuar"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
};

// Rastgele fiyat oluştur
const generatePrice = () => {
  return Math.floor(Math.random() * 5000) + 100;
};

// Ürünleri oluştur
for (let i = 0; i < 500; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const productName = generateProductName();
  const price = generatePrice();
  const product = {
    id: i + 1,
    category,
    productName,
    price,
  };
  products.push(product);
}

console.log(products);
