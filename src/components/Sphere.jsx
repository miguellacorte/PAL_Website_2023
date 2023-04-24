import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
// import 'p5/lib/addons/p5.dom';

const Sphere = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let sphere = null;

      p.preload = () => {
        sphere = p.loadModel('https://raw.githubusercontent.com/p5-templates/learn-p5js-cdn/main/examples/3D_Geometries/Sphere/sphere.obj');
      };

      p.setup = () => {
        const canvas = p.createCanvas(400, 400, p.WEBGL);
        canvas.parent('canvas-container');
        p.noStroke();
      };

      p.draw = () => {
        p.background(200);
        p.rotateY(p.frameCount * 0.01);

        // display sphere model
        p.model(sphere);
      };
    };

    new p5(sketch, sketchRef.current);
  }, []);

  return <div id="canvas-container" ref={sketchRef}></div>;
};

export default Sphere;
