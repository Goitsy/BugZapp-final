import "./darkmode.css";

//___plufg in icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode() {
  const handleDarkMode = () => {
    document.querySelector("body").classList.toggle("dark-mode");
  };
  return (
    <div className="dark-mode-icon">
      <FontAwesomeIcon icon={faLightbulb} onClick={handleDarkMode} />
    </div>
  );
}
