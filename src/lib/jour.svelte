<script lang="ts">
	import Link from './link.svelte';

	export let date: string;
	export let start: string;
	export let end: string;
	export let length: string;
	export let link: string;
</script>

<li class="mb-10 relative">
	<div class="absolute w-3 h-3 bg-purple-600 rounded-full -left-1.5 border border-white top-2.5" />
	<div class="ml-4">
		<time class="mb-1 text-sm font-normal leading-none text-purple-600">{date}</time>
		<h3 class="text-xl font-semibold text-gray-900">
			<Link href={link}>{start} -> {end} | {length}</Link>
		</h3>
		<ul class="mt-5 leading-7 group">
			<slot />
		</ul>
	</div>
</li>
