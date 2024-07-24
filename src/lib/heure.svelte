<script lang="ts">
	export let start: string;
	export let distance: string | undefined;
</script>

<li class="relative flex gap-3 my-2 group-first:group">
	<div class="flex-shrink-0 flex flex-col items-end w-12">
		<div class="font-bold">{start}</div>
		{#if distance}
			<div class="text-slate-400 text-xs -mt-1">{distance} km</div>
		{/if}
	</div>
	<div><slot /></div>
</li>
