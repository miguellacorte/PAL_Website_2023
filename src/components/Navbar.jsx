import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick() {
    setLinkClicked(true);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // change breakpoint if necessary
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <MobileNavbar
      isOpen={isOpen}
      onToggle={handleToggle}
      onLinkClick={handleLinkClick}
      linkClicked={linkClicked}
    />
  ) : (
    <DesktopNavbar />
  );
}

function DesktopNavbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>

      <div className="navbarRight">
        <div>
          <p>LIVE</p>
        </div>

        <CustomLink to="/CC0">CTM FESTIVAL 2023 - CC0</CustomLink>
      </div>
    </nav>
  );
}

function MobileNavbar({ isOpen, onToggle }) {
  const handleClose = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.remove("open");
    onToggle(); // call the onToggle function to close the navbar
  };

  return (
    <div>
      <button className="hamburger" onClick={onToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <button className="close" onClick={onToggle}>
          X
        </button>
      )}

      <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <CustomLink to="/" onClose={handleClose}>
            Home
          </CustomLink>
          <div></div>
          <CustomLink to="/about" onClose={handleClose}>
            About
          </CustomLink>
          <div></div>
          <CustomLink to="/contact" onClose={handleClose}>
            Contact
          </CustomLink>
          <div></div>
          <CustomLink className="cc0Dot" to="/CC0" onClose={handleClose}>
            <span style={{fontSize:" 0.2em", marginRight: "0.5em"}}></span> CC0 (CTM festival 2023)
          </CustomLink>
          <div></div>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
