import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

//import the action(s)
import {newGame, handleGuess, toggleInfoModal} from '../actions';

import './game.css';

export class Game extends React.Component {

    newGame() {
        this.props.dispatch(newGame());
    }

    toggleInfoModal() {
        this.props.dispatch(toggleInfoModal());
    }

    handleGuess(guess) {
        this.props.dispatch(handleGuess(guess));
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}
                    toggleInfoModal={() => this.toggleInfoModal()} />
                <div className="game-container">
                    <GuessSection feedback={this.props.feedback}
                        onGuess={(guess) => this.handleGuess(guess)} />
                    <GuessCount count={this.props.guesses.length} />
                    <GuessList guesses={this.props.guesses} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
            guesses: state.guesses,
            feedback: state.feedback,
            correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);