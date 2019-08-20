import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Controls />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// Test away!
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
import renderer from 'react-test-renderer';
describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// ////////////////////////////////
// import React from 'react';
import { render, fireEvent,} from '@testing-library/react'
import * as rtl from '@testing-library/react';
// import renderer from 'react-test-renderer';
// import Controls from "./Controls";
describe("<Controls />", () => {
    it("defaults to unlocked and open", async () => {
        const wrapper = rtl.render(<Controls locked={false} closed={false}/>);
        let closebtn = wrapper.getByTestId('toggle-closed');
        let lockbtn = wrapper.getByTestId('toggle-locked');
        expect(closebtn).toBeDefined();
        expect(lockbtn).toBeDefined();
    })
    it("cannot be closed or opened if it is locked",async () =>
{
        let wrapper = rtl.render(<Controls locked={true} closed={true}/>);
        let button = wrapper.getByTestId('toggle-closed');
        await rtl.fireEvent.click(button);
        expect(button.disabled).toBe(true);
        wrapper = rtl.render(<Controls locked={false} closed={false}/>);
        button = wrapper.getByTestId('toggle-locked');
        await rtl.fireEvent.click(button);
        expect(button.disabled).toBe(true);
    })
})

// ///////////////////////////////


// import React from 'react';

// ​

// const Controls = props => {

//   const { locked, closed, toggleLocked, toggleClosed } = props;

// ​

//   return (

//     <div className="controls panel">

//       <button  data-testid='toggle-locked' disabled={!closed} onClick={toggleLocked} className="toggle-btn">

//         {locked ? 'Unlock Gate' : 'Lock Gate'}

//       </button>

//       <button  data-testid='toggle-closed' disabled={locked} onClick={toggleClosed} className="toggle-btn">

//         {closed ? 'Open Gate' : 'Close Gate'}

//       </button>

//     </div>

//   );

// };

