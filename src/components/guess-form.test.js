import React from 'react';
import {mount, shallow} from 'enzyme';
import {GuessForm} from './guess-form';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
// import List from './list';
// import {addList} from '../actions';

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
      expect(dispatch).toHaveBeenCalledWith(submitGuess(event));
  });


});
