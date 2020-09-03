import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import LoggedView from './components/LoggedView/LoggedView'


class App extends React.Component{
  state = {
    "Usuario":null,
    "IsLogged":false
  }


  changeLogin = (bool,user) =>{
    this.setState({
      "Usuario":user,
      "IsLogged":bool
    });

  }

  render(){
    let elementRender = null;
    if(!this.state.IsLogged){
      elementRender = <Login handleLogin={this.changeLogin}></Login>
    } else {
      elementRender = <LoggedView usuario={this.state.Usuario}></LoggedView>
    }
    return (
      <div className="App">
        {elementRender}
      </div>
    );
  }
}

export default App;
