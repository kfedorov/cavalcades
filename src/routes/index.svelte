<script lang="ts" context="module">
	// export const hydrate = false;
</script>

<script lang="ts">
	import Jour from '$lib/jour.svelte';
	import SousTitre from '$lib/sous-titre.svelte';
	import NavItem from '$lib/nav-item.svelte';
	import SectionTitle from '$lib/section-title.svelte';
	import Section from '$lib/section.svelte';
	import Link from '$lib/link.svelte';
	import Timeline from '$lib/timeline.svelte';
	import Heure from '$lib/heure.svelte';
	import Revendication from '$lib/revendication.svelte';
	import ShareLink from '$lib/share-link.svelte';
</script>

<div id="top" class="background pb-10">
	<div class="container mx-auto">
		<div class="mx-auto text-slate-800">
			<div class="p-8 space-y-5 mx-auto text-center text-lg text-purple-600 ">
				<div>Oyez Oyez Oyez!!! <br /> Vous êtes toutes et tous convié.e.s à la</div>
				<!-- <h1 class="text-purple-600 mb-2">La Cavalcade</h1>
				<div class="text-xl text-purple-500">2 Roues - 1 Avenir</div> -->
				<img alt="Cavalcade 2022 - Deux Roues Un avenir" class="m-auto" src="logo_small.webp" />
				<div>Du 3 au 5 septembre 2022</div>
			</div>
		</div>
		<nav class="flex flex-col px-8 space-y-5 ">
			<div class="not-prose ">
				<ul class="space-y-3 md:space-y-0 md:flex gap-2 justify-center flex-wrap">
					<NavItem href="#quoi">C'est quoi?!</NavItem>
					<NavItem href="#pourquoi">Revendications</NavItem>
					<NavItem href="#chemin">Itinéraire</NavItem>
					<NavItem href="#participer">Comment participer</NavItem>
					<NavItem href="#contact">Nous contacter</NavItem>
					<NavItem color="facebook" href="https://www.facebook.com/cavalcadevelo">Facebook</NavItem>
				</ul>
			</div>
		</nav>

		<div class="prose prose-ol:lg:my-1 prose-li:lg:my-1 lg:prose-lg mx-auto text-slate-800">
			<div>
				<Section>
					<SectionTitle id="quoi">C'est quoi?!</SectionTitle>
					<p>
						Le mot cavalcade désignant originalement une chevauchée animée de groupe, nous
						souhaitons mettre cette idée au goût du jour et en faire un balade de vélo mani-festive
						avec quelques revendications!
					</p>
					<p>
						Une randonnée vélo-camping de trois jours suivi d'un événement à Québec pour faire
						valoir l'importance du déplacement actif au sein de notre société.
					</p>
					<dl>
						<dt>Quand</dt>
						<dd>Du 3 au 5 septembre 2022, samedi au lundi de la fête du Travail.</dd>
						<dt>Trajet</dt>
						<dd>Montréal -> Québec (<Link href="#chemin">détails...</Link>)</dd>
					</dl>
				</Section>
				<!-- <a
					href="#top"
					style="top: calc(100vh - 4rem)"
					class="sticky float-right my-4 right-4 block py-3 px-5 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-500 shadow-md"
					>↑</a
				> -->
				<Section>
					<SectionTitle id="pourquoi">Revendications</SectionTitle>
					<!-- <p>
						Nous croyons que le déplacement actif est plus nécessaire que jamais. Il est temps de
						repenser radicalement notre approche à la mobilité pour réduire au maximum la
						consommation des ressources limitées de notre planète et d'éliminer la pollution
						omniprésente. Au delà des impacts directs sur l'environnement, le déplacement actif est
						au coeur d'un projet de société, de collectivités et d'individus sains.
					</p>
					<p>
						En cette période d'élection, nous espérons envoyer un message fort: le gouvernement
						provincial doit agir pour favoriser le transport actif et ainsi faciliter la transition
						écologique et sociale.
					</p>
					<SousTitre>Nos demandes</SousTitre> -->
					<h5 class="font-bold">À la vue</h5>
					<ul>
						<li>
							Des défis des changements climatiques que seule l'électrification ne saura affronter;
						</li>
						<li>
							Des problèmes de santé physique et mentale résultant de nos modes de vie sédentaire;
						</li>
						<li>Des problèmes de sécurité du transport actif;</li>
						<li>De la montée croissante de l'usage du transport actif dans la province.</li>
					</ul>
					<h5 class="font-bold">Étant donné</h5>
					<ul>
						<li>
							Que le vélo et les transports actifs sont écologiques, efficaces, durables,
							économiques et sont l'une des meilleures options de transport pour de courtes
							distances mais aussi pour d'autres usages à la grandeur de la province;
						</li>
					</ul>
					<strong>
						Nous demandons au gouvernement du Québec de mettre en place une politique nationale
						ambitieuse du vélo utilitaire et d'en faire un projet de société.
					</strong>

					<Revendication>
						Créer un plan national de mobilité active décennal avec un financement conséquent et en
						faire un projet de société.
						<ul slot="content">
							<li>
								Obligation d'aménagements cyclables utilitaires, sécuritaires et quatre-saisons dans
								toute réfection routière provinciale, pour connecter villes et villages.
							</li>
							<li>
								Sécurisation des tronçons de la route verte (aménagements de plaisance pour
								cyclotourisme).
							</li>
							<li>
								Financer à hauteur de 500 M$ par année le réseau cyclable provincial et municipal.
							</li>
							<li>Créer unlien express et sécuritaire dédié au vélo entre Montréal et Québec.</li>
							<li>
								Mesurer les résultats des actions sur la santé physique et mentale de la population
								ainsi que les retombées sociales et économiques.
							</li>
						</ul>
					</Revendication>
					<Revendication>
						Revoir les standards d'aménagement routiers en mettant au sommet les plus vulnérables
						sur la route.
						<ul slot="content">
							<li>
								Rendre les villes et municipalités redevables pour la mise en place d'une politique
								nationale de vision zéro des transports actifs.
							</li>
							<li>Prioriser la sécurité des individus par rapport à la fluidité des véhicules.</li>
							<li>
								Instaurer au niveau national l'obligation d'aménagements physiques pour apaiser le
								trafic automobile (ex. aménagement Woonerf, vélo-rues) dans toute réfection de rue
								résidentielle
							</li>
							<li>
								Instaurer l'obligation des villes et municipalités de mettre en place du 30 km/h
								dans toutes les rues résidentielles.
							</li>
							<li>
								Instaurer une politique du “dernier mile” pour connecter les pôles de mobilités
								(stations trains, terminus de bus régional) avec des infrastructures de transports
								actifs.
							</li>
							<li>
								Revoir la mission du Ministère des Transports du Québec et coordonner sa mission
								avec celle du Ministère des Affaires municipales et habitations.
							</li>
						</ul>
					</Revendication>
					<Revendication>
						Faire une refonte du code de la sécurité routière pour l'adapter aux transports actifs.
						<ul slot="content">
							<li>
								Rendre obligatoire un test de sensibilisation à la pratique du vélo à tous les
								nouveaux détenteurs de permis de conduire de véhicule motorisé
							</li>
							<li>Autoriser le stop Idaho aux usagers du vélo et transport actif</li>
							<li>
								Modifier le CSR pour que le transport actif soit prioritaire vis-à-vis le transport
								motorisé.
							</li>
						</ul>
					</Revendication>
					<Revendication>
						Démocratiser l'usage du vélo et éveil au transport actif.
						<ul slot="content">
							<li>Obligation de cours de vélo à la sixième année du primaire</li>
							<li>Subvention (100%) à l'achat de vélos de ville aux personnes à faible revenu</li>
							<li>Subvention à l'achat de vélos de ville et vélos électriques</li>
							<li>Crédit d'impôts aux citoyens qui ne possèdent pas d'auto</li>
							<li>Campagne publicitaire valorisant le transport actif utilitaire</li>
						</ul>
					</Revendication>
				</Section>
				<Section>
					<SectionTitle id="chemin">Itinéraire</SectionTitle>
					<p>Montréal -> Québec sur la rive nord, route 138.</p>
					<Timeline>
						<Jour
							link="https://www.google.com/maps/dir/Parc+La+Fontaine,+Avenue+Calixa-Lavall%C3%A9e,+Montr%C3%A9al,+QC/Parc+de+l'%C3%8Ele-Lebel,+Rue+Notre+Dame,+Repentigny,+QC/Parc+G%C3%A9rard-Lavall%C3%A9e,+Rue+Saint+Antoine+Sud,+Lavaltrie,+QC/Belv%C3%A9d%C3%A8re+Jacques-Lavall%C3%A9e,+Rue+De+Frontenac,+Berthierville,+QC/Parc+tricentenaire,+Louiseville,+QC/@45.8887644,-73.8166036,9z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x4cc91bc84bbfa227:0x45962228026ccc97!2m2!1d-73.5703556!2d45.5273219!1m5!1m1!1s0x4cc8e5ceb269b14d:0xf093f6db64b7bb5e!2m2!1d-73.4496109!2d45.7354089!1m5!1m1!1s0x4cc8ed5ee828fec7:0xfa10e2e2441059b0!2m2!1d-73.2753851!2d45.883952!1m5!1m1!1s0x4cc89bfbcfb15b4b:0xcb819ab0961fff3c!2m2!1d-73.1754886!2d46.0798773!1m5!1m1!1s0x4cc62fa183928631:0x18be139896f97ffe!2m2!1d-72.9420103!2d46.2570143!3e1!5m1!1e3"
							date="Samedi 3 septembre 2022"
							start="Parc La Fontaine, Montréal"
							end="Louiseville"
							length="100 km"
						>
							<Heure start="08h00">Parc Lafontaine - > Repentigny (28,8 km)</Heure>
							<Heure start="10h00"
								>Collation au <Link
									href="https://www.google.com/maps/place/Parc+de+l'%C3%8Ele-Lebel/@45.7354089,-73.4517996,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc8e5ceb269b14d:0xf093f6db64b7bb5e!8m2!3d45.7354089!4d-73.4496109"
									>Parc de l'île-Lebel</Link
								> 🚻 🚰</Heure
							>
							<Heure start="10h30">Repentigny -> Lavaltrie (22,3 km)</Heure>
							<Heure start="12h00">
								<ul>
									<li>
										Dîner au <Link
											href="https://www.google.com/maps/place/Parc+G%C3%A9rard-Lavall%C3%A9e/@45.883952,-73.2775738,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc8ed5ee828fec7:0xfa10e2e2441059b0!8m2!3d45.883952!4d-73.2753851"
											>Parc Gérard-Lavallee</Link
										> 🚻 🚰
									</li>
									<li>
										Supermarché <Link
											href="https://www.google.com/maps/place/Supermarket+IGA+extra+Crevier+Inc.+Lavaltrie/@45.8921177,-73.3131328,15z/data=!4m16!1m9!2m8!1sgrocery+store!3m6!1sgrocery+store!2sR%C3%B4tisserie+La+Victorienne,+1231+Rue+Notre-Dame,+Lavaltrie,+QC+J5T+1R7!3s0x4cc8ed5ddb13b809:0x8d393657591db488!4m2!1d-73.2794444!2d45.8825!3m5!1s0x4cc8ed378a9bae55:0x9c8272f1d86b1c2c!8m2!3d45.892117!4d-73.295623!15sCg1ncm9jZXJ5IHN0b3JlWg8iDWdyb2Nlcnkgc3RvcmWSAQ1ncm9jZXJ5X3N0b3JlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU56Ym5BMk9GQlJFQUU"
											>IGA</Link
										> à 1,9 km du parc 🛒
									</li>
									<li>
										<Link
											href="https://www.google.com/maps/place/Boulangerie+La+Mie/@45.8837802,-73.2774772,17z/data=!4m12!1m6!3m5!1s0x4cc8ed5ee828fec7:0xfa10e2e2441059b0!2sParc+G%C3%A9rard-Lavall%C3%A9e!8m2!3d45.883952!4d-73.2753851!3m4!1s0x4cc8ed5dd7398ac1:0xb2c08c929caf10ac!8m2!3d45.8827813!4d-73.2785162"
											>Boulangerie La Mie</Link
										> 🛒
									</li>
									<li>
										Restaurant <Link
											href="https://www.google.com/maps/place/R%C3%B4tisserie+La+Victorienne/@45.8837802,-73.2774772,17z/data=!4m12!1m6!3m5!1s0x4cc8ed5ee828fec7:0xfa10e2e2441059b0!2sParc+G%C3%A9rard-Lavall%C3%A9e!8m2!3d45.883952!4d-73.2753851!3m4!1s0x0:0x8d393657591db488!8m2!3d45.8825!4d-73.2794444"
											>Rôtisserie La Victorienne</Link
										> 🛒
									</li>
									<li>
										Boutique de vélo <Link
											href="https://www.google.com/maps/place/Lavaltrie+Sport/@45.8812325,-73.2828917,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc8ed1ccbcb5bd9:0xedac9aa9ce43f0c4!8m2!3d45.8812325!4d-73.280703"
											>Lavaltrie Sports</Link
										> 🛠
									</li>
								</ul>
							</Heure>
							<Heure start="13h30">Lavaltrie -> Berthierville (24,1 km)</Heure>
							<Heure start="15h00"
								>Collation au <Link
									href="https://www.google.com/maps/place/Parc+Sainte-Genevi%C3%A8ve,+Berthierville,+QC+J0K+1A0/@46.0803939,-73.1788148,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc89adf789c53df:0xf255a8911b379179!8m2!3d46.0802151!4d-73.176249"
									>Parc Ste-Geneviève</Link
								> 🚻 🚰</Heure
							>
							<Heure start="15h30">Berthierville -> Louiseville (28,7 km)</Heure>
							<Heure start="17h30">
								<ul>
									<li>
										Souper et dodo <Link
											href="https://www.google.com/maps/place/Parc+tricentenaire/@46.2570143,-72.944199,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc62fa183928631:0x18be139896f97ffe!8m2!3d46.2570143!4d-72.9420103"
											>Parc Tricentenaire</Link
										> derrière l'église 🚻 🚰
									</li>
									<li>
										Épicerie <Link
											href="https://www.google.com/maps/dir/Parc+tricentenaire/IGA+Supermarch%C3%A9+Cl%C3%A9ment+Louiseville+inc.,+714+Bd+St+Laurent+O,+Louiseville,+QC+J5V+1K7/@46.2569772,-72.9500355,16z/data=!4m14!4m13!1m5!1m1!1s0x4cc62fa183928631:0x18be139896f97ffe!2m2!1d-72.9420103!2d46.2570143!1m5!1m1!1s0x4cc62c180f012001:0x40f1fcfcb53a88dc!2m2!1d-72.9538517!2d46.2564297!3e1"
											>IGA</Link
										> à 1 km du campement 🛒
									</li>
									<li>
										Boutique de vélo <Link href="https://boutiquesportcarrefournature.com/"
											>Boutique Sport Carrefour Nature</Link
										> 🛠
									</li>
								</ul>
							</Heure>
						</Jour>
						<Jour
							link="https://www.google.com/maps/dir/Parc+tricentenaire,+Louiseville,+QC/Parc+Laviolette,+Rue+Notre+Dame+Ouest,+Trois-Rivi%C3%A8res,+QC/Toilette,+Champlain,+QC+G0X+1C0/Moulin+%C3%A0+vent+de+Grondines,+Chemin+des+Anc%C3%AAtres,+Grondines,+QC/Ar%C3%A9na+de+Donnacona,+Rue+de+l%27%C3%89glise,+Donnacona,+QC/@46.4748646,-72.6158766,10z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x4cc62fa183928631:0x18be139896f97ffe!2m2!1d-72.9420103!2d46.2570143!1m5!1m1!1s0x4cc7cf63a91f1281:0x87dbbd2eef6090b2!2m2!1d-72.5691662!2d46.3151028!1m5!1m1!1s0x4cc7beeb968e8907:0x3022f7431e45e175!2m2!1d-72.3397759!2d46.4406329!1m5!1m1!1s0x4cc79c10bd5c98cf:0x9aa3f02b475f791b!2m2!1d-72.0377129!2d46.5879705!1m5!1m1!1s0x4cc77e9ea9ff0b3b:0xce3b14169ad321e6!2m2!1d-71.7297238!2d46.6789205!3e1!5m1!1e3"
							date="Dimanche 4 septembre 2022"
							start="Louiseville"
							end="Donnacona"
							length="120 km"
						>
							<Heure start="08h00">Louiseville -> Trois-Rivières (31,7 km)</Heure>
							<Heure start="10h30"
								>Collation au <Link
									href="https://www.google.com/maps?q=7055+Rue+Notre+Dame+O,+Trois-Rivi%C3%A8res,+QC+G9A+6M3&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj87PuXpoX5AhUgkYkEHcnIBT8Q_AUoAXoECAEQAw"
									>Parc Laviolette</Link
								> 🚻 🚰</Heure
							>
							<Heure start="11h00">Trois-Rivière -> Champlain (25,0 km)</Heure>
							<Heure start="13h00">
								<ul>
									<li>
										Dîner au <Link
											href="https://www.google.com/maps/place/Quai+de+Champlain/@46.4409027,-72.3422688,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc7beebeb5b1537:0x7f4bda771f196183!8m2!3d46.4409027!4d-72.3400801"
											>Quai de Champlain</Link
										> 🚻
									</li>
									<li>
										Remplissage de gourdes devant le <Link
											href="https://www.google.com/maps?q=959+rue+notre-dame+champlain&um=1&ie=UTF-8&sa=X&ved=2ahUKEwirkqKKiYb5AhWtpIkEHdNgDiwQ_AUoAXoECAEQAw"
											>Presbytère</Link
										> au 959 rue Notre-Dame 🚰
									</li>
									<li>
										Épicerie <Link
											href="https://www.google.com/maps/place/Achat+Champlain/@46.4414801,-72.3417474,17z/data=!4m15!1m9!2m8!1sD%C3%89PANneur!3m6!1sD%C3%89PANneur!2sChamplain,+QC!3s0x4cc7beb982c72339:0x77e32eb779d12fb6!4m2!1d-72.3450988!2d46.4409094!3m4!1s0x4cc7bf34ca25f52f:0x24fbbac65fd1adcc!8m2!3d46.4411986!4d-72.340636"
											>Achat Champlain</Link
										> 100 rue Notre-Dame Sandwich, plat cuisiné, fruit, légume 🛒
									</li>
									<li>
										<span class="bold">ou</span> la <Link
											href="https://www.google.com/maps/place/Halte+Antoine-Desrosiers/@46.4427642,-72.3273888,15z/data=!4m5!3m4!1s0x4cc7be8afa2f68c1:0x57b9f978e17bac86!8m2!3d46.4427642!4d-72.3186341"
											>Halte Antoine-Derosier</Link
										> avec plus de table de picnic 1,7 km plus loin 🚻
									</li>
								</ul>
							</Heure>
							<Heure start="14h00">Champlain -> Grondine (32,1 km)</Heure>
							<Heure start="16h00"
								>Collation au <Link
									href="https://www.google.com/maps/place/Moulin+%C3%A0+vent+de+Grondines/@46.5895457,-72.0417832,16z/data=!4m29!1m23!4m22!1m6!1m2!1s0x4cc62b937c7f88a3:0xa5905fbb46df164d!2sLouiseville,+QC!2m2!1d-72.9432215!2d46.2559944!1m6!1m2!1s0x4cc7cf63a91f1281:0x87dbbd2eef6090b2!2sParc+Laviolette,+Rue+Notre+Dame+Ouest,+Trois-Rivi%C3%A8res,+QC!2m2!1d-72.5691662!2d46.3151028!1m6!1m2!1s0x4cc7beeb968e8907:0x3022f7431e45e175!2sToilette,+Champlain,+QC+G0X+1C0!2m2!1d-72.3397759!2d46.4406329!3e1!3m4!1s0x4cc79c10bd5c98cf:0x9aa3f02b475f791b!8m2!3d46.5879705!4d-72.0377129!5m1!1e3"
									>Moulin à vent de Grondine</Link
								> 🚻</Heure
							>
							<Heure start="16h30">Grondine -> Donnacona (32,9 km)</Heure>
							<Heure start="18h30">
								<ul>
									<li>
										Souper et dodo au <Link
											href="https://www.google.com/maps?q=parc+donnacona+300+rue+de+l%27%C3%A9glise+donnacona&sxsrf=ALiCzsbCKMtw1-lvxdAcvoKgbAOgwTfyLw:1658246364272&gs_lcp=Cgdnd3Mtd2l6EAEYATIFCAAQgAQyBAgAEB4yBggAEB4QBTIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIOgcIABBHELADOgYIABAeEAc6CAgAEB4QBxATSgQIQRgASgQIRhgAUOcMWK8RYLwtaAFwAXgAgAHGAYgBpwWSAQMwLjWYAQCgAQHIAQjAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjIrqSVqYX5AhVAkokEHf9HDloQ_AUoAXoECAIQAw"
											>Parc Donnacona</Link
										> 🚻 🚰
									</li>
									<li>
										Épicerie <Link
											href="https://www.google.com/maps/place/Metro+Donnacona/@46.6810815,-71.7332489,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc77e9e89b26c15:0x338346f421af265a!8m2!3d46.6810815!4d-71.7310602"
											>Métro Donnacona</Link
										> à 500m 🛒
									</li>
									<li>Douche Complexe Sportif Promutuel Donnacona 🚿</li>
								</ul>
							</Heure>
						</Jour>
						<Jour
							link="https://www.google.com/maps/dir/Parc+Donnacona,+Donnacona,+QC/Parc+nautique+de+Cap-Rouge,+Chemin+de+la+Plage+Jacques+Cartier,+Quebec+City,+QC/Parlement,+Qu%C3%A9bec,+QC/@46.74302,-71.6120733,11z/am=t/data=!4m20!4m19!1m5!1m1!1s0x4cc77e9bfb4ffccf:0x45637e925434b25c!2m2!1d-71.7299576!2d46.6778483!1m5!1m1!1s0x4cb890f2206bc733:0x378b40f3ff642e85!2m2!1d-71.341652!2d46.747046!1m5!1m1!1s0x4cb895d902f2db89:0x18a7532c57de8a9f!2m2!1d-71.213326!2d46.810104!3e1!5m1!1e3"
							date="Lundi 5 septembre 2022"
							start="Donnacona"
							end="Québec"
							length="60 km"
						>
							<Heure start="08h00">Donnacona -> Cap Rouge (35,1 km)</Heure>
							<Heure start="10h30"
								>Collation au <Link
									href="https://www.google.com/maps/place/Parc+nautique+de+Cap-Rouge/@46.747046,-71.3438407,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb890f2206bc733:0x378b40f3ff642e85!8m2!3d46.747046!4d-71.341652"
									>Parc Nautique de Cap-Rouge</Link
								> 🚻 🚰</Heure
							>
							<Heure start="11h00"
								>Cap-Rouge -> Québec (25,0 km) <span class="italic">- Masse Critique!</span></Heure
							>
							<Heure start="13h00">
								<span class="bold">Hôtel du Parlement - Revendications</span>
							</Heure>
							<Heure start="13h00"
								><ul>
									<ul>
										Dîner à l'Hôtel du Parlement
										<li>
											<Link
												href="https://www.google.com/maps/place/%C3%89picerie+Richard/@46.8119089,-71.2074614,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOlhJM4LeukoR_ip0LTEbJ8-0DWaLRivp4x9ftJ!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOlhJM4LeukoR_ip0LTEbJ8-0DWaLRivp4x9ftJ%3Dw224-h398-k-no!7i2340!8i4160!4m18!1m9!2m8!1zw6lwaWNlcmll!3m6!1zw6lwaWNlcmll!2zUXXDqWJlYywgUUM!3s0x4cb8968a05db8893:0x8fc52d63f0e83a03!4m2!1d-71.2074596!2d46.8130816!3m7!1s0x4cb895dc10f07637:0x2e573cc187829b2!8m2!3d46.8119089!4d-71.2074614!14m1!1BCgIgAQ!15sCgnDqXBpY2VyaWVaCyIJw6lwaWNlcmllkgENZ3JvY2VyeV9zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNd05EaGZOVk5CRUFF"
												>Épicerie Richard</Link
											> sur le chemin de l'Hôtel du Parlement 🛒
										</li>
										<li>
											Épicerie <Link
												href="https://www.google.com/maps/place/%C3%89picerie+Richard/@46.8119089,-71.2074614,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOlhJM4LeukoR_ip0LTEbJ8-0DWaLRivp4x9ftJ!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOlhJM4LeukoR_ip0LTEbJ8-0DWaLRivp4x9ftJ%3Dw224-h398-k-no!7i2340!8i4160!4m18!1m9!2m8!1zw6lwaWNlcmll!3m6!1zw6lwaWNlcmll!2zUXXDqWJlYywgUUM!3s0x4cb8968a05db8893:0x8fc52d63f0e83a03!4m2!1d-71.2074596!2d46.8130816!3m7!1s0x4cb895dc10f07637:0x2e573cc187829b2!8m2!3d46.8119089!4d-71.2074614!14m1!1BCgIgAQ!15sCgnDqXBpY2VyaWVaCyIJw6lwaWNlcmllkgENZ3JvY2VyeV9zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNd05EaGZOVk5CRUFF"
												>Métro Plus St-Roch</Link
											> détour de 5 km 🛒
										</li>
									</ul>
								</ul>
							</Heure>
							<Heure start="17h00"
								>Retour vers Montréal en bus | <span class="italic">Détails à venir</span></Heure
							>
						</Jour>
					</Timeline>
				</Section>
				<Section>
					<SectionTitle id="participer">Comment participer</SectionTitle>
					<p>Ça vous interpelle?! Joignez-vous à nous!</p>
					<SousTitre>Joindre la cavalcade</SousTitre>
					<p>
						Vous pouvez rejoindre la Cavalcade à n'importe quel point dans son <Link href="#chemin"
							>parcours</Link
						>. Tout le monde est bienvenu-e, que ce soit pour l'entièreté du chemin ou seulement une
						petite partie. Cependant, si vous désirez vous joindre à nous du début à la fin, soyez
						avertis de la considérable distance à parcourir chaque jour: il serait préférable si
						vous êtes en formes et avez déjà de l'expérience pour ce genre de trajet.
					</p>
					<div class="border bg-green-50 border-green-600 p-5 rounded-lg py-4">
						<strong
							>Il est obligatoire de remplir le formulaire pour participer à la cavalcade.
						</strong> <br />
						Cela nous permet de collecter les fonds pour réserver le transport du retour et de nous assurer
						que nos campings pourront accommoder le nombre de participants.
						<br />
						<a
							class="inline-block mt-2 px-4 py-2 border shadow-md rounded  
					bg-white border-green-600 no-underline text-green-700 transition-all hover:translate-y-1 hover:shadow-sm hover:bg-green-700 hover:text-white"
							href="https://docs.google.com/forms/d/e/1FAIpQLSeiN4QqFrWO7WYZAeTnqY0hhXYb5HKGDER4vFpYTW5ED5uNNw/viewform"
							target="_blank">Rejoignez la cavalcade!</a
						>
					</div>
					<dl>
						<dt>Équipement</dt>
						<dd>
							Prévoir tout son équipement typique pour le vélo-camping: vélo, tente, matelas de sol,
							produit d'hygiène, vêtements, etc. Voici <Link
								href="https://www.velo.qc.ca/boites-a-outils/pratique-cycliste/cyclotourisme/"
								>quelques conseils.</Link
							>
						</dd>
						<dt>Nourriture</dt>
						<dd>
							Nous prévoyons des pauses de 30min à une heure, à chaque 25 km à 35 km, l'avant-midi,
							le midi et l'après-midi tout près des épiceries/restaurants.
						</dd>
					</dl>
					<SousTitre>Encourager la cavalcade</SousTitre>
					<p>
						Même si vous ne pouvez pas participer en personne, il y a une tonne de moyens de nous
						encourager!
					</p>
					<dl>
						<dt><ShareLink>Parlez-en!</ShareLink></dt>
						<dd>En personne ou en ligne! Partagez cette page ou l'événement Facebook.</dd>
						<dt>
							<Link
								href="https://checkout.stripe.com/pay/cs_live_a11XzIrrToO4ZeuDAeACg8sZMrHj6tU0DbJZs2FJyw2nvI1Drt0D0cMtx4#fidkdWxOYHwnPyd1blppbHNgWjA0SVdscmdGRldmUGhmRmdgNk9udk1JTWMxTE1ITTxkTkwzQUxMNlNuYnVTVVZpaVxdX09WZDJhQzdXXVFCNz12QzxVX2lVbWFJTENTcUJkYTN9YG9pUl9kNTU3dFVXbExWaicpJ3VpbGtuQH11anZgYUxhJz8nY19gPEdvYmxpPWNiZklwYFBSJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmFqZnYrYmpqYmlgK2ZqaConeCUl"
								>Contribuez financièrement</Link
							>
						</dt>
						<dd>
							Tous les fonds ramassés seront utilisés pour l'organisation de futures cavalcades!
						</dd>
					</dl>
				</Section>
				<Section>
					<SectionTitle id="contact">Nous contacter</SectionTitle>
					<p>
						Pour toute question, contacter <Link
							href="mailto:cavalcadevelo@gmail.com?subject=Question depuis cavalcadevelo.com"
							>cavalcadevelo@gmail.com</Link
						>
					</p>
					<p>
						Rejoignez la conversation sur <Link href="https://www.facebook.com/cavalcadevelo"
							>Facebook</Link
						>
					</p>
				</Section>
			</div>
		</div>
	</div>
</div>

<style>
	.background {
		background-image: url('/background_pattern_pale.webp');
		background-size: 700px;
	}

	dt {
		font-weight: bold;
		margin-top: 1em;
	}
</style>
