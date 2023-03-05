import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
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
    <MobileNavbar isOpen={isOpen} onToggle={handleToggle} />
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
        <CustomLink to="/CC0">CTM FESTIVAL 2023 - CC0</CustomLink>
      </ul>
    </nav>
  );
}

function MobileNavbar({ isOpen, onToggle }) {
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
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/CC0">CC0 (CTM festival 2023)</CustomLink>
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