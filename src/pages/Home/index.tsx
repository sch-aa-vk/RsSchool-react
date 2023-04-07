import { useState } from 'react';

import { Search } from '../../layouts/Search';
import { HomeCards } from '../../layouts/HomeCards';

import './style.css';

export const Home: React.FC = () => {
  const initialValue = localStorage['input-value'] ? localStorage['input-value'] : '';
  const [value, setValue] = useState(initialValue);

  const onUpdateSearch = async (value: string) => {
    setValue(value);
  };

  return (
    <div className="home">
      <Search onUpdateSearch={onUpdateSearch} />
      <HomeCards value={value} />
    </div>
  );
};
