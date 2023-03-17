import { Component } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';

import './style.css';

export class Search extends Component {
  state: { value: string };
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      value: localStorage['input-value'] ? localStorage['input-value'] : '',
    };
  }

  render() {
    return (
      <div className="search">
        <div className="search__input-wrapper">
          <input
            className="search__input"
            type="text"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <SearchIcon />
        </div>
        <button className="search__button" type="button">
          Search
        </button>
      </div>
    );
  }
}
