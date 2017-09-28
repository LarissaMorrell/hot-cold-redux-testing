import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';
// import Adapter from 'enzyme-adapter-react-15';
// import Enzyme from 'enzyme';
//
// Enzyme.configure({ adapter: new Adapter() });
// import List from './list';
// import {addList} from '../actions';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
});
