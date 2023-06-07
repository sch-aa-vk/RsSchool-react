import { useState } from 'react';
import store from '../../store/store';
import { Search } from '../../layouts/Search';
import { HomeCards } from '../../layouts/HomeCards';

import './style.css';

export const Home: React.FC = () => {
  const initialValue = store.getState().inputValue;
  const [value, setValue] = useState(initialValue);

  const onUpdateSearch = (value: string) => {
    setValue(value);
  };

  return (
    <div className="home">
      <Search onUpdateSearch={onUpdateSearch} />
      <HomeCards value={value} />
    </div>
  );
};
