import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
        <CrwnLogo className="logo"/>
        </Link>
        <div className="navigation-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
        
          <Link className="nav-link" to="/signIn">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
