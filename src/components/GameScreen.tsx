interface GameScreenProps {
  backgroundUrl?: string;
  children?: React.ReactNode;
}

export const GameScreen = ({ backgroundUrl, children }: GameScreenProps) => {
  return (
    <div className="screen">
      {backgroundUrl
        ? <img className="background-image" src={backgroundUrl} alt="Background" />
        : null
      }
      <div className="element-layer">
        <div className="button-top-container">
          <button>{"< Ulozit a zpet"}</button>
          <button>X Zavrit hru</button>
        </div>
        <p className="screen-text-top">Hra běží..tton 1 ty jeden curaku vyprcanej hlavne mi rekni kde mam t.</p>
        <div className="button-container">
          <button>button 1 ty jeden curaku vyprcanej hlavne mi rekni kde mam to pivo</button>
          <button>button 2</button>
          <button>button 3</button>
          <button>button 4den curaku vyprcanej hlavne mi rekni kde mam to pivo</button>
        </div>
      </div>
    </div>
  );
}