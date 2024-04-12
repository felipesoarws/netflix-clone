import "./signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
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
              <h1>Sign Up</h1>
              <form>
                <input type="email" placeholder="Email" autoComplete="Email" />
                <input
                  type="Password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="button-signup">Sign Up</button>
                <div className="extra-infos">
                  <p>
                    <input type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="signin">
                  <span>Already subscribed to Netflix?</span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
