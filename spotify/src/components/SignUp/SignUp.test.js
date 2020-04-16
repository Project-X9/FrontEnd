import React from 'react';
import ReactDOM from 'react-dom';
import { configure,shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from './SignUpComponent';
// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<SignUp />, div);
//   });
// it('renders without crashing', () => {
//     shallow(<SignUp />);
// })

configure({adapter: new Adapter()});
describe(" testing the SignUp page",()=>{
    let wrapper;
    const props = { 
        isSignedIn: {
            isSignedIn:null,
        },
        userstate: {
            userstate:null
        }
    }
    beforeEach(()=> {wrapper=shallow(<SignUp {...props}/>); });

    // it('includes the form that will be rendered',()=>{
    //     // expect(wrapper.find('Form').to.have.lengthOf(1) );
    //     const div =document.createElement('div');
    //     ReactDOM.render(<Router><SignUp {...props}/></Router>,div);
    
    // })
})
