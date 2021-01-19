import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                 <span><i className="logo fas fa-leaf"></i></span>
                 <span>Habit Tracker</span>
                 <span className="total">{this.props.total}</span>
             </nav>
        )
    }
}
