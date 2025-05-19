<script lang="ts">
	import type { Route } from '$lib/models/Route.ts';
	import cateat from "$lib/assets/cateat.webp"

	let routes: Route[] = [
		{ path: '/', name: 'link 1' },
		{ path: '/learn/en', name: 'en' },
		{ path: '/learn', name: 'learn' }
	];

	let { title } = $props();
</script>

<nav class="nav">
	<!-- home icon -->
	<span class="nav__home">
		<a href="/">
			<img src={cateat} alt="cateat" width="32" height="32" />
			home
		</a>
	</span>

	<!-- page title -->
	<h1 class="nav__center">{title}</h1>

	<!-- navigation links -->
	<ul class="nav__links">
		{#each routes as route}
			<li><a href={route.path}> {route.name} </a></li>
		{/each}
	</ul>
</nav>

<style>
	.nav > * {
		display: flex;
		align-items: center;
	}
	.nav__links {
		display: flex;
		flex-direction: row;
		list-style: none;
		gap: 10px;
	}

	.nav__center {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		margin: 0;
	}

	.nav__home {
		font-weight: bold;
		cursor: pointer;
	}

	.nav {
		display: flex;
		flex-direction: row;
		border-radius: 4px;
		box-sizing: border-box;
		padding: 0 12px;
		background-color: #1e2030;
		margin: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
	}

	a:hover {
		color: #a5adcb;
		transition: color 0.25s linear;
	}
</style>
