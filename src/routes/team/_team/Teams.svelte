<script>
  import Team from "./Team.svelte"
  import { props } from "./props"
</script>

<div
  class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-12"
>
  {#each props as prop}
    <Team {prop} />
  {/each}
</div>
