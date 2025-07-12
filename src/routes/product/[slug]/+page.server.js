import { fetchProduct } from "$lib/server/products.js"
import { error } from "@sveltejs/kit"

export async function load({ params }) {
  const result = await fetchProduct(params.slug)

  if (!result.success) {
    throw error(404, result.error || "Produit non trouvé")
  }

  return {
    product: result.data,
  }
}
