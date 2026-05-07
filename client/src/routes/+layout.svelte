<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, setLocale } from '$lib/paraglide/runtime.js';
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import header from '$lib/assets/header_cover.png';
  let { children } = $props();

  let nav_links = [
    { href: '/arena', label: m['nav.arena'](), className: 'arena selected' },
    { href: '/quests', label: m['nav.quests'](), className: 'quests' },
    { href: '/encyclopedia', label: m['nav.encyclopedia'](), className: 'encyclopedia' },
    { href: '/cards', label: m['nav.cards'](), className: 'cards' },
    { href: '/tournament', label: m['nav.tournament'](), className: 'tournament' },
    { href: '/rankings', label: m['nav.ranking'](), className: 'ranking' },
    { href: '/forum', label: m['nav.forum'](), className: 'forum' }
  ];
</script>

{#snippet nav_child(nav_link)}
  <a
    class="{nav_link.className} mt-1 h-4 pt-0.5 pr-3 pb-0 pl-5.5 tracking-[-0.5px] text-transparent uppercase no-underline img-rendering-pixelated"
    href={nav_link.href}>{nav_link.label}</a
  >
{/snippet}

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
  {#each nav_links as nav_link}
    {@render nav_child(nav_link)}
  {/each}
</nav>
<main class="mx-auto mt-2.25 mb-0 nav-main-borders block max-w-[min(900px,90vw)]">
  {@render children()}
</main>
