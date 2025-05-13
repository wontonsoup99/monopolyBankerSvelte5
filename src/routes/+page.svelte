<script lang="ts">
	import SetStartMoneyPopup from '$lib/components/popups/setStartMoneyPopup/setStartMoneyPopup.svelte';
	import AddPlayerPopup from '$lib/components/popups/addPlayerPopup/addPlayerPopup.svelte';
	import RestartGamePopup from '$lib/components/popups/restartGamePopup/restartGamePopup.svelte';
	import RemovePlayerPopup from '$lib/components/popups/removePlayerPopup/removePlayerPopup.svelte';
	import MenuDropdown from '$lib/components/menuDropdown/menuDropdown.svelte';
	import PlayerCard from '$lib/components/playerCard/playerCard.svelte';
	import MonopolyMan from '$lib/components/monopolyMan/monopolyMan.svelte';
	import Die from '$lib/components/die/die.svelte';
</script>

<!-- <AddPlayerPopup />
<SetStartMoneyPopup />
<RestartGamePopup />
<RemovePlayerPopup />
<PlayerCard /> -->
<div class="bg-grey h-screen w-screen bg-slate-400">
	<header class=" flex h-auto flex-row items-center justify-evenly bg-slate-50 p-0 pt-11">
		<MenuDropdown />
		<MonopolyMan />
		<Die />
	</header>
	<div class=" grid h-auto w-auto grid-cols-3 grid-rows-2 bg-slate-500">
		<PlayerCard /><PlayerCard /><PlayerCard /><PlayerCard /><PlayerCard /><PlayerCard />
	</div>
</div>
