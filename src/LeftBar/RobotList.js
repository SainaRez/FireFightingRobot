import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Android from '@material-ui/icons/AndroidSharp';
import Person from '@material-ui/icons/PermIdentity';
import TextField from '@material-ui/core/TextField';

export default class RobotList extends Component {
    state = {
        selectedIndex: 1
    }

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={{ border: '1px solid black', height: '33%'}}> 
            <TextField
          id="standard-search"
          label="Filter"
        //   onChange={this.handleChange('search')}
          style={{marginTop: -8}}
        />
            <List component="nav" style={{overflow: 'auto', maxHeight: '75%'}}>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 1}
                    onClick={event => this.handleListItemClick(event, 1)}>
                    <ListItemIcon>
                    <Android color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Robot 1" />
                </ListItem>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 2}
                    onClick={event => this.handleListItemClick(event, 2)}>
                    <ListItemIcon>
                    <Android color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Robot 2" />
                </ListItem>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 3}
                    onClick={event => this.handleListItemClick(event, 3)}>
                    <ListItemIcon>
                    <Android color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Robot 3" />
                </ListItem>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 4}
                    onClick={event => this.handleListItemClick(event, 4)}>
                    <ListItemIcon>
                    <Android color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Robot 4" />
                </ListItem>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 5}
                    onClick={event => this.handleListItemClick(event, 5)}>
                    <ListItemIcon>
                    <Android color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Robot 5" />
                </ListItem>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 6}
                    onClick={event => this.handleListItemClick(event, 6)}>
                    <ListItemIcon>
                    <Android color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Robot 6" />
                </ListItem>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 7}
                    onClick={event => this.handleListItemClick(event, 7)}>
                    <ListItemIcon>
                    <Person color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="Human 1" />
                </ListItem>
                <ListItem 
                    button
                    selected={this.state.selectedIndex === 8}
                    onClick={event => this.handleListItemClick(event, 8)}>
                    <ListItemIcon>
                    <Person color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="Human 2" />
                </ListItem>
            </List>
            </div>
        );
    }
}
