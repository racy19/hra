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
            <h1 className="text">Hra běží...</h1>
        </div>
    );
}