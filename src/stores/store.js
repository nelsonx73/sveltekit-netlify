import { writable } from 'svelte/store';

export const apiData = writable([]);

async function fetchData(num) {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
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

	apiData.set(loadedData);
}

fetchData(150);

// setTimeout(() => {
// 	fetchData(3);
// }, 3000);
