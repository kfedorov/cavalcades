<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="text-link-600 underline hover:no-underline hover:bg-link-600 hover:text-white rounded px-0.5 -mx-0.5"
	target={href[0] === '#' ? '_self' : '_blank'}><slot /></a
>
