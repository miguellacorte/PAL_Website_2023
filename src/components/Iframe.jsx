import React, { useEffect } from 'react';
import '../styles/Iframe.css';

function Iframe() {
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    const iframeDoc = iframe.contentWindow.document;
    const iframeElement = iframeDoc.querySelector('.hero');

    console.log(iframe)
    // Check if the iframeElement exists before modifying its style
    // if (iframeElement) {
    // //   iframeElement.style.backgroundColor = 'white';
    // }
  }, []);

  return (
    <div className="iframe-container">
      <iframe src="https://cc0.participativeaudiolab.com"></iframe>
      <div className="text-overlay">
        <h1>This is some text overlayed on the iframe</h1>
      </div>
    </div>
  );
}

export default Iframe;