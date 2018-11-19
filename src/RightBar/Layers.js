import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';

class Layers extends Component {
    render() {
        return (
            <div className="grid-item"> 
            <FormControl style={{ marginTop: 20 }} component="fieldset">
            <FormLabel component="legend">Select Layers</FormLabel>
          <FormGroup style={{ marginTop: 20 }}>
            <FormControlLabel
              control={
                <Checkbox value="Temperature" />
              }
              label="Temperature"
            />
            <FormControlLabel
              control={
                <Checkbox value="Exits" />
              }
              label="Exits"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Thermal"
                />
              }
              label="Thermal"
            />
          </FormGroup>
        </FormControl>
            </div>
        );
    }
}

export default Layers;