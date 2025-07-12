<script lang="ts">
  import QuantitySelector from "../QuantitySelector.svelte";
  import ProductFeatures from "./Features.svelte";
  import ProductDetails from "./Details.svelte";
  import ProductImage from "./Image.svelte";
  import ProductInfo from "./Info.svelte";
  import Separator from "$lib/components/ui/Separator.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import View from "$lib/components/ui/View.svelte";

  import { addToCart, openCart } from "$lib/stores/cart";
  import type { CartItem } from "$lib/types";

  let { product } = $props();
  let quantity = $state(1);

  function AddCart() {
    if (product.inStock) {
      addToCart({
        ...product,
        quantity,
      } as CartItem);
      openCart();

      // Reset quantity after adding to cart
      quantity = 1;
    }
  }
</script>

<View>
  <div class="page">
    <div class="grid">
      <div class="image" data-aos="fade-right" data-aos-duration="800">
        <ProductImage src={product.image} alt={product.name} />
      </div>

      <div class="details" data-aos="fade-left" data-aos-duration="800">
        <ProductInfo {product} />

        <Separator data-aos="fade-up" data-aos-delay="300" />

        <div class="actions" data-aos="fade-up" data-aos-delay="400">
          <div class="group">
            <div class="quantity">
              <label for="quantity">Quantité</label>
              <QuantitySelector bind:quantity max={10} />
            </div>

            <div class="sub-actions" data-aos="fade-up" data-aos-delay="500">
              <Button
                variant="primary"
                disabled={!product.inStock}
                onclick={AddCart}
              >
                {product.inStock ? "Ajouter au panier" : "Épuisé"}
              </Button>
            </div>
          </div>

          <div class="details" data-aos="fade-up" data-aos-delay="600">
            <ProductDetails {product} />
          </div>
        </div>
      </div>
    </div>

    {#if product.features}
      <div class="features">
        <ProductFeatures features={product.features} />
      </div>
    {/if}
  </div>
</View>

<style>
  .page {
    padding: 4rem 0;
    background: var(--background-color);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    margin-bottom: 4rem;
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .image {
    position: sticky;
    top: calc(var(--navbar-height) + 2rem);
  }

  .details {
    display: flex;
    flex-direction: column;

    gap: var(--spacing);
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background: var(--background-light);
    border-radius: calc(var(--border-radius) * 2);
    border: 1px solid var(--border-light);
  }

  .sub-actions {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: var(--background-light);

    margin-top: 0.5rem;
  }

  .quantity {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  label {
    font-weight: 600;
    color: var(--text-color);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .features {
    padding-top: 4rem;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .image {
      position: static;
    }

    .actions {
      gap: 1.25rem;
    }

    .page {
      padding: 2rem 0;
    }
  }
</style>
