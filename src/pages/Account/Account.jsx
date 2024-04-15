import "./account.scss";
import SavedMovies from "../../components/SavedMovies/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="account-background">
        <div className="gradient"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/9a8e2463-c5e5-45f7-8f7d-d87086a1b594/BR-pt-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />

        <div className="account-content">
          <h1>My shows</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
