<script lang="ts">
	export let href: string;
	export let external = false;
</script>

<a
	{href}
	class="text-green-600 underline hover:no-underline hover:bg-green-600 hover:text-white rounded"
	target={external ? '_blank' : '_self'}><slot /></a
>
