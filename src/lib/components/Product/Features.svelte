<script>
  let { features } = $props();
</script>

<div class="features" data-aos="fade-up" data-aos-delay="300">
  <h3>Caractéristiques</h3>
  <div class="features-grid">
    {#each features as feature, index}
      <div
        class="feature-item"
        data-aos="fade-up"
        data-aos-delay={800 + index * 100}
      >
        {feature}
      </div>
    {/each}
  </div>
</div>

<style>
  .features {
    padding: 4rem 0;
  }

  .features h3 {
    margin-bottom: 2rem;
    color: var(--text-color);
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .feature-item {
    padding: 1.5rem;
    background: var(--background-light);
    font-size: 15px;
    font-weight: 400;
    color: var(--text-color);
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 768px) {
    .features {
      padding: 3rem 0;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
