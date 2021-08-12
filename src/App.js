import React from 'react';

class App extends React.Component {
  constructor(props){
super(props);
console.log('hello!')
  }
  state = {
    number : 0
  }

  numberIncrease = () => {
    this.setState(current => ({ number : current.number + 1}));
  }

  numberDecrease = () => {
    this.setState(current => ({ number : current.number - 1}) );
  }

  componentDidMount() {
    console.log('it was rendered at the first time')
  }

  componentDidUpdate() {
    console.log('i just updated!');
  }

  componentWillUnmount() {
    console.log('good bye, cruel world')
  }

  render() {
    console.log("i'm rendering");
    return (
      <div>
      <h1>the number is {this.state.number}</h1>
      <button onClick={this.numberIncrease}>+</button>
      <button onClick={this.numberDecrease}>-</button>
      </div>
    )
  }
}


export default App; 
