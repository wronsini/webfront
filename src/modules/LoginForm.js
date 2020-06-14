import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import './loginform.css';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                username: '',
                password: '',
            },
            submitted: false,
        }

    }

    handleChange = (event) => {
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }

    handleSubmit = (event) => {
        this.setState({submitted: true}, () => {
            setTimeout(() => this.setState({submitted: false}), 5000);
            console.log(this.state);
        });
        event.preventDefault();
    }

    render() {
        return (
            <Box className='root' border={2} border-radius={16} borderColor="primary.main">
                <Avatar>
                    <LockOutlinedIcon/>
                </Avatar>
                <header>Sign In</header>
                <h1>{this.state.username}</h1>
                <main role='main'>
                    <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={this.state.formData.username}
                            onChange={this.handleChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={this.state.formData.password}
                            onChange={this.handleChange}
                            id="password"
                        />
                        <Button variant="contained" color="primary" fullWidth type="submit"> Submit </Button>
                    </form>
                </main>
            </Box>
        );
    }
}


