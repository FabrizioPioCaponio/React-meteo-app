import React from 'react';
import logo from '../assets/LogoTrasparente.png';

const Logo = () => {
    const logoStyle = `
  .logo-container {
  position: fixed;
  z-index: 9999;
  opacity: 0.3;
  transition: opacity 0.7s ease;
  cursor: pointer;
  top: 2px;
  left: 2px;
  
}

    .logo-image {
      width: 230px;
      
    }

    .logo-container:hover {
        opacity: 1;
      }
  `;

    return (
        <>
            <style>{logoStyle}</style>
            <a href='https://fabrizio-caponio-portfolio.netlify.app/' target="_blank" rel="noreferrer" className="logo-container">
                <img src={logo} alt='logo' className="logo-image" />
            </a>
        </>
    );
};

export default Logo;
