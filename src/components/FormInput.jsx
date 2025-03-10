import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function FormInput({ label, value ,onChange}) {

  return (
    <ButtonToolbar aria-label="Toolbar with Button groups">
      <InputGroup>
        <InputGroup.Text id="btnGroupAddon" style={{ width: "100px", textAlign: "center" }}>{label}</InputGroup.Text>
        <Form.Control
          type="number"
          defaultValue={value}
          onChange={onChange}
        />
      </InputGroup>
    </ButtonToolbar>
  );
}

export default FormInput;
