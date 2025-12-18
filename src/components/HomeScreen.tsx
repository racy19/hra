import { useNavigate } from "react-router-dom";
import { GameScreen } from "./GameScreen"

interface HomeScreenProps {
    backgroundUrl: string;
}

export const HomeScreen = ({ backgroundUrl }: HomeScreenProps) => {
    const navigate = useNavigate();
    return (
        <GameScreen isHomeScreen={true} backgroundUrl={backgroundUrl} headline="Genius noci">
            <button className="screen-text" style={{ border: "1px solid white" }} onClick={() => navigate('/uvod')}>Začít novou hru</button>
        </GameScreen>
    );
}