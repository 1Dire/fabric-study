import { useEffect, useRef, useState } from "react";
import { Canvas, Rect, Circle } from "fabric";
import Toolbar from "../layout/Toolbar";
import Settings from "./Setting";

const CanvasApp = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
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
  const buttonGroups = [
    [
      { label: "Home", icon: "bi-square", onClick: () => addRectangle() },
      { label: "Profile", icon: "bi-circle", onClick: () => addCircle() },
    ],
  ];
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
      <Toolbar buttonGroups={buttonGroups} vertical={true}  position={{top:"50%",left:10}}/>

      <canvas id="canvas" ref={canvasRef}></canvas>
      <div className="toolbar">
        <Settings canvas={canvas} />
      </div>
    </div>
  );
};

export default CanvasApp;
