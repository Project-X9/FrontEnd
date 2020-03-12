import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    }
  }
  const mapDispatchToProps = dispatch => ({
  });
  
  class Main extends Component{
   
    componentDidMount() {}
  
    render(){
  
      // const HomePage=()=>{
      //     return(
      //       <Home />
      //     )
  
      // }
  
      
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <TransitionGroup> */}
          {/* <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> */}
          <Switch>
              {/* <Route path="/home" component={HomePage}></Route> 
              <Redirect to="/home"></Redirect> */}
          </Switch>
          {/* </CSSTransition> */}
          {/* </TransitionGroup> */}
        {/* <Footer /> */}
  
      </div>
    );
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));