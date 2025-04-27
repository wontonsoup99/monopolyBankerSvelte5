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
		<h1 class="header">Monopoly Banker</h1>
	</div>

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
		width: 100vw;
		min-width: 400px;
		background-color: rgb(228, 228, 228);
		padding-bottom: 200px;
	}

	.headerWrapper {
		display: flex;
		align-items: center;
		height: 100px;
		width: 100%;
		background-color: rgb(20, 85, 179);
		padding: 6px;
		margin-top: 0;
		margin-bottom: 20px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
	}

	h1 {
		width: 100%;
	}

	.header {
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
		text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}

	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		width: 80%;
		min-width: 390px;
		background-color: rgb(255, 255, 255);
		height: 100px;
		margin: 6px;
		border-radius: 20px;
		box-shadow: inset -8px -8px rgba(49, 42, 42, 0.3);
	}

	.addCardButton {
		position: fixed;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40px;
		width: 70px;
		height: 70px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		font-size: 4em;
		transition: ease-in-out 0.1s;
	}
	.addCardButton:hover {
		background-color: #0056b3;
		transform: scale(1.05);
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	}
	.removePlayer {
		position: relative;
		right: 0;
		text-align: center;
		color: hsl(0, 0%, 55%);
		border: solid 1px white;
		text-align: center;
		font-size: 20px;
		width: 30px;
		height: 30px;
		transition: 0.3s;
		margin: 16px;
		border-radius: 10%;
		cursor: pointer;
	}
	.removePlayer:hover {
		border-radius: 50%;
		background-color: rgb(133, 14, 14);
		transform: scale(1.1);
	}

	.playerName {
		position: relative;
		left: 0;
		margin: 16px;
		text-align: center;
		color: rgb(0, 0, 0);
		font-weight: bold;
		font-size: 2rem;
	}
	.playerMoney {
		margin: 16px;
		text-align: center;
		color: white;
		font-weight: 800;
		font-size: 2rem;
		color: rgb(98, 255, 98);
	}
</style>
