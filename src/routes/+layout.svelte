<script lang="ts">
	import '../app.css';
	import { Toaster } from "$lib/components/ui/sonner";
	let { children } = $props();
	export const prerender = true;
</script>

<Toaster />
{@render children()}
