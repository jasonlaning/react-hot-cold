import * as actions from '../actions';

const initialState = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            showInfoModal: false
}

export const gameReducer = (state=initialState, action) => {
	if (action.type === actions.NEW_GAME) {
		return Object.assign({}, state, {
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: Math.floor(Math.random() * 100) + 1,
			showInfoModal: false
		})
	}
	else if (action.type === actions.HANDLE_GUESS) {
		action.guess = parseInt(action.guess, 10);
		if (isNaN(action.guess)) {
			return Object.assign({}, state, {
				feedback: 'Please enter a valid number'
			});
			// return?
		}

		const difference = Math.abs(action.guess - state.correctAnswer);

		let feedback;
		if (difference >= 50) {
		    feedback = 'You\'re Ice Cold...';
		}
		else if (difference >= 30) {
		    feedback = 'You\'re Cold...';
		}
		else if (difference >= 10) {
		    feedback = 'You\'re Warm';
		}
		else if (difference >= 1) {
		    feedback = 'You\'re Hot!';
		}
		else {
		    feedback = 'You got it!';
		}
		return Object.assign({}, state, {
			feedback,
            			guesses: [...state.guesses, action.guess]
		})
	}
	else if (action.type === actions.TOGGLE_INFO_MODAL) {
		return Object.assign({}, state, {
			showInfoModal: !state.showInfoModal
		})
	}
	return state;
};