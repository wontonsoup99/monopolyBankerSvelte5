<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { CirclePlus } from '@lucide/svelte';
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	type PopupEvents = {
		close: void;
		addPlayer: { name: string };
	};

	const dispatch = createEventDispatcher<PopupEvents>();
	let playerName = '';
	const players = getContext<Writable<{ name: string; money: number; index: number }[]>>('players');

	function handleClose() {
		dispatch('close');
	}

	function handleAddPlayer() {
		if (playerName.trim() && $players.length < 6 && $players.every(player => player.name !== playerName.trim())) {
			dispatch('addPlayer', { name: playerName.trim() });
			playerName = ''; // Clear the input
			handleClose();
		} else {
			toast('error, Player name already exists or maximum number of players reached');
		}
	}
</script>

<div class="fixed inset-0 flex items-center justify-center z-50">
	<Card.Root class="w-[320px] p-4">
		<Card.Header class="p-0">
			<Card.Title class="mb-4 text-lg">Add New Player</Card.Title>
		</Card.Header>
		<Card.Content class="grid gap-4 p-0">
			<div class="flex-1 space-y-1">
				<label for="playerInput" class="text-sm font-medium text-gray-700">Player Name</label>
				<input
					type="text"
					id="playerInput"
					bind:value={playerName}
					placeholder="Enter player name"
					class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					required
					minlength="1"
					maxlength="10"
				/>
			</div>
		</Card.Content>
		<Card.Footer class="flex gap-2 p-0 pt-4">
			<Button class="flex-1" variant="outline" on:click={handleClose}>Cancel</Button>
			<Button 
				class="flex-1" 
				variant="submit" 
				on:click={handleAddPlayer}
				disabled={$players.length >= 6}
			>
				<CirclePlus /> Add Player
			</Button>
		</Card.Footer>
	</Card.Root>
</div>
