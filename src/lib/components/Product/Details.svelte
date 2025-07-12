<script lang="ts">
  import type { Product } from "$lib/types";
  import { ChevronDown } from "lucide-svelte";

  interface Props {
    product: Product;
  }

  let { product }: Props = $props();
  let isOpen = $state(true);

  function toggleDetails() {
    isOpen = !isOpen;
  }
</script>

<div class="product-dropdown">
  <button
    class="trigger"
    onclick={toggleDetails}
    style="padding: {isOpen ? '1.5rem 0' : ''}"
  >
    <span>Détails du produit</span>
    <ChevronDown
      size={16}
      class="arrow"
      style="transform: {isOpen ? 'rotate(180deg)' : 'none'}"
    />
  </button>

  <div
    class="content"
    style="max-height: {isOpen ? 'fit-content' : '0'}; opacity: {isOpen
      ? '1'
      : '0'}; padding: {isOpen ? 'inherit' : '0'}"
  >
    <div class="inner">
      {#if product.details}
        {#each product.details as detail}
          <div class="detail-section">
            <h4>{detail.title}</h4>
            <p>{detail.content}</p>
          </div>
        {/each}
      {:else}
        <p>Aucun détail disponible pour ce produit.</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .product-dropdown {
  }

  .trigger {
    width: 100%;
    background: none;
    border: none;
    padding: 1.5rem 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
    transition: var(--transition);
    font-family: inherit;
  }

  .trigger:hover {
    color: var(--secondary-color);
  }

  .content {
    padding-bottom: 1.5rem;
    overflow: hidden;

    overflow: hidden;
    transition: all var(--transition-duration) var(--transition-easing);
  }

  .detail-section {
    margin-bottom: 1.5rem;
  }

  .detail-section h4 {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .detail-section p {
    font-size: 14px;
    color: var(--text-light);
    line-height: 1.6;
  }
</style>
