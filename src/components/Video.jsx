import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FabricImage } from "fabric";
const Video = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [fabricVideo, setFabricVideo] = useState([]);
  const [recordingChunks, setRecordingChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [loadPercentage, setLoadpercentage] = useState(0);
  const [uploadMessage, setUploadMessage] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);



  return (
    <>
      <Button variant="dark">
        <i className={`bi bi-film`} style={{ fontSize: "1.2rem" }}></i>
      </Button>
    </>
  );
};

export default Video;
