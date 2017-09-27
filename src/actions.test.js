import {newGame, NEW_GAME,
        makeGuess, MAKE_GUESS,
        toggleInfoModal, TOGGLE_INFO_MODAL} from './actions';

describe('newGame', () => {
  it('Should return the action', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
    expect(action.correctAnswer).toBeGreaterThan(0);
    expect(action.correctAnswer).toBeLessThan(100);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = 67;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('toggleInfoModal', () => {
  it('Should return the action', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  });
});
