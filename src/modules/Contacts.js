import React from 'react';
import {environment} from "../environments";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            retrieved: {}
        }
    }

    componentDidMount() {
        fetch(environment.contacts_uri)
            .then(res => res.json())
            .then(data => {
                this.setState({retrieved: data});
            })
            .catch(console.log)
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.retrieved.FirstName} {this.state.retrieved.LastName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <span>Born on {this.state.retrieved.Born}</span>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <span>Birth place is {this.state.retrieved.BirthCity}</span>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            <div>
                                <div>Some roles he played:</div>
                                <div>
                                    <ul>
                                        {(this.state.retrieved.Roles || []).map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

Contacts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Contacts);
