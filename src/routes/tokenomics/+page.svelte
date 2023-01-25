<script>
  import { fade } from "svelte/transition";
  import Blop from "./Blop.svelte";
  let visible = true;
</script>

{#if visible}
  <!-- The button to open modal -->

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal modal-open " transition:fade={{ duration: 600 }}>
    <div class="modal-box notmodal relative">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-circle absolute right-2 top-2 close-btn"
        on:click={() => (visible = false)}>✕</label
      >
      <h3 class="text-3xl text-center font-bold">BLOP MINE</h3>
      <ul class=" text-xl p-4 list-disc">
        <li>Must be a holder to Mine</li>
        <li>Mine 10 $BLOP Per Min on avg</li>
        <li>Chance to Mine ALGO NFTS</li>
        <li>Chance to Mine 100-300 $BLOP</li>
        <li>COOLDOWN IS 6 HOURS</li>
      </ul>
    </div>
  </div>
  <!-- content here -->
{/if}

<Blop />

<style>
  /* your styles go here */
  .notmodal {
    border-bottom: 4px solid #5ce1e6;
    box-shadow: 0 2px 7px 4px #5ce1e6;
  }
  .close-btn {
    /* border: 1px solid var(--blue); */
    background: none;
    border: none;
    color: var(--pink);
  }
  .close-btn:hover {
    border: 1px solid var(--pink);
    background: var(--pink);
    color: black;
  }
  ul {
    list-style-image: url("pick_axe.svg");
  }
</style>
