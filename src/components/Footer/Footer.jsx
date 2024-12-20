import "../Footer/footer.css";
import { Link } from "react-router-dom";
import githubLogo from "../../images/Vector.svg";
import facebookLogo from "../../images/iconmonstr-facebook-6.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        © 2024 Supersite. Powered by News API
      </p>
      <nav className="footer__nav-bar">
        <a className="nav__link-footer" href="/">
          Home
        </a>
        <a className="nav__link-tripleten" href="https://tripleten.com">
          TripleTen
        </a>
      </nav>
      <div className="footer__social-links">
        <a href="https://github.com" className="nav__link">
          <img src={githubLogo} className="footer__logo-github" alt="github" />
        </a>
        <a href="https://facebook.com" className="nav__link">
          <img
            src={facebookLogo}
            className="footer__logo-facebook"
            alt="facebook"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
