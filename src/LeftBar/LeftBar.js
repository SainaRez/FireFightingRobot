import React, { Component } from 'react';
import '../App.css';
import Messages from './Messages';
import RobotList from './RobotList';
import Camera from './Camera';

class LeftBar extends Component {
    render() {
        return (
            <div style={{ height: '100vh', gridRowGap: 5 }} className="grid-item"> 
            <RobotList />
            <Messages />
            <Camera />
            </div>
        );

    }
}

export default LeftBar;