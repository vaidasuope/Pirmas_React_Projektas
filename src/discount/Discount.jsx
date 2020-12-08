import React, {Component} from 'react';

export default class Discount extends Component {
    constructor() {
        super();
        this.state = {message: "Visiems -10% nuolaida"}
    }
    getDiscount(){
        this.setState({message: "Jus gaunate -20% nuolaida"})
    }
    render() {
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.getDiscount.bind(this)} className="btn btn-warning">Gaudyk nuolaidą!</button>
            </div>
        )
    }
}


