import { useNavigate } from "react-router-dom";

interface GameScreenProps {
  backgroundUrl?: string;
  headline?: string;
  mainText?: string;
  buttons?: { text: string, navigate: string }[];
  children?: React.ReactNode;
  isHomeScreen?: boolean;
}

interface ElectronAPI {
  quitApp: () => void;
}

export const GameScreen = ({ backgroundUrl, headline, mainText, buttons, children, isHomeScreen = false }: GameScreenProps) => {
  const navigate = useNavigate();

  const handleQuit = () => {
    const electronAPI = (window as unknown as { electronAPI?: ElectronAPI }).electronAPI;
    electronAPI?.quitApp?.();
  };

  return (
    <div className="screen">
      {backgroundUrl
        ? <img className="background-image" src={backgroundUrl} alt="Background" />
        : null
      }
      <div className="element-layer">
        <div className="button-top-container">
          <button className={isHomeScreen ? "invisible" : ""} onClick={() => navigate('/')}>{"< Ulozit a zpet"}</button>
          <button onClick={handleQuit}>X Zavrit uplne</button>
        </div>
        {(mainText || headline) &&
          <div className="screen-text-top">
            {headline && <h2 style={{ padding: "0 2rem" }}>{headline}</h2>}
            {mainText && <p>{mainText}</p>}
          </div>
        }
        <div className="button-container">
          {buttons?.map((button, index) => (
            <button key={index} onClick={() => navigate(`/${button.navigate.toLowerCase()}`)}>{
              button.text}
            </button>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}