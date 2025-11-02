<script lang="ts">
import type { Torrent } from '$lib/models/torrent';
// import { props } from 'svelte';

let { info }: { info: Torrent } = $props();
</script>

<div class="torrent-card">
    <h2>{info.name}</h2>
    <p>Size: {info.size} bytes</p>
    <p>Progress: {(info.progress * 100).toFixed(2)}%</p>
    <p>Status: {info.state}</p>
</div>

