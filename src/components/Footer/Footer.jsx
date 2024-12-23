import "../Footer/footer.css";
import { Link } from "react-router-dom";
import githubLogo from "../../images/Vector.svg";
import facebookLogo from "../../images/iconmonstr-facebook-6.svg";
import "../Navigation/nav.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        © 2024 Supersite. Powered by News API
      </p>
      <nav className="footer__nav-bar">
        <Link className="nav__link nav__link-home_active" to="/">
          Home
        </Link>
        <Link
          className="nav__link nav__link-tripleten_black"
          to="https://tripleten.com"
        >
          TripleTen
        </Link>
      </nav>
      <nav className="footer__social-links">
        <Link to="https://github.com" className="nav__link">
          <img
            src={githubLogo}
            className="footer__social-icon-github"
            alt="github"
          />
        </Link>
        <Link to="https://facebook.com" className="nav__link">
          <img
            src={facebookLogo}
            className="footer__social-icon-fb"
            alt="facebook"
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
