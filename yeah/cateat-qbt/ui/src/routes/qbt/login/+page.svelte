<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Separator } from 'bits-ui';

	export let form;
	let user: string = '';
	let pass: string = '';
</script>

<div class="flex flex-col h-screen items-center justify-center">
	<div
		class="mb-6 flex w-[500px] flex-col items-center rounded-md border border-[var(--color-border-card)] p-6"
	>
		<h1>log in (qbt webui credentials)</h1>
		<Separator.Root
			class="my-4 shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px]"
		/>

		<form method="POST" use:enhance class="flex w-full flex-col items-center gap-4">
			<div class="">
				<label for="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					required
					class="flex h-input w-full max-w-[280px] flex-col items-center gap-1.5 rounded-input border border-border-input bg-background px-2 py-3 text-sm tracking-[0.01em] text-foreground select-none focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover data-invalid:border-destructive"
				/>
			</div>
			<div class="flex flex-col gap-1">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					required
					class="inline-flex h-input w-full max-w-[280px] flex-col items-center gap-1.5 rounded-input border border-border-input bg-background px-2 py-3 text-sm tracking-[0.01em] text-foreground select-none focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover data-invalid:border-destructive"
				/>
			</div>
			<Button.Root
				class="inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-input bg-dark px-[21px] text-[15px] font-semibold text-background shadow-mini hover:bg-dark/95 active:scale-[0.98] active:transition-all"
				type="submit">Log In</Button.Root
			>
		</form>
	</div>
	{#if form?.error}
		<p class="text-[var(--destructive)]">{form.error}</p>
	{/if}
</div>
