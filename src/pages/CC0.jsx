import React from "react";
import "../styles/CC0.css";
import Collapsible from "../components/Collapsible";

function CC0() {
  return (
    <div className="cc0-container">
      <div className="cc0-left-intro">
        <div className="header">
          <img src="https://miguellacorte.github.io/PAL_Website_2023/images/cc0.png" alt="Image Description" className="CC0-logo" />

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
          <span>CC0 (Collective Control 0) </span>
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
              href="https://www.hebbel-am-ufer.de/programm/pdetail/participative-audio-lab-collective-control-0"
            >
              HAU2
            </a>{" "}
          </span>{" "}
          in Berlin within the context of{" "}
          <span>
            {" "}
            <a
              style={{ color: "#DCFFCF" }}
              href="https://www.ctm-festival.de/festival-2023/programme/practise/collective-control-0"
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
            src="https://miguellacorte.github.io/PAL_Website_2023/images/logo_1 2.png"
            alt="Image Description"
            className="PAL-logo"
          />
        </div>

        <div className="Exhibition-logos">
          <img
            src="https://miguellacorte.github.io/PAL_Website_2023/images/hau_black 1.png"
            alt="Image Description"
            className="image-hau"
          />
          <img src="https://miguellacorte.github.io/PAL_Website_2023/images/ctm-logo.png" alt="CTM logo" className="image-ctm" />

          <img
            src="https://miguellacorte.github.io/PAL_Website_2023/images/image003.png"
            alt="Image Description"
            className="image-berlin"
          />
          <img
            src="https://miguellacorte.github.io/PAL_Website_2023/images/KSB_Programmlogo_dive_in_EN_horizontal_CMYK.png"
            alt="Image Description"
            className="image-senat"
          />
        </div>

        <div className="buttons">
          <div className="cc0-start-button">
            <img src="https://miguellacorte.github.io/PAL_Website_2023/images/Arrow 6.png" alt="arrow" className="arrow-1" />
            <div>ACCESS CC0 HERE </div>
          </div>
          <div className="cc0-leaflet-download">
            <p>Download Installation booklet (PDF) </p>
            <img src="https://miguellacorte.github.io/PAL_Website_2023/images/Arrow 7.png" alt="arrow" className="arrow-2" />
          </div>
        </div>

        <div className="dropdown-menu">
          <Collapsible title="CC0 User guide">
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
                src="https://miguellacorte.github.io/PAL_Website_2023/images/A5 - 28.jpg"
                alt="Image Description"
                className="image"
              />
            </div>
          </Collapsible>
          <hr />

          <Collapsible title="development process"></Collapsible>
          <hr />

          <Collapsible title="events/recordings archive"></Collapsible>
          <hr />

          <Collapsible title="texts"></Collapsible>
          <hr />

          <Collapsible title="credits"></Collapsible>
          <hr style={{ marginBottom: "0" }} />
        </div>
      </div>

      <div className="cc0-right-panel">
        <div className="container">
          <div className="images">
            <div
              style={{
                marginLeft: "1%",
                marginTop: "5%",
                marginRight: "0",
                marginBottom: "1%",
              }}
            >
              <img src="https://miguellacorte.github.io/PAL_Website_2023/images/panels_hau.jpg" alt="image1" className="image" />
              <p className="text-images">"The Forum" panels. Photo by Jamie Rosenberg</p>
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  marginRight: "0",
                  marginBottom: "1%",
                }}
              >
                <img src="https://miguellacorte.github.io/PAL_Website_2023/images/panel_stratos.jpg" alt="image2" className="image" />
                <p className="text-images">Panel close-up. Photo by Stratos Bichakis</p>
              </div>
              <div
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  marginRight: "0",
                  marginBottom: "1%",
                }}
              >
                <img src="https://miguellacorte.github.io/PAL_Website_2023/images/IMG_5225 1.jpg" alt="image3" className="image" />
                <p className="text-images">"The Forum" participants. Photo by Stratos Bichakis</p>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  marginLeft: "1%",
                  marginTop: "6%",
                  marginRight: "0",
                  marginBottom: "1%",
                }}
              >
                <img
                  src="https://miguellacorte.github.io/PAL_Website_2023/images/IMG_5406 1.jpg"
                  alt="image2"
                  className="image"
                />
                <p className="text-images">Instrument 2: The Pendulum</p>
              </div>
              <div
                style={{
                  marginLeft: "1%",
                  marginTop: "6%",
                  marginRight: "0",
                  marginBottom: "1%",
                }}
              >
                <img src="https://miguellacorte.github.io/PAL_Website_2023/images/booklets.jpg" alt="image3" className="image" />
                <p className="text-images">Installation Booklet</p>
              </div>
            </div>

            <div
              style={{
                marginLeft: "1%",
                marginTop: "6%",
                marginRight: "0",
                marginBottom: "1%",
              }}
            >
              <img src="https://miguellacorte.github.io/PAL_Website_2023/images/panels_hau_2.jpg" alt="image1" className="image" />
              <p className="text-images">"The Forum" Panels and "The Bells" visualisation (purple figure in translucent curtain). Photo by Jamie Rosenberg</p>
            </div>

            <div>
              <img src="https://miguellacorte.github.io/PAL_Website_2023/images/pendulum_1.jpg" alt="image1" className="image" />
              <p className="text-images">The Pendulum. Photo by Jamie Rosenberg</p>
            </div>

            <div className="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CC0;
