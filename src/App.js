import React from 'react';
import AddTodo from './components/AddTodo/AddTodo'
import './App.css';
import Login from './components/Login/Login';
import LoggedView from './components/LoggedView/LoggedView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component{
  state = {
    "Usuario":null,
    "IsLogged":false
  }


  changeLogin = (bool,user) =>{
    console.log("Me deberia quedar acá")
    this.setState({
      "Usuario":user,
      "IsLogged":bool
    });

  }

  render(){
    let elementRender = null;
    if(!this.state.IsLogged){
      elementRender = <Login handleLogin={this.changeLogin}></Login>
      console.log("Entre al login");
    } else {
      elementRender = <LoggedView usuario={this.state.Usuario}></LoggedView>

      
      
    
    }
    return (
      <div className="App">
        <Router>
        <Switch>
          <Route exact path="/addTodo" component={AddTodo}/>
        
        
        </Switch>
        </Router>
        {elementRender}
        
      </div>
    );
  }
}

export default App;
