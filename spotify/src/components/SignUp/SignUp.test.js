import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import SignUp from './SignUpComponent';

// import configureStore from 'redux-mock-store' //ES6 modules

var { configureStore } = require('redux-mock-store') 
var middlewares = []
var mockStore = configureStore(middlewares)

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore({
        data: [],
        id:'',
        playLists: [],
        artist: [],
        album: [],
        userstate: null,
        isSignedIn: null,
        data_be: [],
        currentPlaylist: [],
        categories: [],
    });
    component = renderer.create(
        <Provider store={store}>
          <SignUp />
        </Provider>
      );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
 
  it('should dispatch an action on button click', () => {
 
  });
});













// const mockStore = configureStore();
// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<SignUp />, div);
//   });
// it('renders without crashing', () => {
//     shallow(<SignUp />);
// })

// configure({adapter: new Adapter()});
// describe(" testing the SignUp page",()=>{
//     it('includes the form that will be rendered',()=>{
//         // expect(wrapper.find('Form').to.have.lengthOf(1) );
//         const div =document.createElement('div');
//         ReactDOM.render(<Router><Provider store={mockStore}>
//             <SignUp />
//          </Provider></Router>,div);
    
//     })
// })
