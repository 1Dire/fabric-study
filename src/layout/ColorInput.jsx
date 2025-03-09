import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ColorInput({ label, color ,onChange}) {
  return (
    <>
      <ButtonToolbar aria-label="Toolbar with Button groups">
        <InputGroup>
          <InputGroup.Text
            id="btnGroupAddon"
            style={{ width: "100px", textAlign: "center" }}
          >
            {label}
          </InputGroup.Text>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue={color}
            onChange = {onChange}
            title="Choose your color"
            style={{
              height: "38px",
              width: "203px",
            }}
          />
        </InputGroup>
      </ButtonToolbar>
    </>
  );
}

export default ColorInput;
