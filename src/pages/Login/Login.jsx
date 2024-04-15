import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container-signup">
        <div className="gradient"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/9a8e2463-c5e5-45f7-8f7d-d87086a1b594/BR-pt-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="signup-sec">
          <div className="sec">
            <div className="content">
              <h1>Sign In</h1>
              {error ? <p className="error-message">{error}</p> : null}
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  autoComplete="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="Password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="button-signup">Sign In</button>
                <div className="extra-infos">
                  <p>
                    <input type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="signin">
                  <span>New to Netflix?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
