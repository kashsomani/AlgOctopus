<script>
  export let prop
  $: console.log(prop)
</script>

<div
  class="card w-96 md:w-64 bg-primary shadow-xl"
  id="card"
>
  <figure class="px-7 pt-10">
    <img src={prop.image} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center ">
    <h2 class="card-title">{prop.title}</h2>
    <h3 class="card-title text-base">{prop.points}</h3>
  </div>
</div>

<style>
  #card {
    border-bottom: 4px solid var(--blue);
    box-shadow: 0 0 10px 8px var(--blue);
  }
</style>
