import React from 'react'


class Popbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDoneButton = this.handleDoneButton.bind(this)

        this.box = React.createRef()

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDoneButton(e) {
        e.preventDefault()
        this.props.doneButtonHandle(Object.entries(this.state))
    }

    componentDidMount(){
        this.box.current.style.marginBottom = this.box.current.style.height
        console.log(this.box.current.style.top)
    }
    render() {
        const styles = {
            popbox__cover : {
                position: 'fixed',
                top: '0',
                left: '0',
                width:'100vw',
                height: '100vh',
                display: 'flex',
                justifyContent : 'center',
                alignItems: 'center',
            },
            popbox: {
                minWidth: '100px',
                maxWidth: '90vw',
                padding: '10px 30px 20px 30px',
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '7px',
                opacity: '1',
                font: '17px arial',
                boxShadow: '-1px 0px 17px 1px rgba(0,0,0,0.3)',

            },
            popbox__title: {
                font: '20px montserrat',
                fontWeight: 'bold',
                margin: '15px 0',
                padding: '5px 3px',
                width: '100%',
                borderBottom: '2px solid black'
            },
            button: {
                width: 'calc(50% - 10px)',
                padding: '5px',
                font: '15px montserrat',
                margin: '0 5px',
                cursor: 'pointer'
            }


        }
        return (
            <div style={styles.popbox__cover} className="cover">
            <div ref={this.box} style={styles.popbox} className="popbox">
                <div style={styles.popbox__title} className="popbox__title">
                    <p>{this.props.title}</p>
                </div>
                <form>
                    {
                        this.props.popBoxInputFields.map((item,index) =>
                        <Inputfield handleChange={this.handleChange} title={item} key={index} colors={this.props.colors} />
                        )
                    }
                    {/* <Inputfield handleChange={this.handleChange} title='Author' colors={this.props.colors} /> */}
                    <p>
                        <button style={styles.button} onClick={this.handleDoneButton}> Done </button>
                        <button style={styles.button} onClick={this.props.cancelHandle}> Cancel</button>
                    </p>
                </form>
            </div>
            </div>
            
        )
    }
}

class Inputfield extends React.Component {
    render() {
        const styles = {
            input: {
                minWidth: '100px',
                maxWidth: '100%',
                // border: 'none',
                borderWidth: '1px',
                borderRadius: '3px',
                borderColor: 'black',
                padding: '5px',
                fontSize: '17px'
            },
            container: {
                margin: '10px 0'
            }


        }
        return (
            <p style={styles.container}>
                <label htmlFor={this.props.title}>{this.props.title} : </label>
                <input style={styles.input}
                    type='text'
                    placeholder={'Enter ' + this.props.title}
                    name={this.props.title}
                    onChange={this.props.handleChange}></input>
            </p>
        )
    }
}



export default Popbox