<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Menu } from 'lucide-svelte';
	import { CreditCard } from 'lucide-svelte';
	import { RotateCw } from 'lucide-svelte';
	import { CircleX } from 'lucide-svelte';
	import { Users } from 'lucide-svelte';
	import { Newspaper } from 'lucide-svelte';
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	type MenuEvents = {
		addPlayer: void;
		setMoney: void;
		restart: void;
		removePlayer: void;
	};

	const dispatch = createEventDispatcher<MenuEvents>();
	const players = getContext<Writable<{ name: string; money: number; index: number }[]>>('players');

	// Functions to handle menu item clicks
	function handleAddPlayer() {
		if ($players.length < 6) {
			dispatch('addPlayer');
		} else if ($players.length >= 6) {
			toast('Maximum number of players reached');
		} else {
			toast('Error');
		}
	}

	function handleSetMoney() {
		dispatch('setMoney');
	}

	function handleRestart() {
		dispatch('restart');
	}

	function handleRemovePlayer() {
		dispatch('removePlayer');
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={`${buttonVariants({ variant: 'outline' })} flex size-10 justify-center p-0 align-middle`}
		><Menu class="size-6" /></DropdownMenu.Trigger
	>
	<DropdownMenu.Content class="ml-4">
		<DropdownMenu.Group>
			<DropdownMenu.Item 
				onSelect={handleAddPlayer} 
				disabled={$players.length >= 8}
				class={$players.length >= 8 ? 'opacity-50 cursor-not-allowed' : ''}
			>
				<Users />Add Player {$players.length >= 8 ? '(Max Players)' : ''}
			</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={handleSetMoney}><CreditCard />Set Starting Money</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={handleRestart}><RotateCw />Restart Game</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={handleRemovePlayer}><CircleX />Remove Player</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item><Newspaper />Privacy Policy</DropdownMenu.Item>
			<DropdownMenu.Item><Newspaper />Terms and Conditions</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
