import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });
  it('Dispatches makeGuess from submitGuess', () => {
      const dispatch = jest.fn();
      const event = {preventDefault: jest.fn()};
      const wrapper = mount(<GuessForm dispatch={dispatch} />);
      const instance = wrapper.instance();
      instance.submitGuess(event);
      expect(dispatch).toHaveBeenCalledWith(makeGuess(""));
  });

});
