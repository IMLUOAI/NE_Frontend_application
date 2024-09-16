
import {Link} from "react-router-dom";
import githubLogo from "../images/Vector.svg";
import facebookLogo from "../images/iconmonstr-facebook-6.svg";

const Footer = () => {
    return (
        <footer>
            <p className="footer__description">&#9400 2024 Supersite. Powered by News API</p>
            <nav className="footer__nav-bar">
             <a href="/">Home</a>
             <a href="https://tripleten.com">TripleTen</a>
                <Link to="/">
                <img src={githubLogo} className="footer__logo-github" alt="github" />
                <img src={facebookLogo} className="footer__logo-facebook" alt="facebook" />
                </Link>
            </nav>
        </footer>
    )
};

export default Footer;