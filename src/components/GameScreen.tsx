import { useNavigate } from "react-router-dom";

interface GameScreenProps {
  backgroundUrl?: string;
  children?: React.ReactNode;
  isHomeScreen?: boolean;
}

interface ElectronAPI {
  quitApp: () => void;
}

export const GameScreen = ({ backgroundUrl, children, isHomeScreen = false }: GameScreenProps) => {
  const navigate = useNavigate();

  const handleQuit = () => {
    // @ts-ignore pokud TypeScript neví o electronAPI
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
        {isHomeScreen ? null :
          (
            <>
              <p className="screen-text-top">Hra běží..tton 1 ty jeden curaku vyprcanej hlavne mi rekni kde mam t.</p>
              <div className="button-container">
                <button>button 1 ty jeden curaku vyprcanej hlavne mi rekni kde mam to pivo</button>
                <button>button 2</button>
                <button>button 3</button>
                <button>button 4den curaku vyprcanej hlavne mi rekni kde mam to pivo</button>
              </div></>
          )
        }
        {children}
      </div>
    </div>
  );
}