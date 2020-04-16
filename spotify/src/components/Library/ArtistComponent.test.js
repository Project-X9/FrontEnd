import React from 'react';
import ReactDOM from 'react-dom';
import { configure,shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
// import Adapter from 'enzyme-adapter-react-16';
import Artists from './ArtistsComponent';

// configure({adapter: new Adapter()});
describe(" testing the Artists in Librarypage",()=>{
    let wrapper;
    const props = {
                    isSignedIn: {
                        isSignedIn:true,
                    },
                    data_be: {
                        data_be:null
                    }
                    }
          
    beforeEach(()=> {wrapper=shallow(<Artists {...props}/>); });
    it('includes the form that will be rendered',()=>{
        // expect(wrapper.find('Form').to.have.lengthOf(1) );
        const div =document.createElement('div');
        ReactDOM.render(<Router><Artists {...props}/></Router>,div);
    
    })
})
