export function getProducts() {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
}

export function transformProducts(apiProducts) {
  return apiProducts.map((item) => ({
    id: item.id,
    name: item.title,
    //price: `$${item.price}. 00`,
    price: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(item.price),
    image: item.thumbnail,
    alt: item.title,
    description: item.description,
    category: item.category,
    featured: false,
    stock: true,
  }));
}
