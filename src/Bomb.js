// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const timeLeft = this.state.secondsLeft
        return(
            <div>
            {timeLeft === 0 ? 
                <p>Boom!</p> : 
                <p>{timeLeft} seconds left before I go boom!</p>
            }
            </div>
        )
    }
}