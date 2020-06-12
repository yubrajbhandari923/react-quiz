import React from 'react'

class Body extends React.Component {
    render() {
        const styles = {
            width: '100vw',
            fontSize: '20px',
            color: 'royalblue',


        }
        return (
            <section style={styles} className="body">
                <h1>It works. :) ;P</h1>
            </section>
        )
    }
}

export default Body