<script lang="ts">
	import '../app.css';

	let { children } = $props();
	export const prerender = true;
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		height: 100vh;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: rgb(228, 228, 228);
	}
</style>
