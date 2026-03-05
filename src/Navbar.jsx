import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">

        {/* LOGO */}
        <div className="joblogo">
          <Link to="/job">Job Board</Link>
        </div>

        {/* TOGGLE BUTTON */}
        <div 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/browse">Browse Job</Link></li>
          
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <div className="login-link">
            <Link to="/login">Login</Link>

            <Link to="/Applayjobs">
              <button className="post-btn">Apply For Job</button>
            </Link>
          </div>

        </ul>

      </header>

      <Outlet />
    </>
  );
}

export default Navbar;