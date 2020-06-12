import React from 'react';

// Components
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'


// StyleSheets
import '../styles/app.css'
import '../fonts/fonts.css'

class App extends React.Component {
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
                <Navbar colors={colors} />
                <Body colors={colors} />
                <Footer colors={colors} />
            </div>
        )
    }
}

export default App