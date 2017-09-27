import {hotColdReducer} from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('hotColdReducer', () => {
  let gameplayState = {
    guesses: [10, 14, 31],
    feedback: 'You got it!',
    correctAnswer: 31,
    showInfoModal: true
  }

  it('Should set the initial state when nothing is passed in', () => {
        const state = hotColdReducer(undefined, {type: '__UNKNOWN'});
        const correctAnswer = state.correctAnswer;
        expect(state).toEqual({
          guesses: [],
          feedback: 'Make your guess!',
          correctAnswer: correctAnswer,
          showInfoModal: false
        });
        expect(correctAnswer).toBeGreaterThan(0);
        expect(correctAnswer).toBeLessThan(100);
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = hotColdReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('newGame', () => {
      it('Should resest state to the initial state', () => {
        const state = hotColdReducer(gameplayState, newGame());
        const correctAnswer = state.correctAnswer;
        expect(state).toEqual({
          guesses: [],
          feedback: 'Make your guess!',
          correctAnswer: correctAnswer,
          showInfoModal: false
        });
      });
    });
    describe('makeGuess', () => {
      const guess = -1; //make impossible guess so state.guess is never equal

      it('Should add the guess to state guesses[]', () => {
        const state = hotColdReducer(gameplayState, makeGuess(guess));
        //check that an element was added to guesses[]
        expect(state.guesses.length).toEqual(++gameplayState.guesses.length);
        //check that the last element was the guess value
        expect(state.guesses[state.guesses.length-1]).toEqual(guess);
      });
      it('Should have the correct feedback', () => {
        const state = hotColdReducer(gameplayState, makeGuess(guess));

        //calc feeback using state's correctAnswer and it's last element in array
        const stateFeedback = calcFeedback(
          state.guesses[state.guesses.length -1], state.correctAnswer);
        //calc feedback using guess and gamplayState feedback property
        const gameplayFeedback = calcFeedback(guess, gameplayState.correctAnswer);

        //This tests both accuracy for state's last element the guess array
        //and for the correctAnswer currently held in the state
        expect(gameplayFeedback).toEqual(stateFeedback);
      });
    });
    // describe('toggleInfoModal', () => {
    //   it('Should have the correct value for toggle', () => {
    //
    //   });
    // });
});


function calcFeedback(guess, correctAnswer){
  const difference = Math.abs(guess - correctAnswer);
  if (difference >= 50) {
      return 'You\'re Ice Cold...';
  }
  else if (difference >= 30) {
      return 'You\'re Cold...';
  }
  else if (difference >= 10) {
      return 'You\'re Warm';
  }
  else if (difference >= 1) {
      return 'You\'re Hot!';
  }
  else {
      return 'You got it!';
  }
}
