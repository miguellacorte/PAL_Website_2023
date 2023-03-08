import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <div>
        <h1 className="contact">
          For any enquiries, ideas, shared visions, concerns or memes
          get in touch{" "}
          <span>
            <a
              style={{ color: "white" }}
              href="mailto:miguel@participativeaudiolab.com"
            >
              here
            </a>
          </span>
        </h1>
      </div>

      <div className="socialMedia">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight:"1.5em",
            paddingLeft:"1em",
            paddingTop:"0"
          }}
        >
          <span>
            <a href="https://www.instagram.com/participative.audio.lab/">
              {" "}
              Instagram
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/participative.audio.lab/">
              <img
                className="inline-arrow"
                src="https://miguellacorte.github.io/PAL_Website_2023/images/Arrow%2010.png"
                alt="inline arrow"
              />
            </a>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight:"1.5em",
            paddingLeft:"1em",
            paddingTop:"0"
          }}
        >
          <span>
            <a href="https://twitter.com/participativeal">Twitter</a>
          </span>
          <span>
            <a href="https://twitter.com/participativeal">
              <img
                className="inline-arrow"
                src="https://miguellacorte.github.io/PAL_Website_2023/images/Arrow%2010.png"
                alt="inline arrow"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
