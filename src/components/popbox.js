import React from 'react'

const styles = {
    popbox: {
        minWidth: '100px',
        maxWidth: '90vw',
        position: 'absolute',
        padding: '10px 30px 20px 30px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '7px',
        opacity: '1',
        font: '20px montserrat',
        boxShadow: '-1px 0px 17px 1px rgba(0,0,0,0.3)',

    },
    popbox__title: {
        font: '',
        padding: '10px 0',
    }


}

class Popbox extends React.Component {
    render() {
        return (
            // <div style={styles.cover} className="cover">
            <div style={styles.popbox} className="popbox">
                <div style={styles.popbox__title} className="popbox__title">
                    <p>{this.props.title}</p>
                </div>
                <form>
                    <Inputfield title='Project Name' />
                    <Inputfield title='Author' />
                    <p>
                        <button> Done </button>
                        <button> Cancel</button>
                    </p>
                </form>
            </div>
            // </div>

        )
    }
}

class Inputfield extends React.Component {
    render() {
        return (
            <p>
                <label htmlFor={this.props.title}>{this.props.title} :</label>
                <input type='text' placeholder={'Enter ' + this.props.title} name={this.props.title}></input>
            </p>
        )
    }
}



export default Popbox