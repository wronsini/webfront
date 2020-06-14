import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Homepage from "./modules/Homepage";
import LoginForm from "./modules/LoginForm";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import {makeStyles} from '@material-ui/core/styles';
import Posts from "./modules/Posts";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@material-ui/core/Button';
import Contacts from "./modules/Contacts";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    wrapper: {
        width: theme.width
    }
}));


class App extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Webfront
                            </Typography>
                            <Button color="inherit" component={Link} to='/'>Home</Button>
                            <Button color="inherit" component={Link} to='/contacts'>Contacts</Button>
                            <Button color="inherit" component={Link} to='/posts'>Posts</Button>
                            <Button color="inherit" component={Link} to='/login'>Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/index" component={Homepage}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/posts" component={Posts}/>
                </div>
            </Router>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(App);
