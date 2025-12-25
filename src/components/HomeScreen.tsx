import { useNavigate } from "react-router-dom";
import { GameScreen } from "./GameScreen"

interface HomeScreenProps {
    backgroundUrl: string;
    onStart?: () => void;
}

export const HomeScreen = ({ backgroundUrl, onStart }: HomeScreenProps) => {
    const navigate = useNavigate();
    return (
        <GameScreen
            isHomeScreen={true}
            backgroundUrl={backgroundUrl}
            headline="Genius noci"
            onSelect={() => navigate('/hra')}
        >
            <button className="screen-text" style={{ border: "1px solid white" }} onClick={() => { onStart?.(); navigate('/hra') }}>Začít novou hru</button>
        </GameScreen>
    );
}