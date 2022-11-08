import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">JCO</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.messenger.com/" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="Facebook"
                >
                    <i class="uil uil-facebook-messenger"></i>
                </a>

                <a 
                    href="https://www.instagram.com/" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="Instagram"
                >
                    <i class="uil uil-instagram"></i>
                </a>

                <a 
                    href="https://github.com/" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="github"
                >
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; JCO. All rights reserved</span>
        </div>
    </footer>
  )
}

// METTRE LINKEDIN

export default Footer