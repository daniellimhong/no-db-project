import React, { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
    render(){
        return(
            <div className="Header">
            <h1 
            onClick={() => {window.open("https://www.linkedin.com/in/daniel-hong-1a5750102/")}}
            className="Title">Workfl.ow</h1>
            </div>
        )
    }
}