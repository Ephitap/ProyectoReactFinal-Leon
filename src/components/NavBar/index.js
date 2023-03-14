import CartWidget from "../CartWidget";
import "./styles.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img
              src="/img/pagesImg/blackLibrary.png"
              alt="Site logo"
              height="35"
              
            />
          </Link>
        </div>

        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/admin">admins</Link>
          </li>
          <li>
            <Link to="/category/editor ">editor</Link>
          </li>
          <li>
            <Link to="/category/subscriptor">subscriptor</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;