<script lang="ts">
	import Link from '$lib/link.svelte';
	import Timeline from '$lib/timeline.svelte';
	import Jour from '$lib/jour.svelte';
	import Heure from '$lib/heure.svelte';
</script>

<div id="top" class="background h-screen">
	<div class="" id="banner">
		<enhanced:img class="w-full" alt="Cavalcade 2024" src="$lib/assets/banner.jpg?w=2000" />
	</div>
	<div
		class="container min-h-full p-8 flex flex-col justify-center gap-4 -mt-40 relative prose prose-slate mx-auto prose-ul:p-0 prose-li:p-0 prose-li:list-none"
	>
		<div>
			<h1>Cavalcade 2024 - TGV : Train, Gare et Vélo</h1>

			<ul class="list-none p-0">
				<li class="p-0">
					<span>📅</span>

					<!-- Modifier l'invitation calendrier: https://calndr.link/events/BsWm5Bc9io?secret=4i66ugVVHLLJnZQDFGWRmVzuVy0IJSzZJexX -->
					<span>
						<Link href="https://calndr.link/event/BsWm5Bc9io"
							>Samedi 31 août -> lundi 2 septembre 2024</Link
						>
					</span>
				</li>
				<li class="p-0">
					<span>🗺️</span>
					<span>
						<Link href="#itineraire"
							>Montréal (Gare Parc) -> Morin Heights -> Carillon -> Montréal</Link
						>
					</span>
				</li>
				<li class="p-0">
					<span>🚴‍♀️</span>
					<span>
						<Link href="#inscription">Inscription!</Link>
					</span>
				</li>
			</ul>

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
				La thématique pour 2024 est la <span class="font-bold text-violet-500">multimodalité</span>.
				On veut mettre de l'avant le vélo comme comme premier (et/ou dernier) maillon pour se
				déplacer autrement avec le transport en commun, dans le but de développer des alternatives à
				l'auto-solo pour de petits ou grands trajets partout au Québec.
			</p>

			<h2 id="itineraire">🗺️ Notre itinéraire</h2>

			<Timeline>
				<Jour
					date="Samedi 31 août"
					start="Montréal"
					end="Sommet Morin"
					length="92.4 km"
					link="https://www.google.com/maps/dir/Gare+Parc,+Avenue+Ogilvy,+Montreal,+QC/Charbonneau+Park/Saint-J%C3%A9r%C3%B4me,+QC/P'tit+Train+du+Nord/Morin-Heights,+QC/Camping+et+cabines+du+Sommet+Morin+Heights/@45.7399553,-74.1619252,10.26z/data=!4m38!4m37!1m5!1m1!1s0x4cc9190e664c1001:0x3ff96401ebfbf2d9!2m2!1d-73.6239467!2d45.5316087!1m5!1m1!1s0x4cc9270e3e569b49:0xe83cd7a7ea124059!2m2!1d-73.7823085!2d45.6380254!1m5!1m1!1s0x4ccf2ca32d386ced:0x5040cadae4d5210!2m2!1d-74.004948!2d45.775357!1m5!1m1!1s0x4ccf3851962b493b:0x7d6d127eb50ea837!2m2!1d-74.0754273!2d45.8727192!1m5!1m1!1s0x4ccf3cbb81e557e1:0x5c35a4196fc4a59a!2m2!1d-74.2457451!2d45.9038257!1m5!1m1!1s0x4ccf3cea3f61caab:0xaffd5110ea43f64e!2m2!1d-74.268425!2d45.9048027!3e1?entry=ttu"
				>
					<Heure start="9h00">Départ de la gare Parc à Montréal</Heure>
					<Heure start="10h45" distance="29.8">Pause au parc Charbonneau</Heure>
					<Heure start="12h30" distance="28.3">
						Dîner à Saint-Jérôme
						<br />
						<small>Commerces à proximité, regroupement avec celles et ceux arrivant en train</small>
					</Heure>
					<Heure start="14h30" distance="14.7">Pause à la gare de Prévost</Heure>
					<Heure start="16h00" distance="16.9">
						Arrivée au <Link href="https://www.sommets.com/fr/quoi-faire/camping-et-cabines/"
							>Camping et Cabines du Sommet Morin Heights</Link
						>, 2.7 km du centre-village
						<br />
						<small>
							Il est recommandé de faire des courses au village (un IGA et de multiples restaus,
							brasseries etc..), car il n'y a pas d'épicerie au camping.
						</small>
					</Heure>
				</Jour>
				<Jour
					date="Dimanche 1 septembre"
					start="Sommet Morin"
					end="Carillon"
					length="62.2 km"
					link="https://www.google.com/maps/dir/Camping+et+cabines+du+Sommet+Morin+Heights,+Rue+Bennett,+Morin-Heights,+QC/Fiddler+Lake+Resort,+1000+Route+329,+Mille-Isles,+Quebec+J0R+1A0/Lac+Grace,+Argenteuil,+QC/Parc+Barron,+Rue+Principale,+Lachute,+QC/Parc+de+Carillon+-+Camping+municipal,+Rue+du+Plein+Air,+Argenteuil,+QC/@45.7404178,-74.4773111,10.84z/data=!4m37!4m36!1m5!1m1!1s0x4ccf3cea3f61caab:0xaffd5110ea43f64e!2m2!1d-74.268425!2d45.9048027!1m10!1m1!1s0x4ccf2428f3cf5c6f:0x67077b4257d77482!2m2!1d-74.2361802!2d45.8090471!3m4!1m2!1d-74.3360452!2d45.7864475!3s0x4ccf211b24c8b24d:0xb686327a90569b6!1m5!1m1!1s0x4ccf20cf22365bcf:0x14045dbe2230235f!2m2!1d-74.3196305!2d45.7651188!1m5!1m1!1s0x4ccedbdd0fa333a9:0xd0d7ef02ae1f0d3c!2m2!1d-74.3402016!2d45.6577573!1m5!1m1!1s0x4ccec4e667a07561:0x15acd5d74b36a741!2m2!1d-74.3791539!2d45.5716432!3e1?entry=ttu"
				>
					<Heure start="9h30">Départ</Heure>
					<Heure start="11h30" distance="32">Pause au parc du lac de Grace</Heure>
					<Heure start="12h45" distance="29.3">
						Dîner au parc Barron (Lachute)
						<br />
						<small
							>Épicerie, restaus et commerces à proximité. Prévoir des provisions pour le soir.
						</small>
					</Heure>
					<Heure start="15h00" distance="13.6"
						><Link href="https://stada.ca/citoyens/parcs-et-camping/"
							>Arrivée au Camping du parc de Carillon</Link
						></Heure
					>
				</Jour>
				<Jour
					date="Lundi 2 septembre"
					start="Carillon"
					end="Montréal"
					length="86.1 km"
					link="https://www.google.com/maps/dir/Carillon+Park+Municipal+Campground,+Rue+du+Plein+Air,+Argenteuil+Regional+County+Municipality,+QC/Pointe-aux-Anglais+Park/Parc+Paul-Yvon-Lauzon,+Rue+Cl%C3%A9ment,+Saint-Joseph-du-lac,+Quebec+J0N/Parc+couvrette,+Parc+Couvrette,+665+Rue+des+Jardins-Sainte-Doroth%C3%A9e,+Laval,+Quebec+H7X+2K4/Gare+Parc,+Avenue+Ogilvy,+Montreal,+QC/@45.4867536,-74.3438809,10.3z/data=!4m37!4m36!1m5!1m1!1s0x4ccec4e667a07561:0x15acd5d74b36a741!2m2!1d-74.3791539!2d45.5716432!1m5!1m1!1s0x4ccecdbe57c1c58f:0xc902664d7544588b!2m2!1d-74.1701657!2d45.498245!1m10!1m1!1s0x4cc9315ef77e7d63:0xf1aa2c9604018d9f!2m2!1d-73.988708!2d45.5247399!3m4!1m2!1d-73.9624312!2d45.5126682!3s0x4cc9304805e253db:0xaf9a226d885f71a8!1m5!1m1!1s0x4cc92357fc0880e5:0xa96f6a72a0a1191b!2m2!1d-73.8062583!2d45.5223134!1m5!1m1!1s0x4cc9190e664c1001:0x3ff96401ebfbf2d9!2m2!1d-73.6239467!2d45.5316087!3e1?entry=ttu"
				>
					<Heure start="9h00">Départ</Heure>
					<Heure start="10h30" distance="24.8">Pause au parc Pointe-aux-anglais</Heure>
					<Heure start="12h45" distance="23.4">
						Dîner au parc Paul-Yvon Lauzon
						<br />
						<small>IGA à 500m</small>
					</Heure>
					<Heure start="15h15" distance="19.4">Pause au parc Couvrette</Heure>
					<Heure start="17h00" distance="18.4">Arrivée de la Cavalcade 2024!</Heure>
				</Jour>
			</Timeline>

			<h2 id="inscription">🚲 Inscription</h2>
			<p>
				L'événement est GRATUIT pour toutes les personnes peu importe le nombre de journée ou nuitée
				où vous serez avec nous! <span class="font-bold">L'inscription reste obligatoire</span> car
				cela vous permettra de recevoir un courriel de rappel avec l'ensemble des informations clés
				de l'événement.
				<span class="font-bold">Merci de sélectionner un billet par personne participante</span>.
			</p>
			<p>
				Si vous en avez la possibilité. N'hésitez pas à acheter un billet payant ou à faire un don.
				L'ensemble des frais récoltés servent exclusivement au remboursement des dépenses
				nécessaires à l'organisation de la Cavalcade Vélo.
			</p>

			<div class="text-center">
				<a
					href="https://www.zeffy.com/ticketing/9dcc6826-029f-41e9-99f3-dc16184d208c"
					target="_blank"
					class="no-underline inline-block mx-auto border-4 border-white bg-green-600 text-white font-bold text-xl p-5 rounded-xl shadow-slate-400 shadow-lg hover:shadow-xl hover:shadow-slate-400 hover:-translate-y-1 transition-all duration-150"
				>
					Je m'inscris!
				</a>
			</div>

			<h2 id="informations">❗Informations importantes</h2>
			<p>
				Nous ne fournirons aucun équipement de camping ou de vélo. C'est votre propre responsabilité
				d'avoir avec vous votre équipement. À considérer qu'il peut avoir de la pluie ou encore des
				nuits froides en début septembre. Si c'est votre première sortie, ou pour vous rafraîchir la
				mémoire, voici
				<Link href="https://www.velo.qc.ca/boites-a-outils/pratique-cycliste/cyclotourisme/"
					>quelques conseils pour vous préparer</Link
				>.
			</p>
			<p>
				Notre partenaire <span class="font-bold">ReCycliste</span> propose à notre communauté une
				veille mécanique de votre vélo pour seulement 10$. <Link
					href="https://recycliste.ca/fr/magasins-velo.html">Prenez un RDV</Link
				> sur leur site avant le 17 août 2024 et vous recevrez une liste d'ajustements mécaniques à faire
				sur votre vélo par un magasin de réparation de votre choix.
			</p>
			<p>
				Tous•tes les particpant•es inscit•es recevront un numéro de téléphone à composer en cas de
				pépin. Merci de prendre en compte que l'assistance mécanique sera légère et qu'aucun
				transport de vélo sera possible.
			</p>
			<p>
				Finalement la Cavalcade Vélo est ouverte à tous•tes mais il est important de prendre en
				compte la distance à parcourir et l'autonomie physique des participant•es. Des possibilités
				de rejoindre l'événement en cours de route seront listées dans la section <Link
					href="#itineraire">Itinéraire</Link
				>.
			</p>
			<h2>🤝 Partenaires</h2>

			<div class="grid grid-cols-3 gap-4 items-center">
				<a href="https://coalitionmam.org" class="hover:scale-110 transition-all duration-150">
					<img
						src="https://coalitionmam.org/wp-content/uploads/2021/09/cmam-logo-2.png"
						alt="Coalition Mobilité Active Montréal"
					/>
				</a>
				<a href="https://recycliste.ca" class="hover:scale-110 transition-all duration-150">
					<img src="https://recycliste.ca/media/16x9/logo-250w.png" alt="ReCycliste" />
				</a>
				<a href="https://info.locomotion.app" class="hover:scale-110 transition-all duration-150">
					<img
						src="https://info.locomotion.app/wp-content/uploads/2022/11/cropped-1-logo-locomotion-bleu-768x233.png"
						alt="LocoMotion"
					/>
				</a>
			</div>
		</div>

		<div
			class="prose prose-slate prose-h2:mt-6 prose-headings:mb-2 flex flex-col md:flex-row gap-4 min-w-full justify-evenly"
		>
			<div>
				<h2>Infolettres</h2>

				<ul>
					<li>
						<div class="text-xs -mb-1.5 text-slate-400">2024-05-23</div>
						<Link href="https://mailchi.mp/19108d3a89e9/20240523_cavalcadevelo">
							Cavalcade vélo : l'hébergement !</Link
						>
					</li>
					<li>
						<div class="text-xs -mb-1.5 text-slate-400">2024-05-05</div>
						<Link href="https://mailchi.mp/10c959863f25/20240509_cavalcadevelo">
							Cavalcade vélo : l'itinéraire!</Link
						>
					</li>
					<li>
						<div class="text-xs -mb-1.5 text-slate-400">2024-04-16</div>
						<Link href="https://mailchi.mp/31251b10ca27/20240423_cavalcadevelo">
							Cavalcade vélo : intermodalité ?</Link
						>
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
	#banner img {
		object-fit: cover;
		max-height: 50vh;
	}
	#banner picture {
		position: relative;
	}
	#banner picture:after {
		content: '';
		display: block;
		height: 30rem;
		width: 100%;
		position: absolute;
		bottom: 0;
		background: linear-gradient(180deg, transparent, white);
	}
</style>
