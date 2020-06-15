import React from 'react';

// Components
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'


// StyleSheets
import '../styles/app.css'
import '../fonts/fonts.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            projects: [
                ['Deemo project','Demo AAuthor'],
                ['hh','hhhj']

            ]
        }
        this.handleAddProject =this.handleAddProject.bind(this)
    }
    handleAddProject(name,author){
        this.setState({
            projects : [...this.state.projects , [name, author]]
        })
    }
    render() {
        const colors = {
            primary : '#1D3557',
            secondary : '#457B9D',
            tertiary : '#E63946',
            primaryText : 'white',
            secondaryText : 'black'
        }
        return (
            <div>
                <Navbar colors={colors} handleAddProject={this.handleAddProject} />
                <Body colors={colors} projectsData={this.state.projects} />
                <Footer colors={colors} />
            </div>
        )
    }
}

export default App