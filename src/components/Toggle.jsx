import { Component } from 'react';

class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });
  hide = () => this.setState({ isOpen: false });

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  //   show = () => this.setState({ isOpen: true });
  //   hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { childern, changeMessage } = this.props;

    return (
      <>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
        <button onClick={this.toggle}>{isOpen ? 'hide' : 'show'}</button>
        <button onClick={() => changeMessage(isOpen)}>Click me!</button>
        {isOpen && childern}
      </>
    );
  }
}

export default Toggle;
