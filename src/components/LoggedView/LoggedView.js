import React from 'react'
import TodoCards from '../TodoCards/TodoCards'
import MyDrawer from '../Drawer/Drawer';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {withRouter} from 'react-router-dom';

class LoggedView extends React.Component{

    probando = () =>{
        this.props.history.push("/addTodo")
    }

    render(){
        return(
            <div>
                <MyDrawer usuario={this.props.usuario}></MyDrawer>
                <TodoCards data={this.props.todoData}></TodoCards>
                <Fab color="primary" aria-label="add" onClick={this.probando}><AddIcon/></Fab>
            </div>
        )
    }
}

export default withRouter(LoggedView);

