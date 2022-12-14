import React from 'react';
import Counter from './components/Counter';

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('π μ»΄ν¬λνΈκ° λ§μ΄νΈ λμμ!');
  }

  componentWillUnmount() {
    console.log('μ»΄ν¬λνΈκ° κ³§ μΈλ§μ΄νΈ λ  μμ μ...');
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count: {this.state.count} {this.state.count >= 10 ? 'π₯' : 'βοΈ'}
        </div>
        <div className="counters">
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
