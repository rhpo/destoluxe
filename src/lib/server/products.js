import data from "../data/data.json"

/**
 * Fetches all products with a simulated delay.
 */
export async function fetchProducts() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
    success: true,
    data: data.products,
    total: data.products.length,
  }
}

/**
 * Fetches a single product by ID from a simulated dataset.
 * The function simulates an API delay of 100 milliseconds before retrieving the product.
 * If the product is found, it returns an object with `success` set to true and the product data.
 * If the product is not found, it returns an object with `success` set to false and an error message.
 *
 * @param {string} id - The ID of the product to fetch
 */
export async function fetchProduct(id) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const product = data.products.find((p) => p.id === id)

  if (!product) {
    return {
      success: false,
      error: "Produit non trouvé",
      data: null,
    }
  }

  return {
    success: true,
    data: product,
  }
}

/**
 * Searches products based on a query string.
 *
 * This function filters products by matching the query against the product's name, description,
 * and category. It returns an object containing the filtered products along with a success flag
 * and the total count of filtered products.
 */
export async function searchProducts(query) {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const filteredProducts = data.products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  )

  return {
    success: true,
    data: filteredProducts,
    total: filteredProducts.length,
  }
}
