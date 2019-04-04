import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Score: 0
        };

    }

    buttonScore= (e) =>{
        this.setState(
            {Score:this.state.Score+1})
    };





  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Game player={1} buttonScore={this.buttonScore} Score={this.state.Score}/>
            <Game player={2} buttonScore={this.buttonScore} Score={this.state.Score}/>

        </header>
      </div>
    );
  }
}

export default App;
