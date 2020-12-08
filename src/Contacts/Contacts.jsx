import React, {Component} from "react";


// function Contacts (props) {
//     return (
//         <div>
//             <h3>Name: {props.name}</h3>
//             <p>Email: {props.email}</p>
//         </div>
//     )
// }

export default class Contacts extends Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge //pradide reiksme cia uzdetinam
        }
    }
    makeOlder(){
        this.setState({
            age: this.state.age +10
        })
    }
    render() {
        return(
            <div>
                <h3>Vardas" {this.props.name}</h3>
                <p>El.pastas: {this.props.email}</p>
                <p>Amzius: {this.state.age}</p>
                <button onClick={this.makeOlder.bind(this)} className='btn btn-danger'>Please click for make older</button>
            </div>
        )
    }
}