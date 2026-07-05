// Данные товаров
const products = [
  {
    name: "Свеча «Уют»",
    price: "950 ₽",
    img: "svechi-shop1.png",       // Путь к файлу в корне репозитория
    desc: "Тёплый аромат ванили и сандала."
  },
  {
    name: "Свеча «Рассвет»",
    price: "1100 ₽",
    img: "svechi-shop2.png",       // Путь к файлу в корне репозитория
    desc: "Лёгкие ноты цитруса и жасмина."
  },
  {
    name: "Свеча «Вечер»",
    price: "1050 ₽",
    img: "svechi-shop3.png",       // Добавь этот файл в репозиторий, если есть
    desc: "Глубокий аромат кедра и специй."
  }
];

// Функция генерации HTML карточки
function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3 class="product-name">\${product.name}</h3>
        <p class="product-price">\${product.price}</p>
        <p class="product-desc">\${product.desc}</p>
        <button class="add-to-cart-btn">В корзину</button>
      </div>
    </div>
  `;
}

// Функция отрисовки всех товаров
function renderProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;

  // Генерируем HTML для всех товаров и вставляем в контейнер
  container.innerHTML = products.map(createProductCard).join('');
}

// Запускаем отрисовку после загрузки страницы
document.addEventListener('DOMContentLoaded', renderProducts);
