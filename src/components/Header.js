import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input/Input';
import Paper from 'material-ui/Paper';

const styleSheet = createStyleSheet({
    flex: {
        flex: 1
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#C12127',
        color: '#fff'
    },
    searchBar: {
        flex: 1,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
    },
    searchBarInput: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10,
        color: '#fff'
    },
    searchBarIcon: {
        marginTop: 3,
        cursor: 'pointer',
        color: '#fff'
    }
});

class Header extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isSearching: false
        }
    }

    renderSearchBar()
    {
        const { classes, searchVideo } = this.props;
        const isSearching = this.state.isSearching;

        return (
            <Paper elevation={0} className={ classes.searchBar } >
                <Icon className={ classes.searchBarIcon }>search</Icon>
                <Input 
                    placeholder="Search" 
                    disableUnderline={ true } 
                    className={ classes.searchBarInput }
                    onChange={ event => searchVideo(event.target.value) } />
                <Icon 
                    className={ classes.searchBarIcon } 
                    onClick={ () => this.setState({isSearching: !isSearching}) } 
                    >close</Icon>
            </Paper>
        );
    }

    renderSearchIcon()
    {
        const { classes } = this.props;
        const isSearching = this.state.isSearching;

        return (
            <IconButton className={ classes.searchBarIcon } onClick={ () => this.setState({isSearching: !isSearching}) }>
                <Icon>search</Icon>
            </IconButton>
        );
    }

    render()
    {
        const { classes } = this.props;

        return (
            <AppBar position="static" color="default">
                <Toolbar className={ classes.toolbar }>
                    <Typography type="title" color="inherit" className={ classes.flex }>
                        KaceTube
                    </Typography>
                    { (this.state.isSearching) ? this.renderSearchBar() : this.renderSearchIcon() } 
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styleSheet)(Header);