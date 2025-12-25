import { Route, Routes } from 'react-router-dom';
import './App.css'
import { HomeScreen } from './components/HomeScreen';
import Game from './components/Game';
import { useState } from 'react';

function App() {
  const [gameId, setGameId] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<HomeScreen backgroundUrl='../../public/images/background/forest.png' onStart={() => setGameId(id => id + 1)} />} />
      <Route
        path='/hra'
        element={<Game key={gameId} initialHealth={100} />}
      />
    </Routes>
  );
}

export default App