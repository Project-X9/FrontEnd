import React from 'react';
import ReactDOM from 'react-dom';
import { configure,shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import FreePlan from './FreePlan';
import FreeJumbotron from './FreeJumbotron';
import PremiumJumbotron from './PremiumJumbotron';
import AccountOverview from './AccountOverviewComponent'


  
configure({adapter: new Adapter()});
describe('<FreePlan />',() => {

    let wrapper;
    beforeEach(() => {wrapper = shallow(<FreePlan />); });
    it('renders FreePlan without crashing', () => {
        const div =document.createElement('div');
        ReactDOM.render(<Router><FreePlan/></Router>,div);
    });
})


configure({adapter: new Adapter()});
describe('<FreeJumbotron />',() => {

    let wrapper;
    beforeEach(() => {wrapper = shallow(<FreeJumbotron />); });
    it('renders FreeJumbotron without crashing', () => {
        const div =document.createElement('div');
        ReactDOM.render(<Router><FreeJumbotron/></Router>,div);
    });                    
})

configure({adapter: new Adapter()});
describe('<PremiumJumbotron />',() => {
    let wrapper;
    beforeEach(() => {wrapper = shallow(<PremiumJumbotron />); });
    it('renders PremiumJumbotron without crashing', () => {
        const div =document.createElement('div');
        ReactDOM.render(<Router><PremiumJumbotron/></Router>,div);
    });                    
})

configure({adapter: new Adapter()});
describe('<AccountOverview />',()=>{
    let wrapper;
    const props = {
        data: null,
        id: null,
        handleLogoutId: null,
        PostPassword: null,
        GetPassword: null,
        resetChangePasswordForm: null,
        reseteditprofile: null,
        postupdatedFeedback: null,
        data_be: null,
        handleLogout_BE: null,
        isSignedIn: null,
    }
    beforeEach(()=> {wrapper=shallow(<AccountOverview {...props}/>); });

    it('renders AccountOverview without crashing',()=>{
        const div =document.createElement('div');
        ReactDOM.render(<Router><AccountOverview {...props}/></Router>,div);
    
    })
})
