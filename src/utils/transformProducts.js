const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function transformProducts(products = []) {
  return products.map((item) => ({
    id: item.id,
    name: item.title || item.name || "Producto sin nombre",
    price:
      typeof item.price === "number"
        ? currencyFormatter.format(item.price)
        : item.price || "$0",
    image: item.image || item.thumbnail || "",
    alt: item.alt || item.title || item.name || "Imagen de producto",
    description: item.description || "Sin descripción",
    size: item.size || "Tamaño no especificado",
    category: item.category || "General",
    featured: item.featured ?? false,
    stock: item.stock ?? true,
  }));
}
