import React from 'react'

import Popbox from './popbox'

class Navbar extends React.Component {
    render() {
        const styles = {
            width: '100vw',
            backgroundColor: this.props.colors.tertiary,
            color: this.props.colors.primaryText,
            padding: '10px',

        }
        return (
            <header style={styles} className="navBar">
                <Addbutton />
                <Popbox title="Add new project" />
            </header>
        )
    }
}
class Addbutton extends React.Component {
    render() {
        const styles = {
            fontSize: '30px',
            fontWeight: 'bold',
            padding: '0 10px',
            cursor: 'pointer'
        }
        return (
            <div style={styles} className="addbutton"> + </div>
        )
    }
}
export default Navbar