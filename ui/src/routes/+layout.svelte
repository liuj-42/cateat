<script>
	let { data, children } = $props();
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<main>
	<Nav title={data.pageTitle}/>
	<article class="content">
		{@render children()}
	</article>
	<Footer />
</main>

<style>
	* {
		color: #cad3f5;
		font-family: Arial, Helvetica, sans-serif;
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
