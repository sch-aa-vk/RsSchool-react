import { Component } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';

import './style.css';

interface ISearch {
  onUpdateSearch: (value: string) => void;
}

export class Search extends Component<ISearch> {
  state: { value: string };
  constructor(props: ISearch) {
    super(props);
    this.state = {
      value: localStorage['input-value'] ? localStorage['input-value'] : '',
    };
  }

  componentWillUnmount() {
    localStorage['input-value'] = this.state.value;
  }

  onUpdateSearch = () => {
    this.props.onUpdateSearch(this.state.value);
  };

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
        <button className="search__button" type="button" onClick={this.onUpdateSearch}>
          Search
        </button>
      </div>
    );
  }
}
