import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <nav className="navbar">
        
        <Link to="/login" className="login-signup-btn">
          ورود / ثبت‌نام
        </Link>

        <ul className={`nav-links ${navActive ? "nav-active" : ""}`}>
          <li><Link to="/exam">آزمون</Link></li>
          <li><Link to="/blog">بلاگ</Link></li>
          <li><Link to="/contact">تماس با ما</Link></li> 
          <li><Link to="/courses">دوره‌ها</Link></li>
          <li><Link to="/about">درباره ما</Link></li>
          <li><Link to="/">خانه</Link></li>
        </ul>

        <div
          className={`burger ${navActive ? "toggle" : ""}`}
          onClick={toggleNav}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}
