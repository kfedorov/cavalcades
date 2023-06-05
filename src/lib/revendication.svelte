<script>
	import { fade } from 'svelte/transition';
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<div
	class="text-md border border-purple-600 rounded-md my-5 overflow-hidden shadow-lg"
	aria-expanded={isOpen}
>
	<div on:click={toggle} class="p-5 bg-purple-100 cursor-pointer text-purple-900">
		<svg
			class="inline-block"
			style="tran"
			width="20"
			height="20"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
		>
		<slot />
	</div>
	{#if isOpen}
		<div class="p-5 bg-purple-50" transition:fade={{ duration: 300 }}>
			Entre autres:

			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}
</style>
