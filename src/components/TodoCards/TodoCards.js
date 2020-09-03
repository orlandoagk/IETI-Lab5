import React from 'react'
import Cards from './Cards'

class TodoCards extends React.Component{
    state = {
        cards: [{
            "description": "some description text ",
            "responsible": {
                "name": "Santiago Carrillo",
                "email": "sancarbar@gmail"
            },
            "status": "ready",
            "dueDate": 156464645646
        }]
    }

    render(){
        const {cards} = this.state;
        return(
            <div>
                {cards.map((card,index)=>{
                    return(
                        <Cards key={index} info={card}></Cards>
                    )
                })}
                
            </div>
        )
    }
}

export default TodoCards;