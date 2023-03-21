import { Component } from 'react';
import Toggle from './Toggle.jsx';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    counterValue: this.props.initialValue,
  };

  // static propTypes = {};

  // constructor(props) {
  //   super(props);

  //   // this.handleDecrement = this.handleDecrement.bind(this);
  //   // this.handleIncrement = this.handleIncrement.bind(this);

  //   // stan deklaruje sie w konstrktorze lub jako publiczna wlasciwosc klasy (Ln 9)
  //   // this.state = {
  //   //   value: this.props.initialValue,
  //   // };
  // }

  handleIncrement = event => {
    // console.log('Increment btn was clicked', event);
    // console.log('this.props: ', this.props);
    this.setState((state, props) => ({
      counterValue: state.counterValue + props.step,
    }));
  };
  handleDecrement = event => {
    // console.log('Decrement btn was clicked', event);
    // console.log('this.props: ', this.props);
    this.setState((state, props) => ({
      counterValue: state.counterValue - props.step,
    }));
  };

  handleChange = (isIncrement, step) => {
    this.setState(state => {
      return {
        counterValue: isIncrement
          ? state.counterValue + step
          : state.counterValue - step,
      };
    });
  };
  someFunc = isOpen => {
    console.log('func', isOpen);

    // this.setState({ message: new Date().toLocaleDateString() })
  };

  render() {
    const { step } = this.props;
    const { counterValue, message } = this.state;

    return (
      <div>
        <div>COUNTER</div>
        <div>Counter value is: {counterValue}</div>
        <button type="button" onClick={() => this.handleChange(false, step)}>
          Decrement by {step}
        </button>
        <button type="button" onClick={() => this.handleChange(true, step)}>
          Increment by {step}
        </button>

        <p>{message}</p>
        <Toggle changeMessage={this.someFunc}>test</Toggle>
      </div>
    );
  }
}

export default Counter;
