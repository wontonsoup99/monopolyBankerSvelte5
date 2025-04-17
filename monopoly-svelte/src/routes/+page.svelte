<script lang="ts">
	let cards: { id: number; playerName: string }[] = []; // Array to store card data
	let cardId = 1; // Unique ID for each card

	// Function to add a new card
	function addCard() {
		cards = [...cards, { id: cardId, playerName: `Player ${cardId}` }]; // Add a new card with a unique ID
		cardId++; // Increment the card ID for the next card
	}
	function playerRemove() {
		cards = cards.filter((card) => card.id !== cardId); // Remove the card with the specified ID
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
	<button on:click={addCard} class="addCardButton">Add Card</button>

	<div class="cardContainer">
		<!-- Render cards dynamically -->
		{#each cards as card (card.id)}
			<div class="card">
				<h3>{card.playerName}</h3>
				<button on:click={playerRemove} class="playerRemove"><h3>X</h3></button>
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
		margin-bottom: 120px;
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
	}

	.card {
		width: 32%;
		background-color: grey;
		height: 400px;
		margin: 6px;
		border-radius: 6px;
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
    }
.playerRemove {
	height: 10px;
	width: 10px;
		margin: 20px;
		padding: 10px 20px;
		background-color: #ff0000;}

    .addCardButton:hover {
   	 background-color: #0056b3;
}

  		 .card h3 {
        text-align: center;
		margin-top: 20px;
        color: white;
	}
</style>
