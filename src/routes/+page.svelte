<script lang="ts">
	import Link from '$lib/link.svelte';
</script>

<div id="top" class="background h-screen">
	<div class="container min-h-full p-8 max-w-5xl mx-auto flex flex-col justify-center gap-4">
		<div class="flex flex-col md:flex-row items-center justify-center gap-8">
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
					<p>
						La Cavalcade est une balade à vélo <span class="text-red-800 font-bold">
							mani-festive
						</span>
						et <span class="text-orange-600 font-bold">rassembleuse</span>
						revendiquant le <span class="text-violet-500 font-bold"> cyclisme utilitaire </span>
						comme solution pour une mobilité
						<span class="text-emerald-500 font-bold"> saine et écologique </span>
						<span class="text-sky-500 font-bold">à travers le Québec</span>.
					</p>
					<p>
						Notre équipe de bénévoles a débuté la planification de cette 3e édition et
						<strong> nous avons besoins de vous</strong>.
					</p>
				</div>
			</div>
		</div>

		<div
			class="prose prose-slate prose-li:my-1 prose-ul:my-2 prose-h2:mt-6 prose-headings:mb-2 flex flex-col md:flex-row gap-4 min-w-full justify-evenly"
		>
			<div>
				<h2>Infolettres</h2>

				<ul>
					<li>
						<Link href="https://mailchi.mp/19108d3a89e9/20240523_cavalcadevelo">
							Cavalcade vélo : l'hébergement !</Link
						> (2024-05-23)
					</li>
					<li>
						<Link href="https://mailchi.mp/10c959863f25/20240509_cavalcadevelo">
							Cavalcade vélo : l'itinéraire!</Link
						> (2024-05-05)
					</li>
					<li>
						<Link href="https://mailchi.mp/31251b10ca27/20240423_cavalcadevelo">
							Cavalcade vélo : intermodalité ?</Link
						> (2024-04-16)
					</li>
				</ul>

				<p>
					Restez au courant en <Link href="http://eepurl.com/ix4Izc">
						vous inscrivant à notre infolettre!</Link
					>
				</p>
			</div>
			<div>
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

				<p>
					Pour toute question, contactez
					<Link href="mailto:cavalcadevelo@gmail.com">cavalcadevelo@gmail.com</Link>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
