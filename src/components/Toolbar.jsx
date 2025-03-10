import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";

function Toolbar({ buttonGroups }) {
  return (
    <>
      {buttonGroups.map(({ icon, onClick }, btnIndex) => (
        <Button
          key={btnIndex}
          variant="dark"
          onClick={() => {
            onClick();
          }}
        >
          <i className={`bi ${icon}`} style={{ fontSize: "1.2rem" }}></i>
        </Button>
      ))}
    </>
  );
}

export default Toolbar;
