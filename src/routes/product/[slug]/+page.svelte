<script>
  import ProductPage from "$lib/components/Product/Product.svelte";
  import View from "$lib/components/ui/View.svelte";
  import { BRAND_NAME } from "$lib/data";

  let { data } = $props();
  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>{data.product.name} | {BRAND_NAME}</title>
  <meta
    name="description"
    content="Achetez {data.product.name} au meilleur prix - {data.product
      .description}"
  />
</svelte:head>

<View>
  <div class="product-page">
    {#if mounted}
      <ProductPage product={data.product} />
    {/if}
  </div>
</View>
