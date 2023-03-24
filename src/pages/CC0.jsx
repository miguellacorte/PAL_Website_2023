import React, { useRef } from "react";
import "../styles/CC0.css";
import Collapsible from "../components/Collapsible";

function CC0() {
  const canvasRef = useRef(null);
  return (
    <div>
      <div className="cc0-container">
        <div className="cc0-left-intro">
          <div className="header">
            <img
              src="https://miguellacorte.github.io/PAL_Website_2023/images/cc0.png"
              alt="Image Description"
              className="CC0-logo"
            />

            <div>
              <span className="CC0-title-1">CC0 (Collective Control 0) </span>
              <span className="CC0-title-2">
                Live Participative Music Installation at CTM festival 2023
              </span>
            </div>
          </div>

          <div className="intro-container">
            <p className="body-1">
              Marking the inauguration of the Participative Audio Lab,
              <span>CC0 (Collective Control 0) </span>
              is a system for live collective composition consisting of three
              different instruments:
              <span> “The Forum, Pendulum, and Pulse”. </span>
              These were conceived and developed through an open creative
              process in the shape of a hackathon.
            </p>
            <p className="body-1">
              The installation was designed to enable distributed control to the
              public through these instruments which directly condition the
              system’s motion, sound, and structure.{" "}
            </p>

            <p className="body-1">
              Each one of these instruments can be accessed in its digital form
              through this webpage and also in its physical form at{" "}
              <span>
                <a
                  style={{ color: "white" }}
                  href="https://www.hebbel-am-ufer.de/programm/pdetail/participative-audio-lab-collective-control-0"
                >
                  HAU2
                </a>
              </span>{" "}
              in Berlin within the context of{" "}
              <span>
                {" "}
                <a
                  style={{ color: "white" }}
                  href="https://www.ctm-festival.de/festival-2023/programme/practise/collective-control-0"
                >
                  CTM festival 2023.{" "}
                </a>
              </span>
            </p>

            <p className="body-1" style={{}}>
              CC0 was initiated thanks to support from the initiative
              <span>
                {" "}
                <a
                  style={{ color: "white" }}
                  href="https://www.ctm-festival.de/festival-2022/programme/practise/prototyping-sonic-institutions"
                >
                  »Prototyping Sonic Institutions«
                </a>{" "}
              </span>
              organised by Black Swan and CTM Festival 2022. 
            </p>
          </div>

          <div className="Exhibition-logos">
            <img
              src="https://miguellacorte.github.io/PAL_Website_2023/images/hau_white.png"
              alt="Image Description"
              className="image-hau"
            />
            <img
              src="https://miguellacorte.github.io/PAL_Website_2023/images/ctm-logo.png"
              alt="CTM logo"
              className="image-ctm"
            />

            <img
              src="https://miguellacorte.github.io/PAL_Website_2023/images/image003.png"
              alt="Image Description"
              className="image-berlin"
            />
            <img
              src="https://miguellacorte.github.io/PAL_Website_2023/images/KSB_Programmlogo_dive_in_DE_horizontal_white_transp_0.png"
              alt="Image Description"
              className="image-senat"
            />
          </div>

          <div className="buttons">
            <div className="cc0-start-button">
              <a href="https://cc0.participativeaudiolab.com">
                <img
                  src="https://miguellacorte.github.io/PAL_Website_2023/images/Arrow 6.png"
                  alt="arrow"
                  className="arrow-1"
                />
              </a>

              <span>
                <a
                  href="https://cc0.participativeaudiolab.com"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  ACCESS CC0 HERE
                </a>
              </span>
            </div>

            <div className="cc0-leaflet-download">
              <span>
                <a
                  href="https://drive.google.com/file/d/1MDCbuckytnbf_UrUxieakvw1SrnaVSDh/view"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Download Installation booklet (PDF)
                </a>
              </span>

              <span>
                <a href="https://drive.google.com/file/d/1MDCbuckytnbf_UrUxieakvw1SrnaVSDh/view">
                  <img
                    src="https://miguellacorte.github.io/PAL_Website_2023/images/Arrow 7.png"
                    alt="arrow"
                    className="arrow-2"
                  />
                </a>
              </span>
            </div>
          </div>

          <div className="dropdown-menu">
            <div className="dropdowns">
              <Collapsible title="CC0 User guide">
                <div className="content">
                  <p className="title-userguide">
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
                      synchronization, inspired by biological systems and
                      adopted for sound creation by Stratos Bichakis. Controlled
                      directly from the website, the pulse conditioned the
                      visuals of the physical space.
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

              <Collapsible title="development process">
                <div className="dev-process">
                  <h1>
                    <a
                      style={{ color: "white" }}
                      href="https://www.ctm-festival.de/festival-2022/programme/practise/prototyping-sonic-institutions"
                    >
                      Pt.1 Prototyping sonic institutions with Black Swan
                      <span>
                        <img
                          className="inline-arrow"
                          src="https://miguellacorte.github.io/PAL_Website_2023/images/Arrow%2010.png"
                          alt="inline arrow"
                        />
                      </span>
                    </a>{" "}
                  </h1>
                  <p>
                    {" "}
                    Black Swan is a Berlin-based collective experimenting in
                    horizontal and decentralised, infrastructure and governance.
                    Challenging conventional decision-making and resource
                    allocation models in the arts and culture sectors, Black
                    Swan facilitates the development of new artist-led models of
                    communal support, collaboration, and governance. Through
                    democratising access to resources and funds – as evidenced
                    in experiments led at Berlin’s Trust and KW Institute in
                    2021 – Black Swan is actively developing a more equitable
                    and democratic cultural ecosystem.
                  </p>
                  <p>
                    Within May 2022, a number of resources were pledged by
                    various partners, to allow for the realisation of a
                    music/sound related project. Participants selected via open
                    call then proposed their own project ideas to the group, or
                    simply indicated a wish to experiment in collective
                    decision-making.
                  </p>
                  <p>
                    Using Black Swans’s digital toolkit, including a quadratic
                    voting application known as Cygnet, participants
                    collectively decided how to disseminate and allocate the
                    resources pledged to their projects. By June 2022, after a
                    voting round utilizing the quadratic voting tool, successful
                    applications were announced.
                  </p>

                  <h1>Pt.2 Participative Audio Lab Hackathon.</h1>
                  <p>
                    Thanks to the resources pledged by the CTM 2022 x Black Swan
                    workshop, the Participative Audio Lab (PAL) was then granted
                    a commission for developing an exhibition at HAU2 within the
                    context of CTM Festival 2023.
                  </p>
                  <p>
                    As part of the fundamental beliefs of PAL in creation as a
                    collective process, and to further explore the dynamics of
                    participation and collaboration in real-time scenarios, PAL
                    decided to open the development process of the exhibition,
                    including its involving granted resources received by CTM.
                  </p>
                  <p>
                    By November 2022, PAL created an open call for the
                    development of the exhibition, in the frame of a hackathon.
                    More specifically, the development of instruments of
                    collective creation was set as the core structure of the
                    exhibition; the hackathon leveraged on the newly announced
                    RNBO tool by Cycling 74 as the core infrastructure for the
                    instruments to be developed. The Hackathon consisted of four
                    days and three phases:
                  </p>
                  <ul>
                    <li>
                      Within the first day, an experience of collective ideation
                      was set: Through conversations and guided collective
                      visualisations by the participants, a picture was formed.
                      Each participant expressed their interest and priorities
                      of development within the hackathon.
                    </li>
                    <li>
                      By the second day, participants prepared a prototype of
                      their instruments and demonstrated them to others.
                    </li>
                    <li>
                      Through the last two days, collective consensus took shape
                      in different live voting dynamics to decide on the
                      instruments that would be developed.
                    </li>
                  </ul>
                  <h1>Pt.3 Hackthon outcome: Collective control 0</h1>
                  <p>
                    It is within this context where CC0 (Collective Control 0)
                    was created. Through a process of collaboration in the form
                    of a hackathon, CC0 emerges as a collection of instruments
                    for collective creation.
                  </p>

                  <p>
                    Evoking tools and systems of social organization, 3
                    instruments were carefully composed: “The Forum, Pendulum and Pulse”. 
                  </p>
                </div>
              </Collapsible>
              <hr />

              <Collapsible title="events/recordings archive"></Collapsible>
              <hr />

              <Collapsible title="texts"></Collapsible>
              <hr />

              <Collapsible title="credits">
                <div>
                  <div className="lastParagraph"></div>

                  <div style={{ marginLeft: "2%", marginTop: "5%" }}>
                    <p className="body-1">
                      Special thanks to{" "}
                      <span>
                        <a
                          style={{ color: "white" }}
                          href="https://factoryberlin.com/about/"
                        >
                          Factory Berlin
                        </a>
                      </span>
                      for granting the working spacespace.
                    </p>

                    <p className="body-1">
                      Special thanks to Haywirez for server infrastructure.
                    </p>

                    <hr />
                    <div>
                      <article>
                        <p className="body-1">
                          <span>Initiative, general direction</span>: Miguel La
                          Corte
                          <br />
                          <span>Concept &amp; production</span>: Massimiliano
                          Cerioni, Miguel La Corte, Martin Lundfall, <br />
                          Stratos Bichakis, Santiago Burelli
                        </p>
                        <p className="body-1">
                          <span>Sound Direction</span>: Martin Lundfall
                          (Pendulum), Massimiliano Cerioni
                          <br />
                          (Forum, Pendulum), Stratos Bichakis (Pulse, Perc)
                          <br />
                          <span>Web Direction</span>: Attila Haraszti, Martin
                          Lundfall
                          <br />
                          <span>Web app architecture</span>: Attila Haraszti
                          <br />
                          <span>Network infrastructure</span>: Attila Haraszti,
                          Martin Lundfall
                          <br />
                          <span>Visuals</span>: Martin Lundfall (Pulse, Perc,
                          Pendulum)
                          <br />
                          <span>Zine</span>: Miguel La Corte
                          <br />
                          <span>Texts</span>: Miguel La Corte, Massimiliano
                          Cerioni
                          <br />
                          <span>Installation lighting</span>: Stratos Bichakis
                        </p>
                        <br />
                        <p className="body-1">
                          <span>Instruments</span>
                          <br />
                        </p>
                        <ul className="body-1">
                          <li>
                            <p className="instruments-title">"Forum":</p>
                            <ul>
                              <li>Martin Lundfall: concept, prouction</li>
                              <li>
                                Massimiliano Cerioni: concept, instrument sound
                                development (RNBO/MAX)
                              </li>
                              <li>Miguel La Corte: concept, production.</li>
                            </ul>
                          </li>
                          <li>
                            <p className="instruments-title">“Pulse / Perc”:</p>
                            <ul>
                              <li>
                                Stratos Bichakis: concept, algorithm design
                                (RNBO/MAX).
                              </li>
                              <li>Martin Lundfall: visualisation</li>
                            </ul>
                          </li>
                          <li>
                            <p className="instruments-title">“Pendulum”:</p>
                            <ul>
                              <li>
                                Stratos Bichakis: interaction design &amp;
                                development.
                              </li>
                              <li>
                                Santiago Burelli: pendulum concept, design &amp;
                                fabrication
                              </li>
                              <li>Martin Lundfall: concept, visualisation</li>
                              <li>
                                Massimiliano Cerioni: sound development
                                (RNBO/MAX)
                              </li>
                              <li>
                                Miguel La Corte: concept, live camera system,
                                production
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p />
                        <br />
                        <p className="body-1">
                          <span>Hackathon Participants</span>: Stratos Bichakis,
                          Massimiliano Cerioni,
                          <br />
                          Philipp Geschwendtner,ShangYunWu,
                          <br />
                          Niles Fromm, Mario Scarfiglieri,
                          <br />
                          Santiago Burelli, Patricia Calugar, Crcdng.
                          <br />
                          <span>Space Modeling</span>: Niles Fromm
                          <br />
                          <span>Project documentation</span>: Jamie Rosenberg
                          <br />
                          <span>Production Assistance</span>: Mario Scarfiglieri
                          <br />
                          <span>Web development assistance</span>: Parrr Geng
                          &amp; Carolina Acuña
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </Collapsible>
              <hr style={{ marginBottom: "0" }} />
            </div>
          </div>
        </div>

        <div className="cc0-right-panel">
          <h3 className="header-quote">
            No one knows everything, everyone knows something, and all knowledge
            resides in humanity… New communications systems should provide
            community members with the means to coordinate their interactions
            within the same virtual universe of knowledge.
          </h3>

          <p className="quote-title">
            Collective Intelligence — Pierre Lévy, 1994
          </p>
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
                <img
                  src="https://miguellacorte.github.io/PAL_Website_2023/images/panels_hau.jpg"
                  alt="image1"
                  className="image"
                />
                <p className="text-images">
                  "The Forum" panels. Photo by Jamie Rosenberg
                </p>
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
                  <img
                    src="https://miguellacorte.github.io/PAL_Website_2023/images/panel_stratos.jpg"
                    alt="image2"
                    className="image"
                  />
                  <p className="text-images">
                    Panel close-up. Photo by Stratos Bichakis
                  </p>
                </div>
                <div
                  style={{
                    marginLeft: "1%",
                    marginTop: "1%",
                    marginRight: "0",
                    marginBottom: "1%",
                  }}
                >
                  <img
                    src="https://miguellacorte.github.io/PAL_Website_2023/images/IMG_5225 1.jpg"
                    alt="image3"
                    className="image"
                  />
                  <p className="text-images">
                    "The Forum" participants. Photo by Stratos Bichakis
                  </p>
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    marginLeft: "1%",
                    marginTop: "5%",
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
                    marginTop: "5%",
                    marginRight: "0",
                    marginBottom: "1%",
                    
                  }}
                >
                  <img
                    src="https://miguellacorte.github.io/PAL_Website_2023/images/booklets.jpg"
                    alt="image3"
                    className="image"
                    
                  />
                  <p className="text-images">Installation Booklet</p>
                </div>
              </div>

              <div
                style={{
                  marginLeft: "1%",
                  marginTop: "5%",
                  marginRight: "0",
                  marginBottom: "1%",
                  
                }}
              >
                <img
                  src="https://miguellacorte.github.io/PAL_Website_2023/images/panels_hau_2.jpg"
                  alt="image1"
                  className="image"
                />
                <p className="text-images">
                  "The Forum" Panels and "The Pulse" visualisation (purple
                  figure in translucent curtain). Photo by Jamie Rosenberg
                </p>
              </div>

              <div>
                <img
                  src="https://miguellacorte.github.io/PAL_Website_2023/images/pendulum_1.jpg"
                  alt="image1"
                  className="image"
                />
                <p className="text-images">
                  The Pendulum. Photo by Jamie Rosenberg
                </p>
              </div>

              <div className="image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CC0;
