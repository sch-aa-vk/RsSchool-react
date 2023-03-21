import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPageName } from '../../utils';
import { withRouter, WithRouterProps } from '../../utils/withRouter';

import './style.css';

export const Header = withRouter((props) => <HeaderComponent {...props} />);

export class HeaderComponent extends Component<WithRouterProps> {
  render() {
    return (
      <div className="header">
        <Link className="header__path" to={this.props.location.pathname}>
          {getPageName(this.props.location.pathname)}
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
  }
}
