import React from "react";
import "./App.css";
import { connect } from "react-redux";

const Smurfville = props => {
  return (
    <div>
      {props.smurfs.map(item => {
        return (
          <div className='inputs' key={item.id}>
            <p>Name: {`${item.name} Smurf`}</p>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {}
)(Smurfville);
