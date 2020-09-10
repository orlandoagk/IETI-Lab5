import React from 'react';
import AddTodo from './components/AddTodo/AddTodo'
import './App.css';
import Login from './components/Login/Login';
import LoggedView from './components/LoggedView/LoggedView'
import Register from './components/Register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component{
  state = {
    "Usuario":null,
    "IsLogged":false,
    "data":[{
      "description": "some description text ",
      "responsible": {
          "name": "Santiago Carrillo",
          "email": "sancarbar@gmail"
      },
      "status": "ready",
      "dueDate": 156464645646
  }]
  }


  changeLogin = (bool,user) =>{
    this.setState({
      "Usuario":user,
      "IsLogged":bool
    });

  }

  newTask = (task) =>{
    let arrayTMP = this.state.data
    arrayTMP.push(task)
    this.setState({
      "data":arrayTMP
    })
    
  }



  render(){
    let elementRender = null;
    if(!this.state.IsLogged){
      elementRender = <Login handleLogin={this.changeLogin}></Login>
    } else {
      elementRender = <LoggedView usuario={this.state.Usuario} todoData={this.state.data}></LoggedView>
    }

    
    
    return (
      <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" render={()=>elementRender}/>
          <Route path="/addTodo">
            <AddTodo newTask={this.newTask}/>
          </Route>
          <Route path="/register">
            <Register doRegister={this.changeLogin}/>
          </Route>
        
        
        </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
