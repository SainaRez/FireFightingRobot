import React, { Component } from 'react';
import '../App.css';
import Layers from './Layers';
import Map from '../Map/Map';
class RightBar extends Component {
    render() {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '75% 25%', gridGap: 5, padding: 10 }} className="grid-item"> 
            <Map />
            <Layers />
            </div>
        );

    }
}

export default RightBar;