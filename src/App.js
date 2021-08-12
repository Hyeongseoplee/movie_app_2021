import React from 'react';

class App extends React.Component {

  state = {
    number : 0
  }

  numberIncrease = () => {
    this.setState(current => ({ number : current.number + 1}));
  }

  numberDecrease = () => {
    this.setState(current => ({ number : current.number - 1}) );
  }

  render() {
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
