<script>
  import { ShoppingCart } from "lucide-svelte";
  import { cart, toggleCart } from "$lib/stores/cart";
  import { blur } from "svelte/transition";
</script>

<button class="cart" onclick={toggleCart} aria-label="Panier">
  {#if $cart.length > 0}
    <span class="count" transition:blur>{$cart.length}</span>
  {/if}

  <ShoppingCart size={22} />
</button>

<style>
  .cart {
    position: relative;
    background: none;
    border: none;
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  .cart:hover {
    background: var(--background-light);
  }

  .count {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--accent-color);
    color: var(--background-color);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.125rem 0.375rem;
    border-radius: 1rem;
    min-width: 1.25rem;
    text-align: center;
  }
</style>
