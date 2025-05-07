<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { CirclePlus } from '@lucide/svelte';
</script>

<Card.Root class="w-[340px] p-4">
	<Card.Header class="p-0 ">
		<Card.Title class="mb-4 text-lg">Add New Player</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-4 p-0">
		<div class="flex-1 space-y-1">
			<label for="playerInput" class="text-sm font-medium text-gray-700">Player Name</label>
			<input
				type="text"
				name="playerInput"
				placeholder="Enter player name"
				class="w-full rounded-md border p-2"
			/>
		</div>
	</Card.Content>
	<Card.Footer class="flex gap-2 p-0 pt-4 ">
		<Button class="flex-1" variant="outline">Cancel</Button>
		<Button class="flex-1" variant="submit"><CirclePlus /> Add Player</Button>
	</Card.Footer>
</Card.Root>
