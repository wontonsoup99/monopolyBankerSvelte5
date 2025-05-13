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
<div class="bg-grey h-screen w-screen justify-items-center bg-slate-400">
	<header class=" flex h-auto w-full flex-row items-center justify-evenly bg-slate-50 p-0 pt-11">
		<MenuDropdown />
		<MonopolyMan />
		<Die />
	</header>
	<div class=" flex h-auto w-auto min-w-[340px] flex-wrap justify-center gap-x-3">
		<PlayerCard /><PlayerCard /><PlayerCard /><PlayerCard /><PlayerCard /><PlayerCard />
	</div>
</div>
