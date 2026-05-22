import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Emeka%20Abanifi&backgroundColor=5000ca&fontWeight=700" alt="Emeka Abanifi" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/galaxyb-dark" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/emeka-abanifi-50880b285/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:byteharborhq@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
          <h1>Emeka Abanifi</h1>
          <p>Senior Full Stack Software Engineer · Atlanta, GA</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/galaxyb-dark" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/emeka-abanifi-50880b285/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:byteharborhq@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
