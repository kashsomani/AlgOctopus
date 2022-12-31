<div class="wrap">
  <button
    class="button"
    on:click={() =>
      (location.href =
        "https://www.nftexplorer.app/sellers/algoctopus")}
    >Buy An AlgOctopus</button
  >
</div>

<style>
  .wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    min-width: 200px;
    min-height: 40px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #313133;
    background: var(--blue);
    background: linear-gradient(
      90deg,
      var(--blue) 0%,
      var(--blue) 100%
    );
    border: none;
    border-radius: 1000px;
    box-shadow: 4px 8px 16px var(--blue);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
  }

  button::before {
    content: "";
    border-radius: 1000px;
    min-width: calc(200px + 12px);
    min-height: calc(40px + 12px);
    box-shadow: 0 0 40px rgba(0, 255, 203, 0.64);
    border: 2px solid rgba(203, 108, 230, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  .button:hover,
  .button:focus {
    color: #313133;
    background: linear-gradient(
      90deg,
      var(--pink) 0%,
      var(--pink) 100%
    );
    box-shadow: 4px 8px 16px var(--pink);
    transform: translateY(-6px);
  }

  button:hover::before,
  button:focus::before {
    opacity: 1;
  }

  button::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid var(--blue);
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }

  button:hover::after,
  button:focus::after {
    animation: none;
    display: none;
  }

  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
</style>
