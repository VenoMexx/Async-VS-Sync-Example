function yemekHazirla(yemek) {
  console.log(`${yemek} hazırlanıyor...`);
  for (let i = 0; i < 2000000000; i++) {}  // 2 saniye süren işlem
  console.log(`${yemek} hazır.`);
}

function icecekHazirla(icecek) {
  console.log(`${icecek} hazırlanıyor...`);
  for (let i = 0; i < 1000000000; i++) {}  // 1 saniye süren işlem
  console.log(`${icecek} hazır.`);
}

function yemegiServisEt(musteri, yemek) {
  console.log(`${musteri}, ${yemek} yemeye başlıyor.`);
  for (let i = 0; i < 1500000000; i++) {}  // 1.5 saniye süren işlem
  console.log(`${musteri}, ${yemek} yemeyi bitirdi.`);
}

function odemeYap(musteri) {
  console.log(`${musteri}, ödeme yapıyor.`);
  for (let i = 0; i < 500000000; i++) {}  // 0.5 saniye süren işlem
  console.log(`${musteri}, ödeme tamamlandı.`);
}

function garson(musteri, yemek, icecek) {
  console.log(`${musteri}, sipariş veriyor.`);
  yemekHazirla(yemek);
  icecekHazirla(icecek);
  yemegiServisEt(musteri, yemek);
  odemeYap(musteri);
  console.log(`${musteri}, masadan kalkıyor.`);
}

console.log("Müşteri 1: ");
garson("Müşteri 1", "Pizza", "Kola");

console.log("Müşteri 2: ");
garson("Müşteri 2", "Pasta", "Su");

console.log("Müşteri 3: ");
garson("Müşteri 3", "Burger", "Meyve Suyu");
