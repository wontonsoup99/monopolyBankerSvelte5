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

<AddPlayerPopup />
<SetStartMoneyPopup />
<RestartGamePopup />
<RemovePlayerPopup />
<MenuDropdown />
<PlayerCard />
<MonopolyMan />
<Die />
