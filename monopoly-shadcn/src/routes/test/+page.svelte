<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { DollarSign } from '@lucide/svelte';
	import { Save } from '@lucide/svelte';
	import SetStartMoneyPopup from '$lib/components/popups/setStartMoneyPopup/setStartMoneyPopup.svelte';
    import AddPlayerPopup from '$lib/components/popups/addPlayerPopup/addPlayerPopup.svelte';
</script>

<SetStartMoneyPopup />
<AddPlayerPopup />