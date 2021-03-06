import React, { Component } from 'react';
import '../App.css';

class Map extends Component {
    drawGrid(w, h, id) {
        var canvas = document.getElementById(id);
        var ctx = canvas.getContext('2d');
        ctx.canvas.width  = w;
        ctx.canvas.height = h;
        
        var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
            <defs> \
                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
                </pattern> \
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                    <rect width="80" height="80" fill="url(#smallGrid)" /> \
                </pattern> \
            </defs> \
            <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
        </svg>';
    
        var DOMURL = window.URL || window.webkitURL || window;
        
        var img = new Image();
        var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
        var url = DOMURL.createObjectURL(svg);
        
        img.onload = function () {
          ctx.drawImage(img, 0, 0);
          DOMURL.revokeObjectURL(url);
        }
        img.src = url;
    }

    componentDidMount() {
        this.drawGrid(800, 650, "grid");
    }
    render() {
        return (
            <div className="grid-item"> 
                <canvas style={{marginTop: 10}} id="grid"></canvas>
            </div>
        );
    }
}

export default Map;