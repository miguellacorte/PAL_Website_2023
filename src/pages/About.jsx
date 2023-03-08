import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="body-1">
        <h1>Introducing PAL</h1>
        <h3>The context</h3>
        <p>
          There is an inevitable urgency in re-defining our infrastructure of
          communication. Our models of connection and forms of culture
          distribution are deeply permeated by flawed industrial methods of
          creation based on control and extraction, generating a society of
          commodified attention.
        </p>
        <p>
          Setting creation as a closed-control process has conceived a culture
          of ubiquitous uniformity; value can solely be tracked by the quantity
          of connections rather than quality of connections. Amongst several
          outcomes, this has created a shallow perception of value in culture
          creators, which implies that culture is built by repetitive content
          rather than by unique meanings.
        </p>
        <p>
          In a time where we are facing the consequences of systematic
          extraction and control over our environments, we will not be able to
          reverse these issues until we fundamentally start to understand
          creation as a open and variable activity that is subject to change, as
          a system adaptable to the embedded chaos in nature.
        </p>
        <p> - </p>
        <p>
          We will not be able to reverse these issues until we create new
          infrastructure of communication where creation is conceived as a
          cooperative act and an open system where, parallel to nature, it can
          be subject to change and apatations.
        </p>
        <p>
          Today, the production of media is universal. The development of new
          infrastructure for music interaction on the web on top of the
          massification of personal computing, presents a unique opportunity for
          public access to the core sensorial experiences and creative processes
          which define our cultural essence. By granting the public power and
          control over the creative process, we can build a new conception of
          creation as an open system, where cooperation and adaptation take
          center stage rather than fixation and repetition.
        </p>
        <p>
          It is in this context where the Participative Audio Lab (PAL) is
          created, in the midst of a culture of closed creative control. PAL is
          an initiative aimed at harvesting a culture of open creation through
          the development of tools for participative music distribution.{" "}
        </p>
      </div>
      <div style={{ marginTop: " 6vw" }}>
        {" "}
        <h3>The vision: harvesting a culture of open creation</h3>
        <p className="quote">
          {" "}
          “ We must attribute to music a far more serious and profound
          significance that refers to the innermost being of the world and of
          our own self.”
        </p>
        <p style={{ textAlign: "right" }} className="body-1-vision">
          Schopenhauer in The World as Will and Representation.
        </p>
        <div style={{ marginTop: "5%" }}>
          <div>
            <p className="body-1-vision">
              {" "}
              Music has a unique and special quality to mirror our current
              underlying conditions of connection. It is no coincidence that it
              should be treated as the universal medium of collective creation.
              Its non-material quality allows it an immediate expansive action,
              capable of speaking a universal language; the language of the
              soul.{" "}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p className="body-1-vision">
                {" "}
                To find new forms of public music composition, is thus to find
                new forms of social organization.{" "}
              </p>
              <p className="body-1-vision">
                From music ecologies to cultural structures and finally to
                general social forms of organization, we can genearate a
                systematic change in society through systems of participation in
                music.
              </p>
            </div>
            <img
              className="culturalImage"
              src="https://www.participativeaudiolab.com/images/Group 3.png"
              alt="cultural landscape"
            />
          </div>
        </div>
        <h5>Creating new music ecologies</h5>
        <p className="body-1-vision">
          {" "}
          By distributing new forms of control over the creative process, we can
          create a new layer of intimacy between the composer and its public as
          an alternative dynamic to the current industrialized forms of music
          distribution and platform control. Fully accessible systems of
          participation can henceforth compliment the recording paradigm with a
          new layer of experience between the artist and its audience.
        </p>
        <h5>Opening new cultural landscapes</h5>
        <p className="body-1-vision">
          By allowing a space of interaction and enabling a new free
          distribution dynamic of the creative process, we can create a sense of
          open interconnection within this cultural structure, henceforth
          enabling open media ecologies.{" "}
        </p>
        <p className="body-1-vision">
          {" "}
          A open media ecology is thus a cultural system where the participation
          of the creative process isn’t closed solely to the connoisseur, but
          rather it is actively designed to remain open to public participation.
        </p>
        <p className="body-1-vision">
          {" "}
          Open media ecologies are deeply essential as a way to provide a new
          spirit in communication. Allowing new mechanisms of interaction to the
          public is awarding them new conceptions of action and attention from
          and towards our environments. Following the law of requisite variety,
          our potential for creation and imagination is directly proportional to
          the way we envision and treat our environments.
        </p>
        <h5>Harvesting a culture of open creation</h5>
        <p className="body-1-vision">
          {" "}
          Involving the creative process as a standard element within the medium
          is awarding the public the power and essence of creation. Beyond a
          simple moment of play, a redefinition of the entire media ecologies is
          occuring; an evolution from a closed model which establishes creation
          as a process of closed control, into an open model which actively
          promotes creation as a participative and adaptive experience. In other
          words, we are moving into an open model which actively invites the
          unknown person to the unknown experience, instead of inviting the
          unknown person to the known experience.
        </p>
        <p className="body-1-vision">
          {" "}
          Being with the unknown is hence, being by surrendering, or rather,
          being by not controling.
        </p>
        <p className="body-1-vision">
          {" "}
          It is at this moment, that a culture of open creation is born. When
          the seeds of cultural surrendering begin to exist parallel to the
          seeds of cultural control, we can begin to harvest an open society
        </p>{" "}
        <p className="downloadVisGuide">
          {" "}
          <span>
            Download the full Participative Audio Lab vision guide{" "}
            <a
              style={{ color: "white" }}
              href="https://drive.google.com/file/d/1MKpdi-qwD2RUAJdxhmgCadQ8jLbc2raZ/view?usp=sharing"
            >
              here
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
