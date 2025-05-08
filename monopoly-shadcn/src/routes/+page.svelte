<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { TriangleAlert } from 'lucide-svelte';
	import * as Select from '$lib/components/ui/select/index.js';
</script>

<Card.Root class=" flex-1 gap-4 p-4 w-[320px]  rounded-lg">
		<h3 class="text-lg font-semibold">Remove Player?</h3>
		<div class="pt-4 pb-4">
		<p class="pb-1 font-normal text-gray-700">Player</p>
		<Select.Root type="single" name="player-select">
			<Select.Trigger>Select player</Select.Trigger>
			<Select.Content>
				<Select.Item value="player1">Player 1</Select.Item>
				<Select.Item value="player2">Player 2</Select.Item>
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
