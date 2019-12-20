// create your App component here
import React, {Component} from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return(
            <div>
                <p>{this.state.peopleInSpace.map(person => person.name)}{' '}</p>
                <p>{this.state.peopleInSpace.map(person => person.craft)}{' '}</p>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState({peopleInSpace: data.people}))
    }

}

export default App;
