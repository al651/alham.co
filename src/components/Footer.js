import '../styles/Footer.css';
import { TiSocialYoutube, TiSocialInstagram, TiMail } from "react-icons/ti";

function Footer() {
    return (
        <footer>
            <div id="footer-container">
                <div id="footer-content">
                    <div id="footer-socials">
                        <li className="footer-social-button"><a href="https://www.youtube.com/channel/UCpy5nWPp2pmlrkvbZBYAZqA" alt='Youtube channel button' target='_blank' rel='noopener noreferrer'><TiSocialYoutube/></a></li>
                        <li className="footer-social-button"><a href="https://www.instagram.com/alham.me/" alt='Instagram account button' target='_blank' rel='noopener noreferrer'><TiSocialInstagram/></a></li>
                        <li className="footer-social-button"><a href="mailto:ali@alham.co" alt='Email me button'><TiMail/></a></li>
                    </div>
                    
                    <p className="footer-text">
                        Copyright © {new Date().getFullYear()} Ali Hamid
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;