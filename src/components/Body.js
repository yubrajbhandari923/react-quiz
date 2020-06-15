import React from 'react'

import Popbox from './popbox'
class Body extends React.Component {
    render() {
        const styles = {
            width: '100vw',
            fontSize: '20px',


        }
        return (
            <section style={styles} className="body">
                {this.props.projectsData.map((item, index) =>
                    <ProjectList value={item} key={index} colors={this.props.colors} />
                )
                }
            </section>
        )
    }
}


class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddSet: true
        }
    }
    render() {
        const styles = {
            container: {
                width: 'calc( 100vw - 50px)',
                padding: '10px 20px',
                margin: '10px',
                font: '20px cabin',
                borderBottom: '1px solid grey',
                cursor: 'pointer',
                display: 'flex',
                flexWrap: 'wrap',

            },
            name: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            },


        }
        return (
            <div className='projectData__container' style={styles.container}>
                <div className='projectData__name' style={styles.name}>
                    <span>{this.props.value[0]}</span>
                    <div style={{ display: 'flex' }}>

                        <span>Author:<i> {this.props.value[1]} </i> </span>
                        <Addsetbutton colors={this.props.colors} />
                    </div>

                </div>
            </div>
        )
    }
}
class Addsetbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddSet: false
        }

        this.handleAddSet = this.handleAddSet.bind(this)
        this.handleDisplayAddSet = this.handleDisplayAddSet.bind(this)
    }

    handleDisplayAddSet() {
        this.setState(state => ({
            displayAddSet: !state.displayAddSet
        }))
    }

    handleAddSet(data) {
        let buff = Object.fromEntries(data)
        alert(buff[data[0][0]])
    }
    render() {
        const styles = {
            addbutton: {
                font: '25px montserrat',
                fontWeight: 'bold',
                color: 'white',
                height: '30px',
                width: '30px',
                borderRadius: '100%',
                background: this.props.colors.tertiary,
                textAlign: 'center',
                margin: '0px 30px',
                lineHeight: '30px',

            },
        }

        return (

            <div>
                <div style={styles.addbutton} onClick={this.handleDisplayAddSet} className='projectData__addbutton'> + </div>
                {this.state.displayAddSet ? <Popbox title="Add Set" colors={this.props.colors} doneButtonHandle={this.handleAddSet} cancelHandle={this.handleDisplayAddSet} popBoxInputFields={['SetName', 'Description', 'Tags']} /> : null}
            </div>
        )
    }
}
export default Body