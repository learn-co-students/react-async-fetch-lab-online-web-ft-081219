import React, {Component} from 'react';
import { runInThisContext } from 'vm';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            people: []
        }
    }

    render() {
        return(
            <div>{this.state.people.map(p => <div>{p.name + "-" + p.craft}</div>)}</div>
        )
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj)
                this.setState({
                    people: obj.people
                })
            })
            .catch(error => {
                alert("Error fetching data.");
                console.log(error.message);
            })
    }
}
