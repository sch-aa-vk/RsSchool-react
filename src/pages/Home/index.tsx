import { Search } from '../../layouts/Search';
import { HomeCards } from '../../layouts/HomeCards';

import './style.css';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <Search />
      <HomeCards />
    </div>
  );
};
