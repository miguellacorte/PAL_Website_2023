import React, { useEffect, useRef } from "react";
import p5 from "p5";

function Sketch() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create new p5 instance
    const sketchInstance = new p5(sketch, canvasRef.current);
  
    // Define the p5 sketch function
    function sketch(p) {
      let diameter = p.windowWidth / 3;
      let radius = diameter / 2;
      let filtered = [];
  
      p.setup = () => {
        let cnv = p.createCanvas(
          p.windowWidth / 2 + p.windowWidth / 8 - p.windowWidth / 10,
          p.windowWidth / 2 + p.windowWidth / 8 - p.windowWidth / 10,
          p.WEBGL
        );

        p.loadTable(
          "/smolerflights.csv",
          "csv",
          "header",
          (table) => {
            var rows = table.getRows();
            let pos = [];
            for (var r = 0; r < rows.length; r++) {
              pos.push({
                lat: rows[r].getNum("from_lat"),
                lon: rows[r].getNum("from_long"),
              });
            }
            filtered = dedup(pos);
          }
        );
  
        canvasRef.current = cnv.canvas;
      };
  
      p.draw = () => {
        p.angleMode(p.DEGREES);
        p.rotate(5, p.createVector(0, 0, 1));
        let yAxis = p.createVector(0, 1, 0);
        p.rotate(p.frameCount / 4, yAxis);
        p.background(0);
        for (var i = 0; i < filtered.length; i++) {
          let lon = filtered[i].lon;
          let lat = filtered[i].lat;
          let x = radius * p.cos(-lat) * p.cos(lon);
          let z = radius * p.cos(-lat) * p.sin(lon);
          let y = radius * p.sin(-lat);
          p.stroke(
            p.color(
              "hsb(0, 0%, " +
                (60 + p.sin((x + y + z) / 8) * p.random(40)).toString() +
                "%" +
                ")"
            )
          );
          p.point(x, y, z);
        }
        p.stroke("gray");
        p.noFill();
        p.ellipse(0, 0, diameter, diameter, 40);
        p.rotate(45, yAxis);
        p.ellipse(0, 0, diameter, diameter, 40);
        p.rotate(45, yAxis);
        p.ellipse(0, 0, diameter, diameter, 40);
        p.rotate(45, yAxis);
        p.ellipse(0, 0, diameter, diameter, 40);
      };
  

      function dedup(arr) {
        return arr.filter((item, i) => arr.indexOf(item) === i);
      }

      // return the setup and draw functions
      return { setup: p.setup, draw: p.draw };
    }

    // Return a cleanup function to remove the p5 instance when the component unmounts
    return () => {
      sketchInstance.remove();
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Sketch;