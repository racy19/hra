import { useEffect, useState } from "react"
import gameNodes from "../data/gameNodes.json"
import { GameScreen } from "./GameScreen";
import { HomeScreen } from "./HomeScreen";
import { useNavigate } from "react-router-dom";

function Game({ initialHealth }: { initialHealth: number }) {
    const [currentNode, setCurrentNode] = useState("intro");
    const [health, setHealth] = useState(initialHealth);
    const node = gameNodes[currentNode as keyof typeof gameNodes];

    const navigate = useNavigate();

    function handleSelect(option: any) {
        if (typeof option.health === "number") {
            setHealth(prev => Math.max(0, prev + option.health))
        }

        setCurrentNode(option.next)
    }

    console.log("Current Node:", currentNode, "Health:", health);

    return (
        health > 0 ? (
            <GameScreen
                backgroundUrl={`/images/background/${node.background}`}
                mainText={node.text}
                buttons={node.options}
                health={health}
                onSelect={(next) => handleSelect(next)}
            />
        ) : <GameScreen
            backgroundUrl='/images/background/forest.png'
            mainText="Bohužel... Nezvládl jsi se dostat včas z lesa a zemřel jsi. Můžeš to zkusit znovu."
            // buttons={[{ label: "Hrát znovu", next: "intro" }]}
            onSelect={(next) => {
                setCurrentNode(next.next);
                setHealth(initialHealth);
            }}
        />
    )
}

export default Game