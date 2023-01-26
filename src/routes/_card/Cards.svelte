<script>
  import Card from "./Card.svelte"
  import { props } from "./props"
</script>

{#each props as prop}
  <Card {prop} />
{/each}
