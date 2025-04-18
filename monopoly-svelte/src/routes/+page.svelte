<script lang="ts">
	let cards: { playerName: string; money: number }[] = []; // Array to store card data
	let playerName = ''; // Variable to hold player name
	let startingMoney = 1500; // Starting money for each player

	// Function to add a new card
	function addCard(playerName: string) {
		if (cards.some((card) => card.playerName === playerName)) {
			alert('Player already exists!'); // Alert if player already exists
		} else if (playerName === '') {
			alert('Please enter a player name!'); // Alert if player name is empty
		} else {
			playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1); // Capitalize the first letter of the player name
			cards = [...cards, { playerName: playerName, money: startingMoney }]; // Add a new card with a player name and starting money
		}
	}
	function removeCard(playerName: string) {
		cards = cards.filter((card) => card.playerName !== playerName); // Remove the card with the specified player name
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!--body section-->
<section>
	<div class="headerWrapper">
		<h1 class="welcome">Monopoly Banker</h1>
	</div>

	<!-- Button to add a new card -->
	<form>
		<input type="text" bind:value={playerName} placeholder="Enter player name" />
		<button on:click={() => addCard(playerName)} class="addCardButton">Add Card</button>
	</form>

	<div class="cardContainer">
		<!-- Render cards dynamically -->
		{#each cards as card (card.playerName)}
			<div class="card">
				<div class="playerNameContainer"><h3 class="playerName">{card.playerName}</h3></div>
				<h4 class="playerMoney">${card.money}</h4>
				<button on:click={() => removeCard(card.playerName)} class="removePlayer">
					<div><p>X</p></div></button
				>
			</div>
		{/each}
	</div>
</section>

<!--style section-->
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex: 0.6;
		height: 100%;
	}

	.headerWrapper {
		height: 100%;
		background-color: grey;
		padding: 6px;
		margin-top: 100px;
		margin-bottom: 20px;
		border-radius: 5px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		font-weight: 600;
	}

	.cardContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		width: 100%;
		height: 100%;
		padding: 10px;
		flex-wrap: wrap;
		border: black 2px solid;
		border-radius: 6px;
		height: auto;
		min-height: 400px;
	}

	.card {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		width: 32%;
		background-color: grey;
		height: 400px;
		margin: 6px;
		border-radius: 6px;
		border: black 2px solid;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
	}

	/* Add styles for the button */
	.addCardButton {
		margin: 20px;
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		transition: ease-in-out 0.1s;
	}
	.addCardButton:hover {
		background-color: #0056b3;
		transform: scale(1.05);
	}
	.removePlayer {
		grid-row: 1/3;
		grid-column: 1/2;
		text-align: center;
		color: white;
		text-align: center;
		font-size: 20px;
		width: 40px;
		height: 40px;
		background-color: red;
		border-radius: 6px;
		transition: 0.3s;
		margin: 6px;
	}
	.removePlayer:hover {
		background-color: rgb(133, 14, 14);
		transform: scale(1.1);
	}

	.card h3 {
		text-align: center;
		margin-top: 20px;
		color: white;
	}
	.playerNameContainer {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		height: 100%;
	}

	.playerName {
		grid-column: 2/3;
		grid-row: 1/2;
		text-align: center;
		margin-top: 20px;
		color: white;
		font-weight: bold;
		font-size: 2rem;
	}
	.playerMoney {
		grid-column: 2/3;
		grid-row: 3/4;
		text-align: center;
		margin-top: 20px;
		color: white;
		font-weight: 800;
		margin-top: auto;
		margin-bottom: 6px;
		font-size: 2rem;
		color: rgb(98, 255, 98);
	}
</style>
