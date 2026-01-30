<script lang="ts">
	import cateat from '$lib/assets/cateat.gif';
	import { Separator } from 'bits-ui';
	let { children, data } = $props();
	import { page } from '$app/state';
	import HorizontalSeparator from '$lib/components/+horizontal-separator.svelte';
	import NavIcon from '$lib/components/+nav-icon.svelte';

	const navIcons = [
		{ href: '/qbt/torrents', icon: 'House' },
		{ href: '/qbt/login', icon: 'SignIn' },
		{ href: '/qbt/torrents/overview', icon: 'ChartLine' },
		{ href: '/qbt/torrents/list', icon: 'Table' },
		{ href: '/qbt/logout', icon: 'SignOut' }
	];
</script>

<div class="flex flex-row gap-4">
	<nav
		class="fixed left-0 flex h-full w-[68px] flex-col gap-4 border-2 border-[var(--color-border-card)]"
	>
		<div class="grid grid-cols-1 justify-items-center">
			{#each data.torrents as t}
				<TorrentCard info={t} />
			{/each}
			{#each navIcons as icon}
				<NavIcon href={icon.href} icon={icon.icon} />
				<HorizontalSeparator />
			{/each}
		</div>
		<div>
			{#if data.user}
			    <img alt="cateat" src={cateat} class="size-[32px] flex size-[64px] items-center justify-center" />
				<!--
            if logged in then show torrent info
            like global speed graph
            or total/session upload/download
            -->
			{/if}
		</div>
	</nav>
	<div class="relative left-[68px] flex w-[calc(100vw-68px)] flex-col p-4">
		{@render children?.()}
	</div>
</div>
