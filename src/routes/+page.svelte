<script>
  import Card from "./Card.svelte"
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="container">
  <Card />
</div>

<style lang="postcss">
  .container {
    @apply py-6;
  }
</style>
