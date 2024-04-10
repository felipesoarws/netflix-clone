import "./navbar.scss";
import NetflixLogo from "../../assets/netflix.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={NetflixLogo} alt="netflix logo" />
      </div>
      <div className="buttons">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
