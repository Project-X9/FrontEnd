import React from 'react';
import ReactDOM from 'react-dom';
import { configure,shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import FreePlan from './FreePlan';
import FreeJumbotron from './FreeJumbotron';
import PremiumJumbotron from './PremiumJumbotron';


  
configure({adapter: new Adapter()});
describe('<FreePlan />',() => {

    let wrapper;
    beforeEach(() => {wrapper = shallow(<FreePlan />); });
    it('renders without crashing', () => {
        const div =document.createElement('div');
        ReactDOM.render(<Router><FreePlan/></Router>,div);
    });
})

configure({adapter: new Adapter()});
describe('<FreeJumbotron />',() => {

    let wrapper;
    beforeEach(() => {wrapper = shallow(<FreeJumbotron />); });
    it('renders without crashing', () => {
        const div =document.createElement('div');
        ReactDOM.render(<Router><FreeJumbotron/></Router>,div);
    });                    
})

configure({adapter: new Adapter()});
describe('<PremiumJumbotron />',() => {
    let wrapper;
    beforeEach(() => {wrapper = shallow(<PremiumJumbotron />); });
    it('renders without crashing', () => {
        const div =document.createElement('div');
        ReactDOM.render(<Router><PremiumJumbotron/></Router>,div);
    });                    
})


