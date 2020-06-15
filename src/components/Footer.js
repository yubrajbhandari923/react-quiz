import React from 'react'

class Footer extends React.Component {
    render() {
        const styles = {
            minWidth : '100vw',
            maxWidth: '100vw',
            backgroundColor: 'royalblue',
            color: 'white',
            padding: '10px',
            fontSize: '20px',

        }
        return (
            <footer style={styles} className="footer">
                <p>credits </p>
            </footer>
        )
    }
}

export default Footer