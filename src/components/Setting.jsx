import { useEffect, useRef, useState } from "react";
import FormInput from "./FormInput";
import ColorInput from "./ColorInput";
function Settings({ canvas }) {
  const [selectedObject, setSelectedObject] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {}, [diameter]);
  useEffect(() => {
    if (canvas) {
      canvas.on("selection:created", (event) => {
        handleObjectSelection(event.selected[0]);
      });
      canvas.on("selection:updated", (event) => {
        handleObjectSelection(event.selected[0]);
      });
      canvas.on("selection:cleared", () => {
        setSelectedObject(null);
        clearSetting();
      });
      canvas.on("object:modified", (event) => {
        handleObjectSelection(event.target);
      });
    }
  }, [canvas]);

  const handleObjectSelection = (object) => {
    if (!object) return;

    setSelectedObject(object);
    if (object.type == "rect") {
      setWidth(Math.round(object.width * object.scaleX));
      setHeight(Math.round(object.height * object.scaleY));
      setColor(object.fill);
      setDiameter("");
    }
    if (object.type == "circle") {
      setDiameter(Math.round(object.radius * 2 * object.scaleX));
      setColor(object.fill);
      setWidth("");
      setHeight("");
    }
  };

  const clearSetting = () => {
    setWidth("");
    setHeight("");
    setColor("");
    setDiameter("");
  };
  const handleWidthChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);
    setWidth(intValue);
    if (selectedObject && selectedObject.type === "rect" && intValue >= 0) {
      selectedObject.set({ width: intValue / selectedObject.scaleX });
      canvas.renderAll();
    }
  };
  const handleHeightChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);
    setHeight(intValue);
    if (selectedObject && selectedObject.type === "rect" && intValue >= 0) {
      selectedObject.set({ height: intValue / selectedObject.scaleY });
      canvas.renderAll();
    }
  };

  const handleDiameterChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);
    setDiameter(intValue);
    if (selectedObject && selectedObject.type === "circle" && intValue >= 0) {
      selectedObject.set({ radius: intValue / 2 / selectedObject.scaleY });
      canvas.renderAll();
    }
  };
  const handleColorChange = (e) => {
    const value = e.target.value;
    setColor(value);
    if (selectedObject) {
      selectedObject.set({ fill: value });
      canvas.renderAll();
    }
  };

  return (
    <div className="side-bar position-fixed end-0">
      <div>
      {selectedObject && selectedObject.type === "rect" && (
        <>
          <FormInput
            label="Width"
            value={width || ""}
            onChange={handleWidthChange}
          />
          <FormInput
            label="Height"
            value={height || ""}
            onChange={handleHeightChange}
          />
          <ColorInput
            label="Color"
            color={color}
            onChange={handleColorChange}
          />
        </>
      )}
      {selectedObject && selectedObject.type === "circle" && (
        <>
          <FormInput
            label="Diameter"
            value={diameter || ""}
            onChange={handleDiameterChange}
          />
          <ColorInput
            label="Color"
            color={color}
            onChange={handleColorChange}
          />
        </>
      )}
      </div>
   
    </div>
  );
}

export default Settings;
