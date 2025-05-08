<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { Menu } from 'lucide-svelte';
	import { CreditCard } from 'lucide-svelte';
	import { RotateCw } from 'lucide-svelte';
	import { CircleX} from 'lucide-svelte';
	import { Users } from 'lucide-svelte';
	import { Newspaper } from 'lucide-svelte';
</script>


<DropdownMenu.Root>
	<DropdownMenu.Trigger class={`${buttonVariants({ variant: "outline" })} size-10 flex-1 justify-center align-middle p-0`}><Menu class="size-6"/></DropdownMenu.Trigger>
	<DropdownMenu.Content>
	  <DropdownMenu.Group>
		<DropdownMenu.Item><Users />Add Player</DropdownMenu.Item>
		<DropdownMenu.Item><CreditCard />Set Starting Money</DropdownMenu.Item>
		<DropdownMenu.Item><RotateCw />Restart Game</DropdownMenu.Item>
		<DropdownMenu.Item><CircleX />Remove Player</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Item><Newspaper />Privacy Policy</DropdownMenu.Item>
		<DropdownMenu.Item><Newspaper />Terms and Conditions</DropdownMenu.Item>
	  </DropdownMenu.Group>
	</DropdownMenu.Content>
  </DropdownMenu.Root>