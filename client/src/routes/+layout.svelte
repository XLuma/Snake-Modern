<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, setLocale } from '$lib/paraglide/runtime.js';
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import header from '$lib/assets/header_cover.png';
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<h1
  style="background: url({header}) center bottom / 900px 100px no-repeat;"
  class="relative mx-auto mt-8 -mb-4.5 box-border block h-25 max-width-900 text-center text-transparent img-rendering-pixelated"
>
  Snake
</h1>
<nav
  class="mx-auto my-0 nav-main-borders box-border flex h-9.5 max-width-900 justify-between overflow-auto overflow-hidden px-3.5 py-0"
>
  <a href="/arena">{m['nav.arena']()}</a>
  <a href="/quests">{m['nav.quests']()}</a>
  <a href="/encyclopedia">{m['nav.encyclopedia']()}</a>
  <a href="/cards">{m['nav.cards']()}</a>
  <a href="/tournament">{m['nav.tournament']()}</a>
  <a href="/ranking">{m['nav.ranking']()}</a>
  <a href="/forum">{m['nav.forum']()}</a>
</nav>
<main class="mx-auto mt-2.25 mb-0 nav-main-borders block max-w-[min(900px,90vw)]">
  {@render children()}
</main>
