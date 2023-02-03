<script>
  export let prop;
  $: console.log(prop);
</script>

<div class="card w-96 bg-primary shadow-xl" id="card">
  <figure class="px-7 pt-10">
    <img src={prop.image} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{prop.title}</h2>
    <h3 class="card-title">{prop.points}</h3>
    <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
    <div class="card-actions" />
  </div>
</div>

<style>
  #card {
    border-bottom: 4px solid #5ce1e6;
    box-shadow: 0 0 10px 8px #5ce1e6;
  }
</style>
