<script lang="ts">
	import Link from '$lib/link.svelte';
</script>

<div id="top" class="background h-screen">
	<div
		class="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-full p-8 gap-8 max-w-5xl"
	>
		<div class=" text-slate-800 lg:max-w-md max-w-sm">
			<div class="space-y-5 mx-auto text-center text-lg text-purple-600">
				<enhanced:img alt="Cavalcade 2024" class="m-auto" src="$lib/assets/logo.png?w=896;448" />
			</div>
		</div>

		<div class="prose prose-slate prose-li:my-1 prose-ul:my-2 prose-h2:mt-6 prose-headings:mb-2">
			<h1>Cavalcade 2024</h1>
			<div>
				<p class="mt-0 mb-6">
					<strong>🎉 La Cavalcade Vélo est de retour</strong> 🎉 <br />
				</p>
				Notre équipe de bénévoles a débuté la planification de cette 3e édition et <strong
					>nous avons besoins de vous</strong
				>.

				<h2>Infolettres</h2>

				<ul>
					<li>
						<Link href="https://mailchi.mp/31251b10ca27/20240423_cavalcadevelo">
							Cavalcade vélo : intermodalité ?</Link
						> (2024-04-16)
					</li>
				</ul>
				Restez au courant en <Link href="http://eepurl.com/ix4Izc">
					vous inscrivant à notre infolettre!</Link
				>

				<h2>Rejoignez le mouvement</h2>
				<ul>
					<li>
						<Link href="https://discord.gg/zzQ7TfRYeU">Discord</Link> pour participer aux discussions
						et à la planification.
					</li>
					<li>
						<Link href="https://www.facebook.com/cavalcadevelo">Facebook</Link> pour rester au courant
						et partager nos publications.
					</li>
				</ul>

				Pour toute question, contactez
				<Link href="mailto:cavalcadevelo@gmail.com">cavalcadevelo@gmail.com</Link>
			</div>
		</div>
	</div>
</div>

<style>
</style>
