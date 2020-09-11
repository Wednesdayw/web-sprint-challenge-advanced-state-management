import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'; 
import { getData } from '../actions'; 
import SmurfForm from './SmurfForm'; 


function App(props) {

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <SmurfForm />
      <h2>Welcome to your state management version of Smurfs!</h2>
      <button onClick={props.getData}>Have Fun!</button>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    getData: state.getData,
  }
}


export default connect(mapStateToProps, { getData })(App)