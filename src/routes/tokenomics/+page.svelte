<script>
  import { fade } from "svelte/transition"
  import Blop from "./Blop.svelte"
  let visible = true
</script>

{#if visible}
  <!-- The button to open modal -->

  <!-- Put this part before </body> tag -->
  <input
    type="checkbox"
    id="my-modal-3"
    class="modal-toggle"
  />
  <div
    class="modal modal-open "
    transition:fade={{ duration: 600 }}
  >
    <div class="modal-box relative">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        on:click={() => (visible = false)}>✕</label
      >
      <h3 class="text-lg font-bold">
        Congratulations random Internet user!
      </h3>
      <p class="py-4">
        You've been selected for a chance to get one year of
        subscription to use Wikipedia for free!
      </p>
    </div>
  </div>
  <!-- content here -->
{/if}

<Blop />
