export async function get({params}) {

	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	console.log(url);
	const res = await fetch(url);
	const data = await res.json();

	const loadedData = data.results.map((element, index) => {
		return {
			name: element.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

    return {
        status: 200,
        body: loadedData
    }
}