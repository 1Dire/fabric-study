import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Toolbar({ buttonGroups, vertical, position }) {
  const [activeButton, setActiveButton] = useState(null);
  const toolbarStyle = {
    position: 'fixed',
    ...position, 
    zIndex: 9999, 
    transform: 'translateY(-50%)', 
  };
  return (
 
    <ButtonToolbar aria-label="Toolbar with button groups" style={toolbarStyle}>
      {buttonGroups.map((group, groupIndex) => (
        <ButtonGroup
          vertical={vertical}
          key={groupIndex}
          className="me-2"
          aria-label={`Group ${groupIndex + 1}`}
        >
          {group.map(({ icon, onClick }, btnIndex) => (
            <Button
              key={btnIndex}
              variant="dark"
              onClick={() => {
                setActiveButton(`${groupIndex}-${btnIndex}`);
                onClick();
              }}
            >
              <i className={`bi ${icon}`} style={{ fontSize: "1.2rem" }}></i>
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </ButtonToolbar>
  );
}

export default Toolbar;
