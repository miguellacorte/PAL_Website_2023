import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <div>
        <h1 className="contact">
          For any enquiries, ideas, shared visions, concerns or memes get in
          touch{" "}
          <span>
            <a
              style={{ color: "white" }}
              href="mailto:miguel@participativeaudiolab.com"
            >
              here
            </a>
            {" "}or follow us on{" "}
            <a
              style={{ color: "white" }}
              href="https://twitter.com/participativeal"
            >
              Twitter
            </a>
            {" "}and{" "}
            <a
              style={{ color: "white" }}
              href="https://www.instagram.com/participative.audio.lab/"
            >
              Instagram
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
}
