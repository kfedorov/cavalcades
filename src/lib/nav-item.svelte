<script lang="ts">
	export let href: string;
</script>

<li>
	<a
		{href}
		class="block p-3 font-semibold bg-white rounded border text-green-600  border-green-600 shadow-md hover:text-white hover:bg-green-600"
		><slot /></a
	>
</li>
