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
        <Link className="footer__nav-link footer__nav-link_home" to="/">
          Home
        </Link>
        <Link
          className="footer__nav-link footer__nav-link_tripleten"
          to="https://tripleten.com"
        >
          TripleTen
        </Link>
      </nav>
      <nav className="footer__social-links">
        <Link
          to="https://github.com"
          className="footer__social-link footer__social-link_github"
        >
          <img src={githubLogo} alt="github" />
        </Link>
        <Link
          to="https://facebook.com"
          className="footer__social-link footer__social-link_fb"
        >
          <img src={facebookLogo} alt="facebook" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
