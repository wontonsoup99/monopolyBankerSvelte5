<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';

	//temporary test array to test if dropdown functionality is working
	let players = [
    { value: 'player1', label: 'Player One' },
    { value: 'player2', label: 'Player Two' },
    { value: 'player3', label: 'Player Three' }
  ];
  let value = $state("");
	const triggerContent = $derived(
	 players.find((f) => f.value === value)?.label ?? "Select a player"
	);
</script>


<Card.Root class=" flex-1 gap-4 p-4 w-[320px]  rounded-lg">
		<h3 class="text-lg font-semibold">Remove Player?</h3>
		<div class="pt-4 pb-4">
		<p class="pb-1 font-normal text-gray-700">Player</p>
		   <Select.Root type="single" name="Select Player" bind:value>
	<Select.Trigger class="w-[180px]">
	 {triggerContent}
	</Select.Trigger>
	<Select.Content>
	 <Select.Group>
	  <Select.GroupHeading>Select a Player</Select.GroupHeading>
	  {#each players as player (player.value)}
	   <Select.Item value={player.value} label={player.label}
		>{player.label}</Select.Item
	   >
	  {/each}
	 </Select.Group>
	</Select.Content>
   </Select.Root>
	</div>
	<Card.Content class="flex-1 align-top justify-star p-0">
		<h3>Are you sure you want to remove [player] from the game?</h3>
		<br>
		<h3>It is okay if they are winning!</h3>
	</Card.Content>
	<Card.Footer class="flex-1 align-top gap-2 p-0 pt-4">
		<Button variant="outline" class="flex-1 justify-center p-4 text-base font-semibold pt-1 pb-1">Cancel</Button>
		<Button variant="destructive" class="flex-1 justify-center p-4 text-base font-semibold pt-1 pb-1 ">Remove</Button>

	</Card.Footer>
</Card.Root>
