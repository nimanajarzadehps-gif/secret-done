import React from "react";
import "../style.css"; 

export default function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footer-top">

        <div className="socialIcons">
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" aria-label="Google Plus"><i className="fa-brands fa-google-plus"></i></a>
          <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
        </div>

        <div className="footerNav">
          <ul>
            <li><a href="#">بلاگ</a></li>
            <li><a href="#">دوره ها</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
            <li><a href="#">خانه</a></li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2025 ؛ طراحی شده توسط <span className="designer">کدمتن</span></p>
      </div>
    </footer>
  );
}
