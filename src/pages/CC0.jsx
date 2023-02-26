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
          process in the shape of a hackathon. 
        </p>
        <p className="body-1">
          The installation was designed to enable distributed control to the
          public through these instruments which directly condition the system’s
          motion, sound, and structure. Each one of these instruments can
          be accessed in its digital form through this webpage and also in its
          physical form at HAU2 in Berlin within the context of CTM festival
          2023.
        </p>

        <p className="body-2">
          CC0 marks the inauguration of PAL (Participative Audio Lab), a
          initiative aimed at the development of open-source tools to allow
          artists to create and distribute their own participative musical
          experiences. On a broader scale, PAL aims to harvest a culture of open
          creation.
        </p>

        <div>
          <p className="body-3">
            CC0 was initiated thanks to support from the initiative »Prototyping
            Sonic Institutions« organised by Black Swan and CTM Festival 2022.
            Employing decentralised autonomous organisation (DAO) infrastructure
            and thinking, Black Swan engaged with a number of resource-pledging
            silent stakeholders to explore new ways of supporting the creation
            of artistic works.
          </p>
          <img
            src="public/A5 - 28.jpg"
            alt="Image Description"
            className="image"
          />
        </div>

        <div className="Exhibition logos">
          <img
            src="public/A5 - 28.jpg"
            alt="Image Description"
            className="image"
          />
          <img
            src="public/A5 - 28.jpg"
            alt="Image Description"
            className="image"
          />
          <img
            src="public/A5 - 28.jpg"
            alt="Image Description"
            className="image"
          />

          <img
            src="public/A5 - 28.jpg"
            alt="Image Description"
            className="image"
          />
        </div>

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
            <div className="content">
              <p className="title">
                Each one of these instruments can be accessed in its digital
                form through this webpage and also in its physical form at HAU2
                in Berlin within the context of CTM festival 2023.
              </p>
              <div className="description">
                <h2 className="subtitle">THE FORUM</h2>
                <p className="text">
                  The forum is a public domain of reflection. Using a local
                  network of microphones, the forum takes a breath from you and
                  stores it in a pool of collective memories which then plays
                  back in a generative fashion using the multichannel panels as
                  output.
                </p>
              </div>

              <div className="description">
                <h2 className="subtitle">THE PENDULUM</h2>
                <p className="text">
                  Activated through user action in the physical space, the
                  pendulum affects the sound of the installation and conditions
                  the motion of the online version of the instrument.
                </p>
              </div>

              <div className="description">
                <h2 className="subtitle">THE PULSE</h2>
                <p className="text">
                  Pulse is an instrument based on an algorithm for mutual
                  synchronization, inspired by biological systems and adopted
                  for sound creation by Stratos Bichakis. Controlled directly
                  from the website, the pulse conditioned the visuals of the
                  physical space.
                </p>
              </div>
              <img
                src="public/A5 - 28.jpg"
                alt="Image Description"
                className="image"
              />
            </div>
          </Collapsible>
          <hr />

          <h1>Development process</h1>
          <Collapsible>
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
          <hr />

          <h1>Texts</h1>
          <Collapsible>
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
          <hr />

          <h1>Events and recording archive</h1>
          <Collapsible>
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
          <hr />

          <h1>Credits</h1>
          <Collapsible>
            <p>Content that can be hidden or shown.</p>
          </Collapsible>
        </div>
      </div>
      <div className="cc0-right-panel">{/* content for right panel */}</div>
    </div>
  );
}

export default CC0;
