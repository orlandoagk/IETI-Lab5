import React from 'react'
import './Login.css'
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


class Login extends React.Component{
    state = {
        "username":"",
        "password":""
    }

    handleUsername = (e) =>{
        this.setState({...this,"username":e.target.value})
    }

    handlePassword = (e) =>{
        this.setState({...this,"password":e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {handleLogin} = this.props;
        if(localStorage.getItem(this.state.username)){
            handleLogin(true,this.state.username)
            localStorage.setItem("isLogged",true)
        } else {
            handleLogin(false,null)
            localStorage.removeItem("isLogged")
        }
    }

    register = (e) => {
        e.preventDefault();
        const {username,password} = this.state;
        if(!localStorage.getItem(username)){
            localStorage.setItem(username,password)
        } 
        
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
        );
    }
}

export default Login;