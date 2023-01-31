<script>
  export let prop;
  $: console.log(prop);
</script>

<div
  class="card lg:card-side bg-secondary shadow-xl text-black w-96 round p-0"
  id="card"
>
  <figure>
    <img
      src={prop.image}
      alt="Album"
      class="w-full h-full rounded-2xl m-0 p-0"
    />
  </figure>
  <div class="card-body">
    <div class="grid grid-cols-1 place-items-center text-center">
      <h2 class="card-title">{prop.title}</h2>
      {#each prop.points as point}
        <p>{point}</p>
      {/each}
    </div>
  </div>
</div>

<style>
  .round {
    border-radius: 75px;
  }
  #card {
    border-bottom: 4px solid #5ce1e6;
    box-shadow: 10px 0 10px -2px #5ce1e6;
  }
</style>
