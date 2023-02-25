import React from "react";
import "../styles/CC0.css";
import Collapsible from "../components/Collapsible";

function CC0() {
  return (
    <div className="cc0-container">
      <div className="cc0-left-intro">
        <h3 className="header">
          No one knows everything, everyone knows something, and all knowledge
          resides in humanity… New communications systems should provide
          community members with the means to coordinate their interactions
          within the same virtual universe of knowledge.
        </h3>

        <p className="body-1">
          {" "}
          CC0 (Collective Control 0) is a system for live collective composition
          consisting of three different instruments: “The Forum, Pendulum, and
          Pulse”. These were conceived and developed through an open creative
          process in the shape of a hackathon. The installation was designed to
          enable distributed control to the public through these instruments
          which directly condition the system’s motion, sound, and structure.
          Each one of these instruments can be accessed in its digital form
          through this webpage and also in its physical form at HAU2 in Berlin
          within the context of CTM festival 2023. CC0 marks the inauguration of
          PAL (Participative Audio Lab), a initiative aimed at the development
          of open-source tools to allow artists to create and distribute their
          own participative musical experiences. On a broader scale, PAL aims to
          harvest a culture of open creation.
        </p>
        <p className="body-2">
          CC0 was initiated thanks to support from the initiative »Prototyping
          Sonic Institutions« organised by Black Swan and CTM Festival 2022.
          Employing decentralised autonomous organisation (DAO) infrastructure
          and thinking, Black Swan engaged with a number of resource-pledging
          silent stakeholders to explore new ways of supporting the creation of
          artistic works.
        </p>
        <p className="body-3">
          CC0 was initiated thanks to support from the initiative »Prototyping
          Sonic Institutions« organised by Black Swan and CTM Festival 2022.
          Employing decentralised autonomous organisation (DAO) infrastructure
          and thinking, Black Swan engaged with a number of resource-pledging
          silent stakeholders to explore new ways of supporting the creation of
          artistic works.
        </p>

        <div className="buttons">
          <div className="cc0-start-button">
            <div>Content for cc0 start button container</div>
          </div>
          <div className="cc0-leaflet-download">
            <div>Content for cc0 remaining container</div>
          </div>
        </div>

        <div className="dropdown-menu">

          <h1>CC0 User guide</h1>
          <Collapsible id="collapsible">
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
          <hr />

          <h1>CC0 User guide</h1>
          <Collapsible >
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
          <hr />

          <h1>CC0 User guide</h1>
          <Collapsible >
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
          <hr />

          <h1>CC0 User guide</h1>
          <Collapsible >
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
          <hr />

         

        </div>
      </div>
      <div className="cc0-right-panel">{/* content for right panel */}</div>
    </div>
  );
}

export default CC0;
