const prompt = require("prompt-sync")({ sigint: true });

// // Harf kütüphanesi
// let alphabet = "ab";
// let searchLength = 10;

// // Kullanıcının belirlediği düzenli ifadeyi alın
// let regex = prompt("Düzenli ifadeyi girin: ");

// // Düzenli ifadeyi derleyin
// let pattern = new RegExp(regex, "g");

// // Rastgele kelime üreten bir fonksiyon tanımlayın
// let matches = [];

// // Eşleşen ilk 10 dizeyi bulun
// while (matches.length < 10) {
//   let word = "";
//   for (let i = 0; i < searchLength; i++) {
//     word += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//     if (pattern.test(word) && !matches.includes(word)) {
//       matches.push(word);
//       break;
//     }
//   }
// }

// console.log(matches);

let matches = [];
const searchLength = 100;

let regex = new RegExp(`^${prompt("Düzenli ifadeyi girin: ").replaceAll("+", "|")}$`);
console.log(regex);
let alphabet = prompt("Alfabeyi girin: ");
let matchesCount = parseInt(prompt("L dilinin kaç kelimesini görmek istiyorsunuz?: "));

while (matches.length < matchesCount) {
  let word = "";
  for (let i = 0; i < searchLength; i++) {
    word += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    if (regex.test(word) && !matches.includes(word)) {
      matches.push(word);
      break;
    }
  }
}

console.log(matches);

let controlWord = prompt("Kontrol edilecek kelimeyi giriniz: ");
if (regex.test(controlWord)) {
  console.log("Bu kelime L diline aitdir.\n");
} else {
  console.log("Bu kelime L diline ait değildir.\n");
}
