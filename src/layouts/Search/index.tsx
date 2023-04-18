import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../utils/types';
import { inputValueSetNew, inputValueUpdate } from '../../store/slices/inputValue.slice';
import { SearchIcon } from '../../assets/SearchIcon';

import './style.css';

export const Search: React.FC = () => {
  const { input: initialValue } = useSelector((state: IStore) => state.inputValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  const fnUpdateSearch = () => {
    dispatch(inputValueUpdate(value));
    dispatch(inputValueSetNew());
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
