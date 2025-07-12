<script lang="ts">
  import svelteTilt from "vanilla-tilt-svelte";

  let { src, alt } = $props();
</script>

<div
  class="product-image-container"
  use:svelteTilt={{
    startX: -20,
    max: 10,
  }}
>
  <img {src} {alt} class="product-image" loading="lazy" />
</div>

<style>
  .product-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-color);
    position: relative;
    aspect-ratio: 1;
  }

  .product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
</style>
