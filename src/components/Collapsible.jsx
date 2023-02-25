import React, { useState } from "react";
import "../styles/collapsible.css"

const Collapsible = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapsible-container">
      <button className="toggle-button" onClick={toggle}>
        <span className={`arrow-icon ${open ? "open" : "closed"}`}>></span>
        {title}
      </button>
      {open && <div className="content">{children}</div>}
    </div>
  );
};

export default Collapsible;
