# Async-VS-Sync-Example
Bu repo, Node.js kullanarak bir restoran senaryosunda asenkron ve senkron programlamayı anlatır. Müşteri, garson ve şef rolleri ile yemek siparişi, hazırlanması ve servis edilmesi süreçleri gösterilir.

## Senkron Örnek
Senkron kodda, her işlem sırayla gerçekleşir. Bir müşteri için tüm işlemler tamamlanmadan diğer müşteriye geçilmez.

[Senkron Kod Örneği](./syncExample.js)

## Asenkron Örnek
Asenkron kodda, birden fazla işlem eş zamanlı olarak gerçekleştirilebilir. Bir müşteri sipariş verirken diğer müşterinin yemeği hazırlanabilir ya da ödeme yapabilir.

[Asenkron Kod Örneği](./asyncExample.js)

## Kurulum
Node.js kurulu bir sistemde, bu repository'yi klonladıktan sonra her iki örneği de çalıştırabilirsiniz.

```node syncExample.js```

```node asyncExample.js```
