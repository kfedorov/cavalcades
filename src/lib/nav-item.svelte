<script lang="ts">
	export let href: string;
	export let color = 'green';
</script>

<li>
	<a
		{href}
		target={href[0] === '#' ? '_self' : '_blank'}
		class="block p-3 transition-all font-semibold bg-white rounded border  text-{color}-600  border-{color}-600 shadow-md hover:text-white hover:bg-{color}-600"
		><slot /></a
	>
</li>
