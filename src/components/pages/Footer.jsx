import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
 
const Footer = () => {
    return (
    <>  
        
        <div>
            <a href='https://www.github.com' target='_blank' id='fa'><FaGithub /></a>
            <a href='https://www.linkedin.com' target='_blank' id='fa'><FaLinkedin /></a>
            <a href='https://www.facebook.com' target='_blank' id='fa'><FaFacebook /></a>
        </div>
    </>
    )

};


export default Footer;