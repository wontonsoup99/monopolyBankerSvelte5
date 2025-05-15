<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { TriangleAlert } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
	}
</script>

<div class="fixed inset-0 flex items-center justify-center z-50">
	<Card.Root class="w-[320px] h-[244px] rounded-lg">
		<Card.Header class="flex-row justify-items-start bg-destructive text-white p-4 gap-2 rounded-t-lg">
			<TriangleAlert />
			<Card.Title class=""><h2>Restart Game?</h2></Card.Title>
		</Card.Header>
		<Card.Content class="p-4">
			<h3>You're about to restart the game.</h3>
			<br>
			<h3>All players and transaction history will be lost!</h3>
		</Card.Content>
		<Card.Footer class="flex-1 align-top gap-2 pb-4 pl-4 pr-4">
			<Button variant="outline" class="flex-1 justify-center p-4 text-base font-semibold pt-1 pb-1 w-[108px]" on:click={handleClose}>Cancel</Button>
			<Button variant="destructive" class="flex-1 justify-center p-4 text-base font-semibold pt-1 pb-1 w-[108px]">Confirm Restart</Button>
		</Card.Footer>
	</Card.Root>
</div>
