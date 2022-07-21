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
</script>

<div id="top" class="background relative">
	<a
		href="#top"
		class="fixed float-right bottom-4 right-4 block py-3 px-5 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-500 shadow-md"
		>↑</a
	>
	<div class="container m-auto text-slate-800">
		<div class="py-20 mx-auto flex flex-col text-center">
			<p>Vous êtes invité-e-s à:</p>
			<h1>La Cavalcade!</h1>
		</div>
		<nav class="flex flex-col pb-10 px-8 space-y-5">
			<SectionTitle id="menu">Menu</SectionTitle>
			<ul class="space-y-3">
				<NavItem href="#quoi">C'est quoi?!</NavItem>
				<NavItem href="#pourquoi">Revendications</NavItem>
				<NavItem href="#chemin">Itinéraire</NavItem>
				<NavItem href="#participer">Comment participer</NavItem>
				<NavItem href="#faq">Foire aux questions</NavItem>
			</ul>
		</nav>
		<div>
			<Section>
				<SectionTitle id="quoi">C'est quoi?!</SectionTitle>
				<p>
					Une randonnée vélo-camping de trois jours suivi d'un évenement à Québec pour
					mani-festoyer, pour faire valoir l'importance du déplacement actif au sein de notre
					société.
				</p>
				<dl>
					<dt>Quand</dt>
					<dd>Du 3 au 5 septembre 2022, Samedi au Lundi de la fête du travail.</dd>
					<dt>Trajet</dt>
					<dd>Montréal -> Québec (<Link href="#chemin">détails...</Link>)</dd>
				</dl>
			</Section>
			<Section>
				<SectionTitle id="pourquoi">Revendications</SectionTitle>
				<p>
					Nous croyons que le déplacement actif est plus nécessaire que jamais. Il est temps de
					repenser radicalement notre approche à la mobilité pour réduire au maximum la consommation
					des ressources limitées de notre planète et d'éliminer la pollution omniprésente. Au delà
					des impacts directs sur l'environnement, le déplacement actif est au coeur d'un projet de
					société, de collectivités et d'individu sains.
				</p>
				<p>
					En cette période d'élection, nous espérons envoyer un message fort: le gouvernement
					provincial doit agir pour favoriser le transport actif et ainsi faciliter la transition
					écologique et sociale.
				</p>
				<SousTitre>Nos demandes:</SousTitre>
				<dl>
					<dt>Lorem ipsum etc.</dt>
					<dd>Lorem ipsum etc. etc.</dd>
					<dt>Lorem ipsum etc.</dt>
					<dd>Lorem ipsum etc. etc.</dd>
					<dt>Lorem ipsum etc.</dt>
					<dd>Lorem ipsum etc. etc.</dd>
					<dt>Lorem ipsum etc.</dt>
					<dd>Lorem ipsum etc. etc.</dd>
				</dl>
			</Section>
			<Section>
				<SectionTitle id="chemin">Itinéraire</SectionTitle>
				<p>Montréal -> Québec sur la rive nord, route 138.</p>
				<Jour
					date="Samedi 3 septembre 2022"
					start="Parc La Fontaine, Montréal"
					end="Louiseville"
					length="100 km"
				/>
				<Jour
					date="Dimanche 4 septembre 2022"
					start="Louiseville"
					end="Donnacona"
					length="120 km"
				/>
				<Jour date="Lundi 5 septembre 2022" start="Donnacona" end="Québec" length="50 km" />
				<dl>
					<dt>Hebergement</dt>
					<dd>
						En camping à côté de bâtiments municipaux. (aréna, piscine, école, salle communautaire
						etc.)
					</dd>
					<dt>Retour</dt>
					<dd>Bus ou train nolisés pour le retour lundi soir à Montréal.</dd>
				</dl>
			</Section>
			<Section>
				<SectionTitle id="participer">Comment Participer</SectionTitle>
				<p>Ça vous interpelle?! Joignez vous à nous!</p>
				<SousTitre>Joindre la cavalcade</SousTitre>
				<p>
					Vous pouvez rejoindre la Cavalcade à n'importe quel point dans son <Link href="#chemin"
						>parcours</Link
					>. Tout le monde est bienvenu-e, que ce soit pour l'entièreté du chemin ou seulement une
					petite partie. Cependant, si vous désirez vous joindre à nous du début à la fin, soyez
					avertis de la considérable distance à parcourir à chaque jour: il serait préférable si
					vous êtes en formes et avez déjà de l'expérience pour ce genre de trajet.
				</p>
				<p>Ce dont vous aurez besoin:</p>
				<dl>
					<dt>Équipement</dt>
					<dd>
						Prévoir tout son équipement typique pour le vélo-camping: vélo, tente, matelas de sol,
						produit d'hygiène, vêtements, etc.
					</dd>
					<dt>Nourriture</dt>
					<dd>
						Nous allons arrêter environ à chaque 20 km pour une pause avec accès à des
						épiceries/restaurants.
					</dd>
					<dt>Fonds</dt>
					<dd>
						Prévoir un budget entre 100$ et 120$ par personne: 70$ bus ou train pour revenir et
						30-50$ de nourriture.
					</dd>
				</dl>
				<SousTitre>Encourager la cavalcade</SousTitre>
				<p>
					Même si vous ne pouvez pas participer en personne, il y a une tonne de moyens de nous
					encourager!
				</p>
				<!-- Todo add link to facebook event -->
				<dl>
					<dt>Parlez-en!</dt>
					<dd>En personne ou en ligne! Partagez cette page ou l'évenement facebook.</dd>
					<dt>Contribuez financièrement</dt>
					<dd>
						Tous les fonds ramassés seront utilisés pour l'organisation de futures cavalcades!
					</dd>
				</dl>
			</Section>
			<Section>
				<SectionTitle id="faq">Foire aux questions</SectionTitle>
			</Section>
		</div>
	</div>
</div>

<style>
	.background {
		background-color: ghostwhite;
		background-image: url('/background_pattern.webp');
		background-size: 700px;
		background-blend-mode: overlay;
	}

	dt {
		font-weight: bold;
		margin-top: 1em;
	}
</style>
