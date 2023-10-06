async function yemekHazirla(yemek) {
  return new Promise((resolve) => {
    console.log(`${yemek} hazırlanıyor...`);
    setTimeout(() => {
      console.log(`${yemek} hazır.`);
      resolve();
    }, 2000);
  });
}

async function icecekHazirla(icecek) {
  return new Promise((resolve) => {
    console.log(`${icecek} hazırlanıyor...`);
    setTimeout(() => {
      console.log(`${icecek} hazır.`);
      resolve();
    }, 1000);
  });
}

async function yemegiServisEt(musteri, yemek) {
  return new Promise((resolve) => {
    console.log(`${musteri}, ${yemek} yemeye başlıyor.`);
    setTimeout(() => {
      console.log(`${musteri}, ${yemek} yemeyi bitirdi.`);
      resolve();
    }, 1500);
  });
}

async function odemeYap(musteri) {
  return new Promise((resolve) => {
    console.log(`${musteri}, ödeme yapıyor.`);
    setTimeout(() => {
      console.log(`${musteri}, ödeme tamamlandı.`);
      resolve();
    }, 500);
  });
}

async function garson(musteri, yemek, icecek) {
  console.log(`${musteri}, sipariş veriyor.`);
  await yemekHazirla(yemek);
  await icecekHazirla(icecek);
  await yemegiServisEt(musteri, yemek);
  await odemeYap(musteri);
  console.log(`${musteri}, masadan kalkıyor.`);
}

(async () => {
  console.log("Müşteri 1: ");
  garson("Müşteri 1", "Pizza", "Kola");

  console.log("Müşteri 2: ");
  garson("Müşteri 2", "Pasta", "Su");

  console.log("Müşteri 3: ");
  garson("Müşteri 3", "Burger", "Meyve Suyu");
})();
