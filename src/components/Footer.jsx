import "../blocks/footer.css"
import {Link} from "react-router-dom";
import githubLogo from "../images/Vector.svg";
import facebookLogo from "../images/iconmonstr-facebook-6.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__description">© 2024 Supersite. Powered by News API</p>
            <nav className="footer__nav-bar">
             <a className="footer__home-page" href="/">Home</a>
             <a  className="footer__tripleten-link" href="https://tripleten.com">TripleTen</a>
             </nav> 
                <Link className="footer__social-link" to="/">
                <img src={githubLogo} className="footer__logo-github" alt="github" />
                <img src={facebookLogo} className="footer__logo-facebook" alt="facebook" />
                </Link>        
        </footer>
    )
};

export default Footer;