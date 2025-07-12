<script lang="ts">
  import ConstructionPage from "$lib/components/ConstructionPage.svelte";
  import { BRAND_NAME } from "$lib/data";
  import { onMount } from "svelte";

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>{BRAND_NAME} | Site en Construction...</title>
  <meta
    name="description"
    content="Notre site est actuellement en construction"
  />
</svelte:head>

{#if mounted}
  <ConstructionPage />
{/if}
