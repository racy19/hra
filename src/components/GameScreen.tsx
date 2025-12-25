import { useNavigate } from "react-router-dom";

interface GameScreenProps {
  backgroundUrl?: string;
  headline?: string;
  mainText?: string;
  buttons?: { label: string, next: string }[];
  onSelect: (next: any) => void;
  health?: number;
  children?: React.ReactNode;
  isHomeScreen?: boolean;
}

interface ElectronAPI {
  quitApp: () => void;
}

export const GameScreen = ({ backgroundUrl, headline, mainText, buttons, onSelect, health, children, isHomeScreen = false }: GameScreenProps) => {
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
          <button className={isHomeScreen ? "invisible" : ""} onClick={() => navigate('/')}>{"< Zpět na start"}</button>
          {health &&
            <div className="health-display">
              <span>Zdraví:</span>
              <div className="bar" style={{ '--p': `${health}` } as React.CSSProperties}>
                <div className="fill"></div>
              </div>
              <span>{health} %</span>
            </div>
          }
          <button onClick={handleQuit}>X Zavřít úplně</button>
        </div>
        {(mainText || headline) &&
          <div className="screen-text-top">
            {headline && <h2 style={{ padding: "0 2rem" }}>{headline}</h2>}
            {mainText && <p style={{ textAlign: "left" }}>{mainText}</p>}
          </div>
        }
        <div className="button-container">
          {buttons?.map((button, index) => (
            <button key={index} onClick={() => onSelect(button)}>
              {button.label}
            </button>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}