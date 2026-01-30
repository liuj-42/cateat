<script lang="ts">
	import { page } from '$app/state';
	import House from 'phosphor-svelte/lib/House';
	import SignIn from 'phosphor-svelte/lib/SignIn';
	import SignOut from 'phosphor-svelte/lib/SignOut';
	import ChartLine from 'phosphor-svelte/lib/ChartLine';
	import Table from 'phosphor-svelte/lib/Table';

	let { href, icon } = $props();

	let isActive = $derived(page.url.pathname === href);

	// Map of icon names to components
	const iconMap = {
		House,
		SignIn,
		SignOut,
		ChartLine,
		Table
	};

	let IconComponent = $derived(iconMap[icon]);
</script>

<a
	href={href}
	class="flex size-[64px] items-center justify-center transition-colors duration-200 hover:bg-[var(--dark-04)] {isActive
		? 'bg-[var(--dark-10)]'
		: ''}"
	style={isActive ? 'box-shadow: 3px 0 0 #fff !important;' : ''}
>
	<IconComponent size={32} />
</a>
