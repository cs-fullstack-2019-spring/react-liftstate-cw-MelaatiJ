import React, { Component } from 'react';

class Game extends Component{

    render(){
        return(
            <div>
                <h1>Player:{this.props.player}</h1>
                <h1>Score:{this.props.Score}</h1>
                <button onClick={this.props.buttonScore}>Press</button>
            </div>
        );
    }
}

export default Game;