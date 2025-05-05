<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';

	const notifications = [
		{
			title: 'Your call has been confirmed.',
			description: '1 hour ago'
		},
		{
			title: 'You have a new message!',
			description: '1 hour ago'
		},
		{
			title: 'Your subscription is expiring soon!',
			description: '2 hours ago'
		}
	];
</script>

<Card.Root class="w-[340px] p-4">
	<Card.Header class="p-0 ">
		<Card.Title class="mb-4">Add New Player</Card.Title>
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
	<Card.Footer class="flex gap-4 p-0 pt-4 ">
        <Button class="flex-1">Cancel</Button>
        <Button class="flex-1 bg-blue-500">Add Player</Button>
	</Card.Footer>
</Card.Root>
