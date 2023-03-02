import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <p>
          In the midst of a culture of closed creative control, the{" "}
          <span className="pal" >
            Participative Audio Lab (PAL)
          </span>
          <span style={{ marginLeft: "0.5%" }} className="inline-image">
            <img src="https://miguellacorte.github.io/PAL_Website_2023/images/logo_1 2.png" alt="inline image" />
          </span>{" "}
          is an initiative focused on harvesting a culture of open creation
          through the development of open source tools for the distribution of
          participative musical experiences.
        </p>
      </div>
      <div className="green-text">
        <p>
          Experience our inauguration project at CTM festival, titled Collective
          Control 0 (CC0){" "}
          <span>
            <a href="#">here</a>
          </span>
          <span  >
            <img className="inline-arrow" src="../images/Arrow 9.png" alt="inline arrow" />
          </span>
        </p>
      </div>
    </div>
  );
}
