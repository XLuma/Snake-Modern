<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale, setLocale } from '$lib/paraglide/runtime.js';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
	<h1>Snake</h1>
<nav>
<a href="/arena">{m["nav.arena"]()}</a>
	<a href="/quests">{m["nav.quests"]()}</a>
	<a href="/encyclopedia">{m["nav.encyclopedia"]()}</a>
	<a href="/cards">{m["nav.cards"]()}</a>
	<a href="/tournament">{m["nav.tournament"]()}</a>
	<a href="/ranking">{m["nav.ranking"]()}</a>
	<a href="/forum">{m["nav.forum"]()}</a>
</nav>
{@render children()}
