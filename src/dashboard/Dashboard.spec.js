// Test away
import Dashboard from './Dashboard';
import React from 'react';
import renderer from 'react-test-renderer';


describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
