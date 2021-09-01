import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    const socialLinks = (icon: string) => {
        switch (icon) {
          case "GitHub":
            window.open("https://github.com/lwang55350");
            break;
          case "LinkedIn":
            window.open("https://www.linkedin.com/in/lwang55350/");
            break;
          case "Facebook":
            window.open("https://www.facebook.com/lwang55350/");
            break;
        }
    }
    return (
        <div className="footer">
            <h1 style={{margin: "0 0 10px 0"}}>Socials</h1>
            <div className="social-icons">
                <FaLinkedin className="icon" onClick={() => socialLinks("LinkedIn")}/>
                <FaGithub className="icon" onClick={() => socialLinks("GitHub")}/>
                <FaFacebook className="icon" onClick={() => socialLinks("Facebook")}/> 
            </div>
        </div>
    )
};

export default Footer;