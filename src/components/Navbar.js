import React from 'react'

import Popbox from './popbox'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddProject: false,
        };

        this.handleDisplayAddProject = this.handleDisplayAddProject.bind(this)
        this.handleAddProject = this.handleAddProject.bind(this)
    }

    handleDisplayAddProject() {
        this.setState(state => ({
            displayAddProject: !state.displayAddProject
        }))
    }

    handleAddProject(data) {
        this.handleDisplayAddProject();
        let buff = Object.fromEntries(data)
        if (data.length == 2) {
            this.props.handleAddProject(buff[data[0][0]], buff[data[1][0]])
        }
    }
    render() {
        const styles = {
            minWidth : '100vw',
            maxWidth: '100vw',
            backgroundColor: this.props.colors.tertiary,
            color: this.props.colors.primaryText,
            padding: '10px',

        }
        return (
            <header style={styles} className="navBar">
                <Addbutton onClick={this.handleDisplayAddProject} />
                {this.state.displayAddProject ? <Popbox title="Add new project" colors={this.props.colors} doneButtonHandle={this.handleAddProject} cancelHandle={this.handleDisplayAddProject} popBoxInputFields={['Project Name', 'Author']} /> : null}
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
            <div style={styles} className="addbutton" onClick={this.props.onClick}> + </div>
        )
    }
}
export default Navbar