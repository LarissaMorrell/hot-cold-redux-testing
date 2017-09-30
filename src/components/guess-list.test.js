import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessList} from './guess-list';

describe('<GuessList />', () => {

  it('Renders guess box without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Renders the guess box initially', () => {
    const wrapper = shallow(<GuessList guesses={[]} />);
    expect(wrapper.hasClass('guessBox')).toEqual(true);
  });

  it('Renders the guess box with guesses', () => {
    const guesses = [23, 56, 88, 30];
    const wrapper = shallow(<GuessList guesses={guesses} />);
  
    for(let guess of guesses){
      expect(wrapper.contains(<li>{guess}</li>)).toEqual(true);
    }
    expect(wrapper.find('ul').children().length).toEqual(guesses.length);
  });
});
