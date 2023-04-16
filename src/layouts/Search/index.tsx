import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store/store';
import { inputValueUpdate } from '../../store/slices/inputValue.slice';
import { SearchIcon } from '../../assets/SearchIcon';

import './style.css';

interface ISearch {
  onUpdateSearch: (value: string) => void;
}

export const Search: React.FC<ISearch> = ({ onUpdateSearch }: ISearch) => {
  const initialValue = store.getState().inputValue;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  const fnUpdateSearch = () => {
    onUpdateSearch(value);
    dispatch(inputValueUpdate(value));
  };

  const handleKeyPressed = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      fnUpdateSearch();
    }
  };

  return (
    <div className="search" onKeyDown={handleKeyPressed}>
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
