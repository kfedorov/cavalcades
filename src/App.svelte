<script lang="ts">
  import NavItem from "./lib/nav-item.svelte";
  import SectionTitle from "./lib/section-title.svelte";
  import Section from "./lib/section.svelte";
</script>

<main>
  <div class="container m-auto">
    <div class="py-20 mx-auto flex flex-col text-center">
      <p>Vous êtes invité-e-s à:</p>
      <h1>La Cavalcade!</h1>
    </div>
    <nav class="flex flex-col px-10 pb-10 my-5">
      <SectionTitle id="menu">Menu</SectionTitle>
      <ul class="space-y-3">
        <NavItem href="#quoi">C'est quoi?!</NavItem>
        <NavItem href="#pourquoi">Revendications</NavItem>
        <NavItem href="#chemin">Itinéraire</NavItem>
        <NavItem href="#participer">Comment participer</NavItem>
        <NavItem href="#faq">Foire aux questions</NavItem>
      </ul>
    </nav>
    <div class="space-y-5">
      <Section>
        <SectionTitle id="quoi">C'est quoi?!</SectionTitle>
        <p>
          Une randonnée vélo-camping de trois jours suivi d'un évenement à
          Québec pour mani-festoyer, pour faire valoir l'importance du
          déplacement actif au sein de notre société.
        </p>
        <p>Détails:</p>
        <dl>
          <dt>Quand</dt>
          <dd>
            Du 3 au 5 septembre 2022, Samedi au Lundi de la fête du travail.
          </dd>
          <dt>Trajet</dt>
          <dd>Montréal -> Québec</dd>
        </dl>
      </Section>
      <Section>
        <SectionTitle id="pourquoi">Revendications</SectionTitle>
        <p>
          Nous croyons que le déplacement actif est plus nécessaire que jamais.
          Il est temps de repenser radicalement notre approche à la mobilité
          pour réduire au maximum la consommation des ressources limitées de
          notre planète et d'éliminer la pollution omniprésente. Au delà des
          impacts directs sur l'environnement, le déplacement actif est au coeur
          d'un projet de société, de collectivités et d'individu sains.
        </p>
        <p>
          En cette période d'élection, nous espérons envoyer un message fort: le
          gouvernement provincial doit agir pour favoriser le transport actif et
          ainsi faciliter la transition écologique et sociale.
        </p>
        <p>Nos demandes:</p>
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
        <p>Itinéraire détaillé:</p>
        <div>
          <div>Jours</div>
          <div>Départ</div>
          <div>Arrivée</div>
          <div>Distance</div>
        </div>
        <div class="journee">
          <div class="date">Samedi 3 septembre 2022</div>
          <!-- Todo: add link to specific place and map. -->
          <!-- Todo: add time for departures -->
          <div class="depart">Parc La Fontaine, Montréal</div>
          <div class="arrivee">Louiseville</div>
          <div class="distance">100 km</div>
        </div>
        <div class="journee">
          <div class="date">Dimanche 4 septembre 2022</div>
          <div class="depart">Louiseville</div>
          <div class="arrivee">Donnacona</div>
          <div class="distance">120 km</div>
        </div>
        <div class="journee">
          <div class="date">Lundi 5 septembre 2022</div>
          <div class="depart">Donnacona</div>
          <div class="arrivee">Quebec</div>
          <div class="distance">50 km</div>
        </div>
      </Section>
      <Section>
        <SectionTitle id="participer">Comment Participer</SectionTitle>
        Ça vous interpelle?! Joignez vous à nous!
        <h3>Joindre la cavalcade</h3>
        <h3>Encourager la cavalcade</h3>
        Même si vous ne pouvez pas participer en personne, il y a une tonne de moyens
        de nous encourager!
        <!-- Todo add link to facebook event -->
        <dl>
          <dt>Parlez-en!</dt>
          <dd>
            En personne ou en ligne! Partagez cette page ou l'évenement
            facebook.
          </dd>
          <dt>Contribuez financièrement</dt>
          <dd>
            Tous les fonds ramassés seront utilisés pour l'organisation de
            futures cavalcades!
          </dd>
        </dl>
      </Section>
      <Section>
        <SectionTitle id="faq">Foire aux questions</SectionTitle>
      </Section>
    </div>
  </div>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
