import React from "react";
import "../styles/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          {" "}
          <CustomLink to="/home">Home</CustomLink>
        </li>
        <li>
          {" "}
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          {" "}
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li className="cc0">
          {" "}
          <CustomLink to="/CC0">CTM FESTIVAL 2023 - CC0 </CustomLink>{" "}
        </li>
      </ul>
    </nav>
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
