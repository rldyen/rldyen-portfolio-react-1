import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://www.facebook.com/rowyourbowt/" target="_blank">
              <FacebookIcon />
            </a>
            <a href="mailto: roaldyen.soriano@gmail.com" target="_blank">
              <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/roaldyen/" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/rldyen" target="_blank">
              <GitHubIcon />
            </a>
        </div>
    </div>
  )
}

export default Footer;