export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME
})

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
	type: TOGGLE_INFO_MODAL
})


export const HANDLE_GUESS = 'HANDLE_GUESS';
export const handleGuess = guess => ({
	type: HANDLE_GUESS,
	guess
});

