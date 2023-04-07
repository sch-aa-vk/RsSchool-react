import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';

import './style.css';

interface ISearch {
  onUpdateSearch: (value: string) => void;
}

export const Search: React.FC<ISearch> = ({ onUpdateSearch }: ISearch) => {
  const initialValue = localStorage['input-value'] ? localStorage['input-value'] : '';
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);

  useLayoutEffect(() => {
    localStorage['input-value'] = value;
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    const inputValueInLocalStorage = localStorage['input-value'];
    if (input && inputValueInLocalStorage) input.value = inputValueInLocalStorage;
    return () => {
      if (input) localStorage['input-value'] = input.value;
    };
  }, []);

  const fnUpdateSearch = () => {
    onUpdateSearch(value);
  };

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <input
          className="input search__input"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          ref={inputRef}
          placeholder="Search by name"
        />
        <SearchIcon />
      </div>
      <button className="search__button" type="button" onClick={fnUpdateSearch}>
        Search
      </button>
    </div>
  );
};
