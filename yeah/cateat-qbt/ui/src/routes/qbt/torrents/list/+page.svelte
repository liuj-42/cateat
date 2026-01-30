<script lang="ts">
	import TorrentCard from '$lib/components/+torrent-card.svelte';
	import type { Torrent } from '$lib/models/torrent';
	let { data } = $props();
	console.log(data);
</script>

<div>
	{#each data.torrents as t}
		<TorrentCard info={t} />
	{/each}
</div>
