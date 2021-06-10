<script context="module">
	export async function load() {
		const url = `http://localhost:3000/api/data/`;
		const res = await fetch(url);
		const data = await res.json();

		return { props: { apiData: data } };
	}
</script>

<script>
	// import { apiData } from '../stores/store';
	import DataCard from '../components/dataCard.svelte';

	export let apiData;

	let searchTerm = '';
	let filtereredApiData = [];

	$: {
		if (searchTerm) {
			filtereredApiData = apiData.filter((element) =>
				element.name.toUpperCase().includes(searchTerm.toUpperCase())
			);
		} else {
			filtereredApiData = [...apiData];
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<div>
	<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

	<input
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
		type="text"
		placeholder="Search"
		bind:value={searchTerm}
	/>
	<div class="py-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
		{#each filtereredApiData as row}
			<DataCard data={row} />
		{/each}
	</div>
</div>
