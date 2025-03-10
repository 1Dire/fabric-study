import { useRef } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";

const ImageBt = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // 버튼 클릭 시 파일 선택창 열기
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      onFileSelect(event.target.files[0]); // 선택한 파일 전달
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }} // 기본 파일 선택 input 숨기기
        onChange={handleFileChange}
      />
      <Button variant="dark" onClick={handleButtonClick}>
        <i className="bi bi-card-image" style={{ fontSize: "1.2rem" }}></i>
      </Button>
    </>
  );
};

export default ImageBt;
