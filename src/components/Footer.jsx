import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
 
const Footer = () => {
    return (
    <>  
        <div id='contact'>
            <h2>Contact</h2>
        </div>
        <div className="input-group mb-3" id="contact">
            <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        <div className="input-group mb-3" id="contact">
            <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
        
            <textarea className="form-control" aria-label="With textarea" placeholder="message"></textarea>
        </div>
        <div>
            <br />
        <button type="button" class="btn btn-primary">Primary</button>
        </div>


        <div>
            <a href='https://www.github.com' target='_blank' id='fa'><FaGithub /></a>
            <a href='https://www.linkedin.com' target='_blank' id='fa'><FaLinkedin /></a>
            <a href='https://www.facebook' target='_blank' id='fa'><FaFacebook /></a>
        </div>
    </>
    )

};


export default Footer;