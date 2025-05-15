<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';

	let { name, money, playerIndex } = $props();

	let monopolyIconPath = [
		'/Monopoly-Hat.png',
		'/Monopoly-Car.png',
		'/Monopoly-Cannon.png',
		'/Monopoly-Ship.png',
		'Monopoly-Shoe.png',
		'Monopoly-Wheelbarrow.png'
	];
</script>

{#if name && money !== undefined}
	<Card.Root
		class="flex-none h-[144px] w-[103px] max-w-[103px] flex flex-col items-center justify-center gap-1 p-2"
	>
		<img src={monopolyIconPath[playerIndex]} alt="placeholder" class="size-20" />
		<h2 class="text-center">${money}</h2>
		<h3 class="text-center">{name}</h3>
	</Card.Root>
{/if}
