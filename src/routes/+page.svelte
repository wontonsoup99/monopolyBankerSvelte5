<script lang="ts">
	import SetStartMoneyPopup from '$lib/components/popups/setStartMoneyPopup/setStartMoneyPopup.svelte';
	import AddPlayerPopup from '$lib/components/popups/addPlayerPopup/addPlayerPopup.svelte';
	import RestartGamePopup from '$lib/components/popups/restartGamePopup/restartGamePopup.svelte';
	import RemovePlayerPopup from '$lib/components/popups/removePlayerPopup/removePlayerPopup.svelte';
	import MenuDropdown from '$lib/components/menuDropdown/menuDropdown.svelte';
	import PlayerCard from '$lib/components/playerCard/playerCard.svelte';
	import MonopolyMan from '$lib/components/monopolyMan/monopolyMan.svelte';
	import Die from '$lib/components/die/die.svelte';

	// Array of players
	let players = [
		{ name: 'Player 1', money: 1000, index: 0 },
		{ name: 'Player 2', money: 2000, index: 1 },
		{ name: 'Player 3', money: 3000, index: 2 },
		{ name: 'Player 4', money: 4000, index: 3 },
		{ name: 'Player 5', money: 5000, index: 4 },
		{ name: 'Player 6', money: 6000, index: 5 }
	];
</script>

<!-- <AddPlayerPopup />
<SetStartMoneyPopup />
<RestartGamePopup />
<RemovePlayerPopup />
<PlayerCard /> -->
<div class="bg-grey min-h-screen w-screen bg-[#FAF5EA] p-4">
	<header class="flex h-auto w-full flex-row items-center justify-evenly p-0 pt-11">
		<MenuDropdown />
		<MonopolyMan />
		<Die />
	</header>
	<div class="mt-8 flex flex-wrap justify-center gap-4">
		{#each players as player}
			<PlayerCard name={player.name} money={player.money} playerIndex={player.index} />
		{/each}
	</div>
</div>
