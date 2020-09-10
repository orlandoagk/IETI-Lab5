import React from 'react'
import TodoCards from '../TodoCards/TodoCards'
import MyDrawer from '../Drawer/Drawer';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {withRouter} from 'react-router-dom';
import MyModal from './MyModal'

class LoggedView extends React.Component{

    state={
        "cards":this.props.todoData
    }

    probando = () =>{
        this.props.history.push("/addTodo")
    }

    handleFilter = () =>{
        this.cleanAllFilter()

    }

    cleanAllFilter = () =>{
        this.setState({
            "cards":this.props.todoData
        })
    }

    render(){
        return(
            <div>
                <MyDrawer usuario={this.props.usuario}></MyDrawer>
                <TodoCards data={this.state.cards}></TodoCards>
                <MyModal applyFilter={this.handleFilter}></MyModal>
                <Fab color="primary" aria-label="add" onClick={this.probando}><AddIcon/></Fab>
            </div>
        )
    }
}

export default withRouter(LoggedView);

