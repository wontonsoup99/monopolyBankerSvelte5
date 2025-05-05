<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { DollarSign } from '@lucide/svelte';
	import { Save } from '@lucide/svelte';
</script>

<Card.Root class="w-[340px] p-4">
	<Card.Header class="flex flex-col gap-1 p-0">
		<Card.Title class="m-0 text-lg">Set Starting Money</Card.Title>
		<Card.Description class="text-sm text-muted-foreground">
			<p class="p-0">This will be the starting money that every player will receive.</p>
		</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4 pb-4 pl-0 pr-0 pt-4">
		<div class="flex-1 space-y-0">
			<label for="startMoney" class="text-base font-medium text-foreground">Starting Amount</label>
			<div class="size-0"><DollarSign class="relative left-2 top-3 size-4" /></div>
			<input
				type="number"
				name="playerInput"
				defaultValue={1500}
				class="w-full rounded-md border p-2 pl-8"
			/>
		</div>
	</Card.Content>
	<Card.Footer class="flex gap-2 p-0">
		<Button class="flex-1 text-base font-semibold" variant="outline">Cancel</Button>
		<Button class="flex-1 text-base font-semibold" variant="submit"><Save />Save</Button>
	</Card.Footer>
</Card.Root>
