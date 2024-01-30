import { Link } from "react-router-dom";
import "../style/footer.css";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__text">
        <Link to="/" ><div>Home</div></Link>
        <Link to="/about" ><div>About</div></Link>
        <Link to="/work" ><div>Work</div></Link>
        <Link to="contact" ><div>Contact</div></Link>
      </div>
      <div className="footer__icon">
        <a href="https://www.linkedin.com/in/tsheringgurungny/" target="_blank" ><LinkedInIcon/></a>
        <a href="https://github.com/teegrg" target="_blank" ><GitHubIcon/></a>
        <a href="mailto: teegurung@gmail.com"><MailOutlineIcon/></a>
      </div>
    </div>
  );
}

export default Footer;
