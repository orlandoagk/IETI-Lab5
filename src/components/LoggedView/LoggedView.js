import React from 'react'
import TodoCards from '../TodoCards/TodoCards'
import MyDrawer from '../Drawer/Drawer'

class LoggedView extends React.Component{

    render(){

        return(
            <div>
                <MyDrawer usuario={this.props.usuario}></MyDrawer>
                <TodoCards></TodoCards>
            </div>
        )
    }
}

export default LoggedView;