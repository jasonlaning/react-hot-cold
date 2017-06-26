export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME
})

export const HANDLE_GUESS = 'HANDLE_GUESS';
export const handleGuess = guess => ({
	type: HANDLE_GUESS,
	guess
});

