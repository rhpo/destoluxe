<script lang="ts">
  import { formatPrice } from "$lib/utils/currency";
  import Separator from "../ui/Separator.svelte";

  let { product } = $props();
</script>

<div class="info">
  <div class="top">
    <div class="title-container">
      <div class="title mono" data-aos="fade-right">
        {product.name}
      </div>
    </div>

    <div class="price mono" data-aos="fade-up" data-aos-delay="300">
      <span class="real-price">
        {formatPrice(product.price.new, "DZD")}
      </span>

      {#if product.price.old !== product.price.new}
        <span class="old-price">
          {formatPrice(product.price.old, "DZD")}
        </span>
      {/if}
    </div>

    <div class="product-info" data-aos="fade-up" data-aos-delay="400">
      Économisez jusqu'à <mark>
        {Math.round(
          ((product.price.old - product.price.new) / product.price.old) * 100
        )}%
      </mark> - Livraison gratuite à partir de 10 articles.
    </div>
  </div>

  <Separator data-aos="fade-up" data-aos-delay="400" />

  {#if product.description}
    <div class="description" data-aos="fade-up" data-aos-delay="500">
      <p>{product.description}</p>
    </div>
  {/if}
</div>

<style>
  .info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  }

  .title-container {
    margin-bottom: 2rem;
  }

  .title {
    background: var(--accent-color);
    color: var(--background-color);
    padding: 12px 24px;
    margin: 8px 0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: inline-block;
    line-height: 1.4;
  }

  .price {
    font-size: 32px;
    font-weight: 300;
    color: var(--text-color);
    letter-spacing: -0.02em;
  }

  .real-price {
    color: var(--text-color);
  }

  .old-price {
    color: var(--text-light);
    text-decoration: line-through;
    margin-left: 1rem;
    font-size: 20px;
  }

  .product-info {
    font-size: 13px;
    line-height: 1.6;
    font-weight: 500;
  }

  .description p {
    margin: 0;
    color: var(--text-light);
    line-height: 1.7;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.2rem;
      padding: 10px 20px;
    }

    .price {
      font-size: 28px;
    }

    .description {
      padding: 1.5rem 0;
      text-align: center;
    }

    .top,
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
