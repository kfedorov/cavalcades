<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="text-link-600 underline hover:no-underline hover:bg-link-600 hover:text-white rounded border-2 border-transparent hover:border-black px-0.5 -ml-0.5"
	target={href[0] === '#' ? '_self' : '_blank'}><slot /></a
>
