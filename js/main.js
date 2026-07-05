const products = [
  {
    name: "Свеча «Уют»",
    price: "950 ₽",
    img: "svechi-shop1.png",
    desc: "Тёплый аромат ванили и сандала."
  },
  {
    name: "Свеча «Рассвет»",
    price: "1100 ₽",
    img: "svechi-shop2.png",
    desc: "Лёгкие ноты цитруса и жасмина."
  }
];

const grid = document.getElementById("products-grid");

products.forEach(p => {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" loading="lazy" />
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div><strong>${p.price}</strong></div>
    <button class="btn" type="button">В заказ</button>
  `;
  grid.appendChild(card);
});
