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

			<h2 id="itineraire">
				🗺️ Notre itinéraire <span class="text-base"
					>(<Link href="https://drive.google.com/file/d/17BvMGbyzwGGU2euSs7fJw2s-jS9NMKrB/view"
						>⬇️Télécharger</Link
					>)</span
				>
			</h2>

			<Timeline>
				<Jour
					date="Samedi 31 août"
					start="Montréal"
					end="Sommet Morin"
					length="92.4 km"
					link="https://www.google.com/maps/dir/Gare+Parc,+Avenue+Ogilvy,+Montreal,+QC/Charbonneau+Park/Saint-J%C3%A9r%C3%B4me,+QC/P'tit+Train+du+Nord/Morin-Heights,+QC/Camping+et+cabines+du+Sommet+Morin+Heights/@45.7399553,-74.1619252,10.26z/data=!4m38!4m37!1m5!1m1!1s0x4cc9190e664c1001:0x3ff96401ebfbf2d9!2m2!1d-73.6239467!2d45.5316087!1m5!1m1!1s0x4cc9270e3e569b49:0xe83cd7a7ea124059!2m2!1d-73.7823085!2d45.6380254!1m5!1m1!1s0x4ccf2ca32d386ced:0x5040cadae4d5210!2m2!1d-74.004948!2d45.775357!1m5!1m1!1s0x4ccf3851962b493b:0x7d6d127eb50ea837!2m2!1d-74.0754273!2d45.8727192!1m5!1m1!1s0x4ccf3cbb81e557e1:0x5c35a4196fc4a59a!2m2!1d-74.2457451!2d45.9038257!1m5!1m1!1s0x4ccf3cea3f61caab:0xaffd5110ea43f64e!2m2!1d-74.268425!2d45.9048027!3e1?entry=ttu"
				>
					<Heure start="9h00"
						>Départ de la <Link href="https://g.co/kgs/xmD6wM9">gare Parc</Link> à Montréal</Heure
					>
					<Heure start="10h45" distance="29.8">Pause au parc Charbonneau</Heure>
					<Heure start="12h30" distance="28.3">
						Dîner à Saint-Jérôme
						<br />
						<small
							>Marché public, brasserie à proximité, regroupement avec celles et ceux arrivant en
							train (<Link
								href="https://exo.quebec/Media/Default/z/lignes/train/TRAINS/SJ/exo12-20240322_21001231.pdf"
								>10h55 gare de la Concorde > St-Jérôme</Link
							>)</small
						>
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
					length="63.1 km"
					link="https://www.google.com/maps/place/Municipality+of+the+Township+of+Wentworth/@45.7441085,-74.7335033,10.48z/data=!4m51!1m44!4m43!1m11!1m2!1s0x4ccf3cea3f61caab:0xaffd5110ea43f64e!2sCamping+et+cabines+du+Sommet+Morin+Heights,+Rue+Bennett,+Morin-Heights,+QC!2m2!1d-74.268425!2d45.9048027!3m4!1m2!1d-74.2585645!2d45.7841043!3s0x4ccf26eeac810831:0xd1a31d1e6ba67817!1m11!1m2!1s0x4ccf2060dc6e5b03:0x5c278d2489e18374!2sMunicipality+of+the+Township+of+Wentworth,+175+Chem.+Louisa,+Wentworth,+Quebec+J8H+0C7!2m2!1d-74.3834524!2d45.7673923!3m4!1m2!1d-74.3272595!2d45.719797!3s0x4cced8b61e08dc23:0x497df937c8952551!1m6!1m2!1s0x4ccedbdd0fa333a9:0xd0d7ef02ae1f0d3c!2sBarron+Park,+Rue+Principale,+Lachute,+QC!2m2!1d-74.3402016!2d45.6577573!1m6!1m2!1s0x4ccedb7615b2d939:0x990ae2d8395b4759!2sMaxi+Lachute+Principale,+Rue+Principale,+Lachute,+QC!2m2!1d-74.345166!2d45.65619!1m3!2m2!1d-74.375428!2d45.5697505!3e1!3m5!1s0x4ccf2060dc6e5b03:0x5c278d2489e18374!8m2!3d45.7673923!4d-74.3834524!16s%2Fg%2F11bbx0590p?entry=ttu"
				>
					<Heure start="9h30">Départ</Heure>
					<Heure start="11h30" distance="31">Pause au Fiddler Lake Resort (Wentworth)</Heure>
					<Heure start="12h45" distance="19">
						Dîner au parc Barron (Lachute)
						<br />
						<small
							>Épicerie, restaus et commerces à proximité. Prévoir des provisions pour le soir.
						</small>
					</Heure>
					<Heure start="15h00" distance="11.8"
						><Link href="https://stada.ca/citoyens/parcs-et-camping/"
							>Arrivée au Camping du parc de Carillon</Link
						></Heure
					>
				</Jour>
				<Jour
					date="Lundi 2 septembre"
					start="Carillon"
					end="Montréal"
					length="87.8 km"
					link="https://www.google.com/maps/dir/Carillon+Park+Municipal+Campground/Jack+Layton+Park/Traverse+Oka-Hudson,+158+Rue+Main,+Hudson,+Quebec+J0P+1H0/Parc+Paul-Yvon-Lauzon/Parc+couvrette/Gare+Parc,+Avenue+Ogilvy,+Montreal,+QC/@45.46169,-74.2953117,10.46z/data=!4m68!4m67!1m20!1m1!1s0x4ccec4e667a07561:0x15acd5d74b36a741!2m2!1d-74.3791539!2d45.5716432!3m4!1m2!1d-74.3842886!2d45.5677074!3s0x4ccec4eef7683835:0x967e914dec07700b!3m4!1m2!1d-74.3527489!2d45.5110023!3s0x4ccec601becce43b:0xb0431820f5b02ad6!3m4!1m2!1d-74.3227912!2d45.4912951!3s0x4ccec8c17e73fb5d:0x12f580ac3d5b17f9!1m5!1m1!1s0x4cc934ea65635823:0xfb129b1d9f32a2b6!2m2!1d-74.1364963!2d45.4604808!1m10!1m1!1s0x4cc9344dc7872309:0x4c3dcd8cd139edc9!2m2!1d-74.1034551!2d45.4430264!3m4!1m2!1d-73.9828273!2d45.5076802!3s0x4cc931ad05f2c09d:0xa17d7ad778ab11e8!1m10!1m1!1s0x4cc9315ef77e7d63:0xf1aa2c9604018d9f!2m2!1d-73.988708!2d45.5247399!3m4!1m2!1d-73.9624312!2d45.5126682!3s0x4cc9304805e253db:0xaf9a226d885f71a8!1m10!1m1!1s0x4cc92357fc0880e5:0xa96f6a72a0a1191b!2m2!1d-73.8062583!2d45.5223134!3m4!1m2!1d-73.6588266!2d45.5385692!3s0x4cc918ed8ba25837:0xc83bfbf309a4bf00!1m5!1m1!1s0x4cc9190e664c1001:0x3ff96401ebfbf2d9!2m2!1d-73.6239467!2d45.5316087!3e1?entry=ttu"
				>
					<Heure start="9h00">Départ</Heure>
					<Heure start="10h30" distance="29.3">Pause au parc Jack Layton (Hudson)</Heure>
					<Heure start="11h00" distance="4.3"
						>Traversier Hudson-Oka <br />
						<small
							>Possibilité de <Link
								href="https://exo.quebec/Media/Default/z/lignes/train/TRAINS/VH/exo11-20240322_21001231.pdf"
								>retour en train</Link
							> à la gare de Vaudreuil (trains 11h30 et 15h30) ou la gare de Dorion (trains 11h35 et
							15h35) pour celles et ceux qui le souhaitent.</small
						></Heure
					>
					<Heure start="12h30" distance="16.9">
						Dîner au parc Paul-Yvon Lauzon (Saint Joseph du Lac)
						<br />
						<small>IGA à 500m</small>
					</Heure>
					<Heure start="14h30" distance="19.4">Pause au parc Couvrette (Laval)</Heure>
					<Heure start="16h00" distance="18.4">Arrivée de la Cavalcade 2024!</Heure>
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
