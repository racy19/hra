import { useNavigate } from "react-router-dom";
import { GameScreen } from "./GameScreen"

interface HomeScreenProps {
    backgroundUrl: string;
}

export const HomeScreen = ({ backgroundUrl }: HomeScreenProps) => {
    const navigate = useNavigate();
    return <GameScreen isHomeScreen={true} backgroundUrl={backgroundUrl} >
        <button className="screen-text" onClick={() => navigate('/uvod')}>Začít novou hru</button>
    </GameScreen>
}