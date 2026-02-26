const container = document.getElementById("categoriesContainer");

/* --- Группировка по категориям  --- */
function groupProductsByCategory(products) {
  return products.reduce((acc, product) => {
    const category = product.type_product_name;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {});
}

/* --- Рендер --- */
function renderResults(products) {
  const grouped = groupProductsByCategory(products);

  Object.keys(grouped).forEach(categoryName => {
    const section = document.createElement("section");
    section.className = "category";

    section.innerHTML = `
      <p class="category-title">${categoryName}</p>
      <div class="products-grid">
        ${grouped[categoryName].map(product => `
          <div class="product-card">
            <img src="assets/images/${product.pic_url}" alt="${product.name}">
            <div class="product-info">
              <p>${product.name}</p>
              <div class="price">Ценовой сегмент: ${product.price_category}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });
}

/* --- Имитируем ответ --- */
renderResults(products);