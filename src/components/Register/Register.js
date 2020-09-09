import React from 'react'
import './Register.css'
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom';


class Register extends React.Component{

    componentDidMount =()=>{
        this.props.doRegister();
    }


    render(){
        return(
            <Container className='Box' variant="contained">
                
                <LockOutlinedIcon />
                
                <Typography component="h1" variant="h5">
                    Task Planner
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField name="username" label="Username" id="username" required autoComplete="username" onChange={this.handleUsername}/>
                    <br/>
                    <TextField name="password" label="Password" id="password" type="password" required autoComplete="current-password" onChange={this.handlePassword}/>
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary">Sign In </Button>
                    <Button onClick={this.register} variant="contained" color="secondary">Sign Up </Button>

                </form>
            </Container>
        )
    }
    
}

export default withRouter(Register);