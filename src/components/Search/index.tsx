import { Component } from 'react';

import './style.css';

export class Search extends Component {
  state: { value: string };
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          value={this.state.value}
          onChange={() => console.log('change')}
        />
        <button className="search__button" type="button">
          Search
        </button>
      </div>
    );
  }
}
