import "./App.css";
import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {fetchSmurf} from '../actions/Actions';
import Smurform from './SmurfInput';
import Smurfville from './SmurfVille';

const App= ({fetchSmurf})=> {

  useEffect(() => {
      fetchSmurf();
    }, [fetchSmurf]);

  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Welcome to Smurf Village</h2>
          <Smurfville />
          <Smurform />
      </div>
    );
  };
  const mapStateToProps = state => {
    return {
      message: state.message,
      smurfs: state.smurfs
    };
  };
  
  export default connect( mapStateToProps,{ fetchSmurf })(App);


