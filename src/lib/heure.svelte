<script lang="ts">
	export let start: string;
</script>

<li class="relative flex gap-2 my-3 group-first:group">
	<!-- <div class="border-b-2 -bottom-1.5 px-20 absolute group-first:border-0"></div> -->
	<div class="font-bold">{start}</div>
	<div><slot /></div>
</li>
