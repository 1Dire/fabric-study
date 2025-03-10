import { useEffect, useRef, useState } from "react";
import { Canvas, Rect, Circle } from "fabric";
import Toolbar from "../components/Toolbar";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Settings from "../components/Setting";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Video from "../components/Video"
const CanvasApp = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const buttonGroups = [
    { label: "Home", icon: "bi-square", onClick: () => addRectangle() },
    { label: "Profile", icon: "bi-circle", onClick: () => addCircle() },
  ];
  useEffect(() => {
    const initCanvas = new Canvas(canvasRef.current, {
      width: 500,
      height: 500,
      backgroundColor: "#fff",
    });

    initCanvas.renderAll();
    setCanvas(initCanvas);
    return () => {
      initCanvas.dispose();
    };
  }, []);

  const addRectangle = () => {
    if (canvas) {
      const rect = new Rect({
        top: canvas.height / 2 - 30,
        left: canvas.width / 2 - 50,
        width: 100,
        height: 60,
        fill: "#d2d2d2",
      });
      canvas.add(rect);
    }
  };
  const addCircle = () => {
    if (canvas) {
      const circle = new Circle({
        top: canvas.height / 2 - 50,
        left: canvas.width / 2 - 50,
        radius: 50,
        fill: "#d2d2d2",
      });
      canvas.add(circle);
    }
  };

  return (
    <div className="box">
      <ButtonToolbar
        aria-label="Toolbar with button groups"
        style={{
          position: "fixed",
          top: "50%",
          left: 10,
          zIndex: 9999,
          transform: "translateY(-50%)",
        }}
      >
        <ButtonGroup className="me-2" aria-label="First group" vertical={true}>
          <Toolbar buttonGroups={buttonGroups} />
          <Video/>
        </ButtonGroup>
      </ButtonToolbar>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Settings canvas={canvas} />
    </div>
  );
};

export default CanvasApp;
