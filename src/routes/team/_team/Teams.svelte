<script>
  import Team from "./Team.svelte"
  import { props } from "./props"
  import { fly } from "svelte/transition"
  import { onMount } from "svelte"
  let visible = false
  onMount(() => {
    visible = true
  })
</script>

<div
  class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-12"
>
  {#each props as prop, index}
    {#if visible}
      <div
        transition:fly={{
          y: 200,
          duration: 1000 + 700 * index,
        }}
      >
        <Team {prop} />
      </div>
    {/if}
  {/each}
</div>
