<script lang="ts">
  import "../app.css";
  import "aos/dist/aos.css";

  import AOS from "aos";

  import WhatsAppFloat from "$lib/components/WhatsAppFloat.svelte";
  import MobileMenu from "$lib/components/MobileMenu.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Cart from "$lib/components/Cart/Cart.svelte";
  import Portal from "svelte-portal";

  let { children } = $props();

  $effect(() => {
    AOS.init({
      duration: 800,
    });
  });
</script>

<main data-aos="fade-in">
  <Header />

  <div class="screen">
    <div class="content">
      {@render children?.()}

      <Footer />
    </div>

    <!-- for desktop -->
    <Cart view="desktop" />
  </div>
</main>

<Portal target="body">
  <Cart view="mobile" />
</Portal>

<MobileMenu />
<WhatsAppFloat />

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .screen {
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
    min-height: calc(100vh - var(--header-height));
    box-sizing: border-box;
  }
</style>
