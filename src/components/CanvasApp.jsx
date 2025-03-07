import { useEffect, useRef, useState } from "react";
import { Canvas, Rect, Circle } from "fabric";
import "../style.css";
import Settings from "./Setting";
const CanvasApp = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  useEffect(() => {
    const initCanvas = new Canvas(canvasRef.current, {
      width: 500,
      height: 500,
    });
    initCanvas.backgroundColor = "#fff";
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
      <button onClick={addRectangle}>네모 추가</button>
      <button onClick={addCircle}>동그라미 추가</button>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Settings canvas={canvas}/>
    </div>
  );
};

export default CanvasApp;
