<script>
	let { children } = $props();
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<main>
	<Nav />
	<article class="content">
		{@render children()}
	</article>
	<Footer />
</main>

<style>
	* {
		color: #cad3f5;
	}
	main {
		background-color: #181926;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex-grow: 1;
	}
</style>
