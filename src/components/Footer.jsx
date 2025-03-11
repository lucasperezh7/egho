import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importar los iconos de Font Awesome
import "../styles/Footer.css"; // Importar el archivo CSS del Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Reyes Santos 2025</p>
      </div>
      <div className="social-icons">
        <a
          href="https://open.spotify.com/intl-es/artist/6QoLtA9FRj5uZmttg3gVWt"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-spotify"></i>
        </a>
        <a
          href="https://www.youtube.com/@Egho"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/egho.rs/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.tiktok.com/@egho.rs?lang=es"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
