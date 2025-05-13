import { writable } from 'svelte/store';

export interface Player {
	id: string;
	name: string;
	money: number;
}

interface GameState {
	players: Player[];
	startingMoney: number;
}

function createGameStore() {
	const { subscribe, set, update } = writable<GameState>({
		players: [],
		startingMoney: 1500
	});

	return {
		subscribe,
		addPlayer: (name: string) =>
			update((state) => {
				const newPlayer: Player = {
					id: crypto.randomUUID(),
					name,
					money: state.startingMoney
				};
				return {
					...state,
					players: [...state.players, newPlayer]
				};
			}),
		removePlayer: (id: string) =>
			update((state) => ({
				...state,
				players: state.players.filter((p) => p.id !== id)
			})),
		setStartingMoney: (amount: number) =>
			update((state) => ({
				...state,
				startingMoney: amount
			})),
		restartGame: () =>
			update((state) => ({
				...state,
				players: state.players.map((player) => ({
					...player,
					money: state.startingMoney
				}))
			}))
	};
}

export const gameStore = createGameStore();
