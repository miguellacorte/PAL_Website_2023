import React from "react";
import "../styles/CC0.css";
import Collapsible from "../components/Collapsible";

function CC0() {
  return (
    <div className="cc0-container">
      <div className="cc0-left-intro">
        <div className="header">
          <img src="/cc0.png" alt="Image Description" className="CC0-logo" />

          <div>
            <span className="CC0-title-1">CC0 (Collective Control 0) </span>
            <span className="CC0-title-2">
              Live Participative Music Installation at CTM festival 2023
            </span>
          </div>
        </div>

        <h3 className="header-quote">
          No one knows everything, everyone knows something, and all knowledge
          resides in humanity… New communications systems should provide
          community members with the means to coordinate their interactions
          within the same virtual universe of knowledge.
        </h3>

        <p className="quote-title">
          Collective Intelligence — Pierre Lévy, 1994
        </p>

        <p className="body-1">
          <span style={{}}>CC0 (Collective Control 0) </span>
          is a system for live collective composition consisting of three
          different instruments:
          <span> “The Forum, Pendulum, and Pulse”. </span>
          These were conceived and developed through an open creative process in
          the shape of a hackathon.
        </p>
        <p className="body-1">
          The installation was designed to enable distributed control to the
          public through these instruments which directly condition the system’s
          motion, sound, and structure.{" "}
        </p>

        <p className="body-1">
          Each one of these instruments can be accessed in its digital form
          through this webpage and also in its physical form at{" "}
          <span>
            {" "}
            <a
              style={{ color: "#DCFFCF" }}
              href="https://www.hebbel-am-ufer.de/"
            >
              HAU2
            </a>{" "}
          </span>{" "}
          in Berlin within the context of{" "}
          <span>
            {" "}
            <a
              style={{ color: "#DCFFCF" }}
              href="https://www.hebbel-am-ufer.de/"
            >
              CTM festival 2023.{" "}
            </a>
          </span>
        </p>

        <p className="body-1">
          CC0 marks the inauguration of PAL (Participative Audio Lab), a
          initiative aimed at the development of open-source tools to allow
          artists to create and distribute their own participative musical
          experiences. On a broader scale, PAL aims to harvest a culture of open
          creation.
        </p>

        <div className="body-2">
          <p>
            CC0 was initiated thanks to support from the initiative »Prototyping
            Sonic Institutions« organised by Black Swan and CTM Festival 2022.
            Employing decentralised autonomous organisation (DAO) infrastructure
            and thinking, Black Swan engaged with a number of resource-pledging
            silent stakeholders to explore new ways of supporting the creation
            of artistic works.
          </p>
          <img
            src="/logo_1 2.png"
            alt="Image Description"
            className="PAL-logo"
          />
        </div>

        <div className="Exhibition-logos">
          <img
            src="/hau_black 1.png"
            alt="Image Description"
            className="image-hau"
          />
          <img src="/ctm-logo.png" alt="CTM logo" className="image" />

          <img
            src="/image003.png"
            alt="Image Description"
            className="image-berlin"
          />
          <img
            src="/KSB_Programmlogo_dive_in_EN_horizontal_CMYK.png"
            alt="Image Description"
            className="image-senat"
          />
        </div>

        <div className="buttons">
          <div className="cc0-start-button">
            <img src="/Arrow 6.png" alt="arrow" className="arrow-1" />
            <div>ACCESS CC0 HERE </div>
          </div>
          <div className="cc0-leaflet-download">
            <p>Download Installation booklet (PDF) </p>
            <img src="/Arrow 7.png" alt="arrow" className="arrow-2" />
          </div>
        </div>

        <div className="dropdown-menu">
          <div>
            <h1>CC0 User guide</h1>
            <Collapsible>
              <div className="content">
                <p className="title">
                  Each one of these instruments can be accessed in its digital
                  form through this webpage and also in its physical form at
                  HAU2 in Berlin within the context of CTM festival 2023.
                </p>
                <div className="description">
                  <h2 className="subtitle">THE FORUM</h2>
                  <p className="text">
                    The forum is a public domain of reflection. Using a local
                    network of microphones, the forum takes a breath from you
                    and stores it in a pool of collective memories which then
                    plays back in a generative fashion using the multichannel
                    panels as output.
                  </p>
                </div>

                <div className="description">
                  <h2 className="subtitle">THE PENDULUM</h2>
                  <p className="text">
                    Activated through user action in the physical space, the
                    pendulum affects the sound of the installation and
                    conditions the motion of the online version of the
                    instrument.
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
          </div>
          <hr />

          {/* <div className="dropdown-menu-rest">
            <h1>Development process</h1>
            <Collapsible >
              <p>Content that can be hidden or shown.</p>
            </Collapsible>
          </div>
          <hr /> */}

          {/* <h1>Texts</h1>
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
          </Collapsible>  */}
        </div>
      </div>
      <div className="cc0-right-panel">{/* content for right panel */}</div>
    </div>
  );
}

export default CC0;
