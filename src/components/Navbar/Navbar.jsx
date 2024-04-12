import "./navbar.scss";
import NetflixLogo from "../../assets/netflix.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <Link to={"/"}>
        <div className="logo">
          <img src={NetflixLogo} alt="netflix logo" />
        </div>
      </Link>
      <div className="buttons">
        <Link to={"/login"}>
          <button className="signin">Sign In</button>
        </Link>
        <Link to={"/signup"}>
          <button className="signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
