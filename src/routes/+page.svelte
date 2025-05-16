<script lang="ts">
	import SetStartMoneyPopup from '$lib/components/popups/setStartMoneyPopup/setStartMoneyPopup.svelte';
	import AddPlayerPopup from '$lib/components/popups/addPlayerPopup/addPlayerPopup.svelte';
	import RestartGamePopup from '$lib/components/popups/restartGamePopup/restartGamePopup.svelte';
	import RemovePlayerPopup from '$lib/components/popups/removePlayerPopup/removePlayerPopup.svelte';
	import MenuDropdown from '$lib/components/menuDropdown/menuDropdown.svelte';
	import PlayerCard from '$lib/components/playerCard/playerCard.svelte';
	import MonopolyMan from '$lib/components/monopolyMan/monopolyMan.svelte';
	import Die from '$lib/components/die/die.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	// Array of players as a store
	const players = writable<{ name: string; money: number; index: number }[]>([]);
	setContext('players', players);

	let showAddPlayerPopup = false;
	let showSetMoneyPopup = false;
	let showRestartPopup = false;
	let showRemovePlayerPopup = false;

	function handleAddPlayer(event: CustomEvent<{ name: string }>) {
		players.update(currentPlayers => {
			if (currentPlayers.length >= 8) return currentPlayers;
			return [...currentPlayers, { 
				name: event.detail.name, 
				money: 1500, 
				index: currentPlayers.length 
			}];
		});
	}
</script>

<!-- <AddPlayerPopup />
<SetStartMoneyPopup />
<RestartGamePopup />
<RemovePlayerPopup />
<PlayerCard /> -->
<div class="bg-grey min-h-screen w-screen bg-[#FAF5EA] p-4">
	<header class="flex h-auto w-full flex-row items-center justify-evenly p-0 pt-11">
		<MenuDropdown 
			on:addPlayer={() => (showAddPlayerPopup = true)}
			on:setMoney={() => (showSetMoneyPopup = true)}
			on:restart={() => (showRestartPopup = true)}
			on:removePlayer={() => (showRemovePlayerPopup = true)}
		/>
		<MonopolyMan />
		<Die />
	</header>
	<div class="mt-8 flex flex-wrap justify-center gap-4">
		{#each $players as player}
			<PlayerCard name={player.name} money={player.money} playerIndex={player.index} />
		{/each}
	</div>
</div>

{#if showAddPlayerPopup}
	<AddPlayerPopup on:close={() => (showAddPlayerPopup = false)} on:addPlayer={handleAddPlayer} />
{/if}

{#if showSetMoneyPopup}
	<SetStartMoneyPopup on:close={() => (showSetMoneyPopup = false)} />
{/if}

{#if showRestartPopup}
	<RestartGamePopup on:close={() => (showRestartPopup = false)} />
{/if}

{#if showRemovePlayerPopup}
	<RemovePlayerPopup on:close={() => (showRemovePlayerPopup = false)} />
{/if}

export { players };