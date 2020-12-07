import React, {Component} from "react";

class Article extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return {
                counter: prevState.counter +1
            }
        })
    }
    render() {
        return (
            <div className="article">
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.description}</p>
                <p>Likes:{this.state.counter}</p>
                <a onClick={this.handleClick} href="#"></a>
            </div>
        )
    }
}
export default Article;