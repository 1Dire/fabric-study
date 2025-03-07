import { useEffect, useRef, useState } from "react";
import FormInput from "../layout/FormInput";
function Settings({ canvas }) {
  const [selectedObject, setSelectedObject] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [color, setColor] = useState("");
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
      setDiameter(Math.round(object.raidus * 2 * object.scaleX));
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

  return (
    <div>
      {selectedObject && selectedObject.type === "rect" && (
        <>
          <FormInput value={width} />
          <FormInput value={height} />
        </>
      )}
    </div>
  );
}

export default Settings;
