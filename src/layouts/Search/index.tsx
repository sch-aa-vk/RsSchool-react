import { useLayoutEffect, useState } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { InputText } from '../../components/InputText';

import './style.css';

interface ISearch {
  onUpdateSearch: (value: string) => void;
}

export const Search: React.FC<ISearch> = ({ onUpdateSearch }: ISearch) => {
  const initialValue = localStorage['input-value'] ? localStorage['input-value'] : '';
  const [value, setValue] = useState(initialValue);

  useLayoutEffect(() => {
    localStorage['input-value'] = value;
  }, []);

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <InputText
          classname="search__input"
          value={value}
          fn={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
        <SearchIcon />
      </div>
      <button className="search__button" type="button" onClick={() => onUpdateSearch(value)}>
        Search
      </button>
    </div>
  );
};
