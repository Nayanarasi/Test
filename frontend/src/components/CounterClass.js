import React from "react";

//making a component class extending with a superclass called component
class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this)
        this.state = {
            number: 0 //state defining
        }
    }

    increment() {
        this.setState({//state modifications
            number: ++this.state.number //++this.state.number
        })
    }

    render(){
        return(
            <div>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
            
    }
}
export default CounterClass;