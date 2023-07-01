import insta from './insta.png';
import fb from './fb.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import './footer.styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2023 - TalentTrack.</p>

            <div className="socials">
                <a href="https://www.instagram.com/"><img src={insta} alt="instagram" /></a>

                <a href="https://www.facebook.com/"><img src={fb} alt="facebook" /></a>

                <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>

                <a href="https://www.linkedin.com/"><img src={linkedin} alt="linkedin" /></a>

            </div>
        </div>
    )
}

export default Footer;