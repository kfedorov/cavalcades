<script lang="ts">
    export let href: string;
</script>
<li><a {href} class="block p-3 rounded border hover:text-white hover:bg-sky-500"><slot /></a></li>
