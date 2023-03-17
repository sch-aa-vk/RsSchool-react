import React from 'react';
import { Link } from 'react-router-dom';
import { getPageName } from '../../utils';

import './style.css';

type header = {
  path: string;
};

export const Header: React.FC<header> = ({ path }) => {
  const pagename = getPageName(path);
  return (
    <div className="header">
      <Link className="header__path" to={path}>
        {pagename}
      </Link>
      <div className="header__links">
        <Link className="header__links-link" to="/">
          Home
        </Link>
        <Link className="header__links-link" to="/about-us">
          About
        </Link>
      </div>
    </div>
  );
};
