<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Menu } from 'lucide-svelte';
	import { CreditCard } from 'lucide-svelte';
	import { RotateCw } from 'lucide-svelte';
	import { CircleX } from 'lucide-svelte';
	import { Users } from 'lucide-svelte';
	import { Newspaper } from 'lucide-svelte';
	import AddPlayerPopup from '$lib/components/popups/addPlayerPopup/addPlayerPopup.svelte';
	import SetStartMoneyPopup from '$lib/components/popups/setStartMoneyPopup/setStartMoneyPopup.svelte';
	import RestartGamePopup from '$lib/components/popups/restartGamePopup/restartGamePopup.svelte';
	import RemovePlayerPopup from '$lib/components/popups/removePlayerPopup/removePlayerPopup.svelte';

	// State for popups
	let showAddPlayer = false;
	let showSetMoney = false;
	let showRestart = false;
	let showRemovePlayer = false;

	// Functions to handle menu item clicks
	function handleAddPlayer() {
		showAddPlayer = true;
	}

	function handleSetMoney() {
		showSetMoney = true;
	}

	function handleRestart() {
		showRestart = true;
	}

	function handleRemovePlayer() {
		showRemovePlayer = true;
	}

	// Computed value to check if any popup is open
	$: isAnyPopupOpen = showAddPlayer || showSetMoney || showRestart || showRemovePlayer;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={`${buttonVariants({ variant: 'outline' })} flex size-10 justify-center p-0 align-middle`}
		><Menu class="size-6" /></DropdownMenu.Trigger
	>
	<DropdownMenu.Content class="ml-4">
		<DropdownMenu.Group>
			<DropdownMenu.Item onSelect={handleAddPlayer}><Users />Add Player</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={handleSetMoney}><CreditCard />Set Starting Money</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={handleRestart}><RotateCw />Restart Game</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={handleRemovePlayer}><CircleX />Remove Player</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item><Newspaper />Privacy Policy</DropdownMenu.Item>
			<DropdownMenu.Item><Newspaper />Terms and Conditions</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>

{#if isAnyPopupOpen}
	<div class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />
{/if}

{#if showAddPlayer}
	<AddPlayerPopup on:close={() => (showAddPlayer = false)} />
{/if}

{#if showSetMoney}
	<SetStartMoneyPopup on:close={() => (showSetMoney = false)} />
{/if}

{#if showRestart}
	<RestartGamePopup on:close={() => (showRestart = false)} />
{/if}

{#if showRemovePlayer}
	<RemovePlayerPopup on:close={() => (showRemovePlayer = false)} />
{/if}
