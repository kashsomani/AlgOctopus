<div class="container">
  <div class="octopus">
    <div class="leg-1" />
    <div class="head-shape" />
    <div class="octopus-head">
      <div class="eyes" />
      <div class="blush" />
      <div class="mouth" />
    </div>
  </div>
</div>
<div class="fixed inset-0 -z-10">
  <div class="grid grid-cols-1 place-items-center h-full ">
    <div
      class="my-auto mb-30 font-bold coming-soon text-secondary"
    >
      COMING SOON
    </div>
  </div>
</div>

<style>
  .coming-soon {
    font-size: 100px;
    text-shadow: 5px 5px 2px rgba(71, 174, 178, 1);
  }
  .container {
    width: 100vw;
    height: 30vh;
    background-size: 0.5vmin 56vmin;
    animation: background-change 4.5s infinite alternate;
  }
  .octopus {
    width: 40vmin;
    animation: walk 10s ease-in-out infinite alternate;
    filter: drop-shadow(0.3vmin 0 0.5vmin #1f1d1d);
  }
  .head-shape {
    position: absolute;
    top: 23vmin;
    left: 30vmin;
    height: 17vmin;
    width: 23vmin;
    background: var(--pink);
    border-radius: 50% 50% 20% 20%;
  }
  .eyes,
  .eyes::after {
    position: absolute;
    top: 29vmin;
    left: 36.7vmin;
    width: 2.5vmin;
    height: 2.5vmin;
    background: #1f1d1d;
    border-radius: 50%;
    animation: blinking 3s ease-in-out infinite alternate;
  }
  .eyes::after {
    content: "";
    top: 0vmin;
    left: 8vmin;
  }
  .blush {
    position: absolute;
    top: 30vmin;
    left: 32vmin;
    width: 4vmin;
    height: 4vmin;
    background: var(--blue);
    border-radius: 50%;
    box-shadow: 15.5vmin 0 0 0 var(--blue);
  }
  .mouth {
    position: absolute;
    top: 30vmin;
    left: 40vmin;
    width: 4vmin;
    height: 4vmin;
    background: transparent;
    border-radius: 50%;
    box-shadow: 0 1vmin 0 #1f1d1d;
    animation: mouth-open 2s ease-in-out infinite alternate;
  }
  .leg-1,
  .leg-1::before,
  .leg-1::after {
    position: absolute;
    top: 30vmin;
    left: 30vmin;
    height: 15vmin;
    width: 5vmin;
    background: var(--blue);
    border-radius: 20% 20% 50% 50%;
    animation: move-left-small 1.5s ease-in-out infinite
      alternate;
    transform: rotate(20deg);
  }
  .leg-1::after {
    content: "";
    top: -2vmin;
    left: 6vmin;
  }
  .leg-1::before {
    animation: move-left 1.5s ease-in-out infinite alternate;
    content: "";
    top: -5vmin;
    left: 17vmin;
    box-shadow: -6vmin 0 0 0 var(--blue);
    transform: rotate(-35deg);
  }
  @keyframes move-left {
    to {
      transform: translateY(4vmin);
    }
  }
  @keyframes move-left-small {
    to {
      transform: translateY(2vmin);
    }
  }
  @keyframes walk {
    20% {
      transform: translateY(20vmin);
    }
    40% {
      transform: translateX(20vmin);
    }
    60% {
      transform: translateY(15vmin);
    }
    80% {
      transform: translateX(5vmin);
    }
    100% {
      transform: translateY(-10vmin);
    }
  }
  @keyframes blinking {
    0%,
    50%,
    80% {
      background: linear-gradient(
        #1f1d1d 100%,
        transparent 100%
      );
    }
    60%,
    100% {
      background: linear-gradient(
        transparent 23%,
        #1f1d1d 23%,
        transparent 30%
      );
    }
  }

  @keyframes mouth-open {
    to {
      box-shadow: -0.5vmin 2vmin 0 0 #1f1d1d;
    }
  }
  @keyframes background-change {
    to {
      background-size: 0.5vmin 30vmin;
    }
  }
</style>
