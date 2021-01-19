import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'

export default class Habits extends Component {
    render() {
        
        return (
            <div className="habits">
                <HabitAddForm onAdd={this.props.onAdd}/>
                <ul>
                    {
                        this.props.habit.map((habit)=>(
                            <Habit
                            key={habit.id} 
                            habit={habit}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement} 
                            onDelete = {this.props.onDelete}/>
                        ))
                    }
                </ul>
                <button className="resetBtn" onClick={this.props.onReset}>Reset All</button>
            </div>
        )
    }
}
