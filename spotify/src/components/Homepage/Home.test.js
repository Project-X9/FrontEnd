
import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './HomeComponent';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';


configure({adapter: new Adapter()});

describe('<Home />',() => {

let wrapper;

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><Home/></Router>,div);
   });   

})
