<script lang="ts">
	let cards: {playerName: string; money: number; }[] = []; // Array to store card data
	let playerName = ""; // Variable to hold player name
	let startingMoney = 1500; // Starting money for each player

	// Function to add a new card
	function addCard(playerName: string) {
		if (cards.some(card => card.playerName === playerName)) {
			alert("Player already exists!"); // Alert if player already exists
			return;
		}
		else {
			cards = [...cards, {playerName: playerName, money: startingMoney }]; // Add a new card with a player name and starting money
		}
		
	}
	function removeCard(playerName: string) {
		
		cards = cards.filter(card => card.playerName !== playerName); // Remove the card with the specified player name
		
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
				<h3 class="playerName">{card.playerName}</h3>
				<h4 class="playerMoney">${card.money}</h4>
				<button on:click={() => removeCard(card.playerName)}><div class="removePlayer"><p>X</p></div></button>
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
.removePlayer {
		text-align: center;
		margin-bottom: 0;
		color: white;
		text-align: center;
		font-size: 20px;
		width: 40px;
		height: 40px;
		background-color: red;
		border-radius: 6px;
	}


    .addCardButton:hover {
   	 background-color: #0056b3;
}

  		 .card h3 {
        text-align: center;
		margin-top: 20px;
        color: white;
	}

	.playerName {
		text-align: center;
		margin-top: 20px;
		color: white;
		font-weight: bold;
		font-size: 2rem;
	}
	.playerMoney {
		text-align: center;
		margin-top: 20px;
		color: white;
		font-weight: 800;
	}
</style>
