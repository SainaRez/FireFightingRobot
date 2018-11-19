import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Messages extends Component {
    render() {
        return (
            <div style={{ border: '1px solid black', height: '33%'}}> 
            <TextField
          id="standard-search"
          label="Filter"
          style={{marginTop: -8}}
        />
        <List component="nav" style={{overflow: 'auto', maxHeight: '75%'}}>
                <ListItem 
                    button
                    color="primary"
                    style={{backgroundColor: '#f49542'}}>
                    <ListItemText primary="Robot 1 is in a critical state." />
                </ListItem>
                <ListItem 
                    button
                    color="primary"
                    style={{backgroundColor: '#992e0d'}}>
                    <ListItemText primary="Human 2 is requesting backup." />
                </ListItem>
                <ListItem 
                    button
                    color="primary"
                    style={{backgroundColor: '#c1e575'}}>
                    <ListItemText primary="Robot 6 is idle." />
                </ListItem>
                <ListItem 
                    button
                    color="primary"
                    style={{backgroundColor: '#f49542'}}>
                    <ListItemText primary="Robot 5 is unresponsive." />
                </ListItem>
                <ListItem 
                    button
                    color="primary"
                    style={{backgroundColor: '#c1e575'}}>
                    <ListItemText primary="Human 1 is in action." />
                </ListItem>
                </List>
        </div>
        );

    }
}

export default Messages;