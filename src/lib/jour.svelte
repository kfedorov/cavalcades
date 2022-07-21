<script lang="ts">
	export let date: string;
	export let start: string;
	export let end: string;
	export let length: string;
</script>

<div class="journee">
	<div class="date font-bold text-purple-700">{date}</div>
	<!-- Todo: add link to specific place and map. -->
	<!-- Todo: add time for departures -->

	<div class="details">
		<div class="depart"><span class="font-bold">Départ: </span>{start}</div>
		<div class="arrivee"><span class="font-bold">Fin: </span>{end}</div>
		<div class="distance"><span class="font-bold">Distance: </span>{length}</div>
	</div>
</div>
