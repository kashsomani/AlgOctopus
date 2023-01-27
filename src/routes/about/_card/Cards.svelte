<script>
  import Card from "./Card.svelte"
  import { props } from "./props"
</script>

<div class="grid grid-cols-1 place-items-center gap-6">
  {#each props as prop}
    <Card {prop} />
  {/each}
</div>
