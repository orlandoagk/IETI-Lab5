import React from 'react'
import TodoCards from '../TodoCards/TodoCards'
import MyDrawer from '../Drawer/Drawer';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class LoggedView extends React.Component{

    render(){

        return(
            <div>
                <MyDrawer usuario={this.props.usuario}></MyDrawer>
                <TodoCards></TodoCards>
                <Fab color="primary" aria-label="add"><AddIcon/></Fab>
            </div>
        )
    }
}

export default LoggedView;