import React, { Component } from 'react';
import '../../common.css';


function DisplayCards(props) {
  return <React.Fragment>
    <div onClick={props.onClick}>
      <img src={props.image} className="cards" />
      <h2>{props.name}</h2>
    </div>
  </React.Fragment>
}

export default DisplayCards;