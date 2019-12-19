// create your App component here
import React,{Component} from 'react'

export default class App extends Component{
    constructor(){
        super()
        this.state = {people_in_space: []}
    }
    componentDidMount(){
        fetch( 'http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then( json => { this.setState({people_in_space: json}) })
    }
    render(){

    }
}