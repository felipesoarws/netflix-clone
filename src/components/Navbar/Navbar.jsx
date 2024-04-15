import "./navbar.scss";
import NetflixLogo from "../../assets/netflix.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Link to={"/"}>
        <div className="logo">
          <img src={NetflixLogo} alt="netflix logo" />
        </div>
      </Link>
      {user?.email ? (
        <div className="buttons">
          <Link to={"/account"}>
            <button className="signin">Account</button>
          </Link>
          <button onClick={handleLogout} className="logout">
            Logout
          </button>
        </div>
      ) : (
        <div className="buttons">
          <Link to={"/login"}>
            <button className="signin">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="signup">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
