<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="text-green-600 underline hover:no-underline hover:bg-green-600 hover:text-white rounded"
	><slot /></a
>
