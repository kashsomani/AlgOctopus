<div class="navbar border-nav ">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 text-black"
      >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/">Roadmap</a></li>
        <li><a href="/tokenomics">Tokenomics</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/">Contact </a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a
      href="/"
      class="btn btn-ghost text-xl text-primary"
      id="navbar-title"
      ><img
        src="algoctopus.png"
        alt="logo"
        class="w-44"
      /></a
    >
  </div>
  <div class="navbar-end" />
</div>
&nbsp;

<style>
  .navbar {
    min-width: screen;
    border-bottom: 4px solid #5ce1e6;
    box-shadow: 0 2px 7px 4px #5ce1e6;
  }
</style>
