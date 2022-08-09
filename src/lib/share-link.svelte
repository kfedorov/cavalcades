<script lang="ts">
	async function share() {
		await navigator.share({
			title: 'Cavalcade - 2 Roues 1 Avenir',
			text: 'Rejoignez la cavalcade le 10 Septembre prochain!',
			url: 'https://cavalcadevelo.com'
		});
	}
</script>

<span
	class="text-green-600 underline hover:no-underline hover:bg-green-600 hover:text-white rounded cursor-pointer"
	on:click={share}><slot /></span
>
