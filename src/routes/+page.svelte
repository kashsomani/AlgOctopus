<script>
  import Hero from "./Hero.svelte"
  import Blop from "./Blop.svelte"
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div>
  <Hero />
  <Blop />
</div>

<style lang="postcss">
  .container {
    @apply py-6;
  }
</style>
