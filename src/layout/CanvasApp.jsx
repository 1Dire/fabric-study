import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import Toolbar from "../components/Toolbar";
import ImageBt from "../components/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Settings from "../components/Setting";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Video from "../components/Video";

const CanvasApp = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  // Toolbar 버튼 그룹 정의
  const buttonGroups = [
    { label: "Home", icon: "bi-square", onClick: () => addRectangle() },
    { label: "Profile", icon: "bi-circle", onClick: () => addCircle() },
  ];

  // Canvas 초기화 및 설정
  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,
      backgroundColor: "#fff",
    });
    setCanvas(initCanvas);
    initCanvas.renderAll();

    return () => {
      initCanvas.dispose();
    };
  }, []);

  // 사각형 추가
  const addRectangle = () => {
    if (canvas) {
      const rect = new fabric.Rect({
        top: canvas.height / 2 - 30,
        left: canvas.width / 2 - 50,
        width: 100,
        height: 60,
        fill: "#d2d2d2",
      });
      canvas.add(rect);
    }
  };

  // 원 추가
  const addCircle = () => {
    if (canvas) {
      const circle = new fabric.Circle({
        top: canvas.height / 2 - 50,
        left: canvas.width / 2 - 50,
        radius: 50,
        fill: "#d2d2d2",
      });
      canvas.add(circle);
    }
  };

  // 이미지 추가
  const addImage = (file) => {
    let imgObj = file;
    let render = new FileReader();
    render.readAsDataURL(imgObj);
    render.onload = (e) => {
      let imageUrl = e.target.result;
      let imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.onload = function () {
        let image = new fabric.Image(imageElement);
        
   
        const maxWidth = 400;  
        const maxHeight = 400; 
        let scaleX = 1;
        let scaleY = 1;

        if (image.width > maxWidth) {
          scaleX = maxWidth / image.width;
        }

        if (image.height > maxHeight) {
          scaleY = maxHeight / image.height;
        }


        image.scaleX = scaleX;
        image.scaleY = scaleY;


        canvas.add(image);
        canvas.centerObject(image);
        canvas.setActiveObject(image);
      };
    };
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
          <Video />
          <ImageBt onFileSelect={addImage} />
        </ButtonGroup>
      </ButtonToolbar>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Settings canvas={canvas} />
    </div>
  );
};

export default CanvasApp;
