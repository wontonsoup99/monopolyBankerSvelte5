<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const dispatch = createEventDispatcher();
	const players = getContext<Writable<{ name: string; money: number; index: number }[]>>('players');

	function handleClose() {
		dispatch('close');
	}

	function handleRemove() {
		if (value) {
			players.update(currentPlayers => {
				const filteredPlayers = currentPlayers.filter(player => player.name !== value);
				// Update indices after removal
				return filteredPlayers.map((player, index) => ({
					...player,
					index
				}));
			});
			handleClose();
		}
	}

	let value = $state("");
	const triggerContent = $derived(
		$players.find((player) => player.name === value)?.name ?? "Select a player"
	);
</script>

<div class="fixed inset-0 flex items-center justify-center z-50">
	<Card.Root class="w-[320px] p-4 rounded-lg">
		<h3 class="text-lg font-semibold text-center">Remove Player?</h3>
		<div class="pt-4 pb-4 flex flex-col items-center w-full">
			<p class="pb-1 font-normal text-gray-700 text-center">Player</p>
			<div class="w-full">
				<Select.Root type="single" name="Select Player" bind:value>
					<Select.Trigger class="w-full">
						{triggerContent}
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.GroupHeading>Select a Player</Select.GroupHeading>
							{#each $players as player (player.name)}
								<Select.Item value={player.name} label={player.name}>{player.name}</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</div>
		</div>
		<Card.Content class="flex-1 align-top justify-center p-0 text-center">
			<h3>Are you sure you want to remove {value} from the game?</h3>
			<br>
			<h3>It is okay if they are winning!</h3>
		</Card.Content>
		<Card.Footer class="flex-1 align-top gap-2 p-0 pt-4">
			<Button variant="outline" class="flex-1 justify-center p-4 text-base font-semibold pt-1 pb-1" on:click={handleClose}>Cancel</Button>
			<Button 
				variant="destructive" 
				class="flex-1 justify-center p-4 text-base font-semibold pt-1 pb-1"
				on:click={handleRemove}
				disabled={!value}
			>
				Remove
			</Button>
		</Card.Footer>
	</Card.Root>
</div>
