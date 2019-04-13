import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
var socket;

class Misc extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: 'http://localhost:8080/'
        };
        socket = socketIOClient(this.state.endpoint);
      }
    playNextTrack = () => {
        console.log("hi")
        socket.emit("yolo", "id");
    }
    render() {
        return (<div>
            <h1 onClick={this.playNextTrack}>Play next track on spotify</h1>
        </div>
        )
    }
}

export default Misc;