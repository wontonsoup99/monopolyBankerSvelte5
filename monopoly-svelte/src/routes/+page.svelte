<script lang="ts">
	let cards: { playerName: string; money: number }[] = []; // Array to store card data
	let playerName = ''; // Variable to hold player name
	let playerNumber = 1; // Variable to hold player number
	let startingMoney = 1500; // Starting money for each player

	// Function to add a new card
	function addCard(playerName: string) {
		playerName = `Player ${playerNumber}`; // Set the player name
		cards = [...cards, { playerName: playerName, money: startingMoney }]; // Add a new card with a player name and starting money
		playerNumber++; // Increment the player number for the next card
	}
	function removeCard(playerName: string) {
		cards = cards.filter((card) => card.playerName !== playerName); // Remove the card with the specified player name
		playerNumber--; // Decrement the player number
	}
</script>

<!--body section-->
<section>
	<div class="headerWrapper">
		<h1 class="welcome">Monopoly Banker</h1>
	</div>

	<div class="cardContainer">
		<!-- Render cards dynamically -->
		{#each cards as card (card.playerName)}
			<div class="card">
				<h3 class="playerName">{card.playerName}</h3>
				<h4 class="playerMoney">${card.money}</h4>
				<button on:click={() => removeCard(card.playerName)} class="removePlayer">
					<div><p>X</p></div></button
				>
			</div>
		{/each}
	</div>
	<!-- Button to add a new card -->
	<button on:click={() => addCard(playerName)} class="addCardButton">+</button>
</section>

<!--style section-->
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex: 0.6;
		height: 100vh;
	}

	.headerWrapper {
		display: flex;
		align-items: start;
		height: 100%;
		width: 100%;
		background-color: grey;
		padding: 6px;
		margin-top: 0;
		margin-bottom: 20px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
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
		align-items: flex-start;
		flex-direction: row;
		width: 90%;
		flex-wrap: wrap;
		height: auto;
		min-height: 100px;
	}

	.card {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
		width: 100%;
		background-color: rgb(255, 255, 255);
		height: 100px;
		margin: 6px;
		border-radius: 20px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	}

	/* Add styles for the button */
	.addCardButton {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px;
		width: 50px;
		height: 50px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 25px;
		cursor: pointer;
		font-size: 32px;
		transition: ease-in-out 0.1s;
	}
	.addCardButton:hover {
		background-color: #0056b3;
		transform: scale(1.05);
	}
	.removePlayer {
		grid-row: 1/3;
		grid-column: 5/6;
		text-align: center;
		color: white;
		border: solid 1px white;
		text-align: center;
		font-size: 20px;
		width: 30px;
		height: 30px;
		background-color: red;
		border-radius: 6px;
		transition: 0.3s;
		margin: 6px;
	}
	.removePlayer:hover {
		background-color: rgb(133, 14, 14);
		transform: scale(1.1);
	}

	.playerName {
		justify-self: flex-start;
		text-align: center;
		color: rgb(0, 0, 0);
		font-weight: bold;
		font-size: 2rem;
	}
	.playerMoney {
		justify-self: center;
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
