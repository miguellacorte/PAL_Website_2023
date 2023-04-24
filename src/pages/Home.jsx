import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (

    <div className="home-container">
      <div className="main-content">
        <p>
          In the midst of a culture of closed creative control, the{" "}
          <span className="pal">Participative Audio Lab (PAL)</span>
          <span style={{ marginLeft: "0.5%" }} className="inline-image">
            <img
              src="https://participativeaudiolab.com/images/logo_1 2.png"
              alt="inline image"
            />
          </span>{" "}
          is an initiative focused on the development of open source tools for
          the distribution of participative musical experiences. Learn more about our vision {" "}
          <Link to="/about" style={{ color: "white" }}>
            <span>here.</span>{" "}
          </Link>{" "}
        </p>

       
      </div>
      <div className="green-text">
        <p>
          Experience our inauguration project "Collective
          Control 0 (CC0)" at CTM festival 2023 {" "}
          <span>
            <Link to="/CC0">here</Link>
          </span>
          <span>
            <img
              className="inline-arrow_home"
              src="https://participativeaudiolab.com/images/Arrow 9.png"
              alt="inline arrow"
            />
          </span>
        </p>
      </div>
    </div>
  );
}