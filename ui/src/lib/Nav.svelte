<script lang="ts">
	import type { Route } from '$lib/models/Route.ts';

	let routes: Route[] = [
		{ path: '/', name: 'link 1' },
		{ path: '/', name: 'link 2' },
		{ path: '/dev', name: 'dev' }
	];


	let { title } = $props();
</script>

<nav>
	<span class="_nav__home">
		<a href="/">
			<img src="cateat.gif" alt="cateat" width="32" height="32" />
			home
		</a>
	</span>
	<h1 class="_nav__center">{title}</h1>
	<ul class="_nav__links">
		{#each routes as route}
			<li><a href={route.path}> {route.name} </a></li>
		{/each}
	</ul>
</nav>

<style>
	nav > * {
		display: flex;
		align-items: center;
	}
	._nav__links {
		display: flex;
		flex-direction: row;
		list-style: none;
		gap: 10px;
	}

	._nav__center {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		margin: 0;
	}

	._nav__home {
		font-weight: bold;
		cursor: pointer;
	}

	nav {
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
