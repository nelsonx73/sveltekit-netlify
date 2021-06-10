<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const row = await res.json();
		return { props: { row } };
	}
</script>

<script>
	export let row;
	const type = row.types[0].type.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{row.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{row.height}</strong> | Weight:
		<strong>{row.weight}</strong>
	</p>
	<img src={row.sprites['front_default']} alt={row.name} class="card-image" />
</div>
