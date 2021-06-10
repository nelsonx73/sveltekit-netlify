<script>
	import { fade } from 'svelte/transition';
	export let data;
</script>

<a
	href={`/data/${data.id}`}
	transition:fade
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<img class="h-40 w-40" src={data.image} alt={data.image} />
	<h2 class="uppercase text-2xl">{data.id}. {data.name}</h2>
</a>
