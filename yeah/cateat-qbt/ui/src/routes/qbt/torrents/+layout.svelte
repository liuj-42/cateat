<script lang="ts">
	let { children } = $props();
</script>

<div>
	<nav>
        <a href="/qbt">QBT Home</a> |
        <a href="/qbt/login">Login</a> |
        <a href="/qbt/torrents">Torrents</a>
        <a onclick={() => console.log('Logging out...')} href="/qbt/logout">Logout</a>
    </nav>
	<div>
		{@render children?.()}
	</div>
</div>

