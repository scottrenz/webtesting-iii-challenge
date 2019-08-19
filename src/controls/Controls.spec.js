// import React from 'react';
// import ReactDOM from 'react-dom';
// import Controls from './Controls';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Controls />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// // Test away!
// describe("Control", () => {
//     it('Should pass "Lock', () => {
//       const { queryByText } = render(<Controls />);
  
//       expect(queryByText(/Unlock/i)).toBeFalsy();
  
//       fireEvent.click(getByText(/Gate/i));
  
//       expect(queryByText(/Lock/i)).toBeTruthy();
//     });
//   });

// import Controls from './Controls';
// import React from 'react';
// import renderer from 'react-test-renderer';


// describe('<Controls />', () => {
//   it('should match snapshot', () => {
//     const tree = renderer.create(<Controls />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });
