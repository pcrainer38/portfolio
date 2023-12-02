import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
 
const Footer = () => {
    return (
    <>  
        
        <div classname='footer'>
            <a href='https://www.github.com/pcrainer38' target='_blank' id='fa'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/pamela-crainer' target='_blank' id='fa'><FaLinkedin /></a>
            <a href='https://www.facebook.com/pam.crainer' target='_blank' id='fa'><FaFacebook /></a>
        </div>
    </>
    )

};


export default Footer;