<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	let monopolyIconPath = [
		'/Monopoly-Hat.png',
		'/Monopoly-Car.png',
		'/Monopoly-Cannon.png',
		'/Monopoly-Ship.png',
		'Monopoly-Shoe.png',
		'Monopoly-Wheelbarrow.png'
	];
</script>

<Card.Root class="h-[144px] w-[103px] flex-1 justify-center gap-1 p-2 align-top">
	<img src={monopolyIconPath[1]} alt="placeholder" class=" size-20" />
	<h2 class="text-center">$1,500</h2>
	<h3 class="text-center">[Name]</h3>
</Card.Root>
