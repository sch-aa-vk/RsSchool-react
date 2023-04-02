import { Link, useLocation } from 'react-router-dom';
import { getPageName } from '../../utils/functions';

import './style.css';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className="header">
      <Link className="header__path" to={location.pathname}>
        {getPageName(location.pathname)}
      </Link>
      <div className="header__links">
        <Link className="header__links-link" to="/">
          Home
        </Link>
        <Link className="header__links-link" to="/about-us">
          About
        </Link>
        <Link className="header__links-link" to="/forms">
          Forms
        </Link>
      </div>
    </div>
  );
};
