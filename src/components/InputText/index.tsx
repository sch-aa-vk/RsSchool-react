import { Component } from 'react';

import './style.css';

interface IInputText {
  value: string;
  classname?: string;
  fn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class InputText extends Component<IInputText> {
  render() {
    return (
      <input
        className={`input ${this.props.classname || ''}`}
        type="text"
        value={this.props.value}
        onChange={this.props.fn}
      />
    );
  }
}
